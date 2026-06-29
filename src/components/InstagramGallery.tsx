import { useState, MouseEvent, FormEvent } from 'react';
import { INSTAGRAM_POSTS } from '../data/cafeData';
import { InstagramPost } from '../types';
import { Heart, MessageCircle, X, Instagram, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function InstagramGallery() {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);
  const [likesState, setLikesState] = useState<Record<string, { count: number; liked: boolean }>>(() => {
    const initial: Record<string, { count: number; liked: boolean }> = {};
    INSTAGRAM_POSTS.forEach((p) => {
      initial[p.id] = { count: p.likes, liked: false };
    });
    return initial;
  });

  const [commentsState, setCommentsState] = useState<Record<string, string[]>>(() => {
    const initial: Record<string, string[]> = {};
    INSTAGRAM_POSTS.forEach((p) => {
      initial[p.id] = [
        'Absolutely magical vibe here!',
        'That coffee pour is beautiful.',
        'Literally my favorite spot in the city.'
      ];
    });
    return initial;
  });

  const [newComment, setNewComment] = useState('');

  const handleLike = (id: string, e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setLikesState((prev) => {
      const current = prev[id];
      if (current.liked) {
        return { ...prev, [id]: { count: current.count - 1, liked: false } };
      } else {
        return { ...prev, [id]: { count: current.count + 1, liked: true } };
      }
    });
  };

  const handleAddComment = (e: FormEvent) => {
    e.preventDefault();
    if (!selectedPost || !newComment.trim()) return;

    setCommentsState((prev) => ({
      ...prev,
      [selectedPost.id]: [...prev[selectedPost.id], newComment.trim()]
    }));
    setNewComment('');
  };

  return (
    <section id="instagram" className="py-24 bg-cafe-bg dark:bg-cafe-dark transition-colors duration-700 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] uppercase font-mono text-cafe-gold font-medium block mb-3">
            05 / Social Canvas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cafe-dark dark:text-cafe-cream font-light tracking-tight mb-4">
            Hidden Away.<br />
            <span className="italic font-normal text-cafe-brown dark:text-cafe-gold">Shared Everywhere.</span>
          </h2>
          <p className="text-xs md:text-sm text-cafe-dark/60 dark:text-cafe-cream/60 leading-relaxed font-sans font-light">
            Capture your calm. Tag us at <span className="font-mono font-semibold text-cafe-gold">@thehiddenmug</span> to be featured in our physical and digital gallery.
          </p>
        </div>

        {/* Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {INSTAGRAM_POSTS.map((post) => {
            const hasLiked = likesState[post.id]?.liked;
            const currentLikes = likesState[post.id]?.count || post.likes;

            return (
              <motion.div
                key={post.id}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedPost(post)}
                className="group relative aspect-square overflow-hidden bg-cafe-cream border border-cafe-beige/30 dark:border-cafe-brown/20 cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Dark Hover overlay with counters */}
                <div className="absolute inset-0 bg-cafe-dark/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-cafe-bg gap-3 z-10">
                  <Instagram className="w-5 h-5 text-cafe-gold mb-1" />
                  <div className="flex gap-4 font-mono text-xs font-semibold">
                    <span className="flex items-center gap-1.5 hover:text-red-400 transition-colors" onClick={(e) => handleLike(post.id, e)}>
                      <Heart className={`w-4 h-4 ${hasLiked ? 'fill-red-500 text-red-500' : ''}`} />
                      {currentLikes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-4 h-4" />
                      {commentsState[post.id]?.length || 3}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-cafe-cream/70 mt-2 hover:text-cafe-gold transition-colors">
                    View & Comment
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-transparent border border-cafe-gold hover:bg-cafe-gold hover:text-cafe-dark text-cafe-gold font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            Follow Our Journey
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Instagram Post Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
              className="absolute inset-0 bg-cafe-dark/80 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl bg-cafe-bg dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/25 grid grid-cols-1 md:grid-cols-12 overflow-hidden max-h-[85vh] md:max-h-[75vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-cafe-dark/80 text-cafe-bg hover:text-cafe-gold hover:bg-cafe-dark transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Column: Post Image */}
              <div className="md:col-span-6 bg-black flex items-center justify-center aspect-square md:aspect-auto">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover max-h-[50vh] md:max-h-full"
                />
              </div>

              {/* Right Column: Social Interactivity Panel */}
              <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-cafe-bg dark:bg-cafe-dark">
                <div>
                  {/* Account Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-cafe-beige/20 dark:border-cafe-brown/10 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cafe-brown text-cafe-bg flex items-center justify-center font-bold text-xs font-mono">
                      HM
                    </div>
                    <div>
                      <span className="font-sans font-bold text-sm text-cafe-dark dark:text-cafe-cream block">
                        thehiddenmug
                      </span>
                      <span className="text-[10px] text-cafe-gold font-mono uppercase tracking-widest block">
                        Verified Sanctuary
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mb-6">
                    <p className="text-xs md:text-sm text-cafe-dark dark:text-cafe-cream leading-relaxed font-sans font-light">
                      {selectedPost.caption}
                    </p>
                  </div>

                  {/* Dynamic Comments list */}
                  <div className="mb-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-cafe-gold font-bold block mb-3">
                      Guestbook & Chatter
                    </span>
                    <div className="space-y-3 max-h-[160px] overflow-y-auto no-scrollbar pr-2">
                      {commentsState[selectedPost.id]?.map((comment, index) => (
                        <div key={index} className="bg-cafe-cream/40 dark:bg-cafe-brown/10 p-2.5 border border-cafe-beige/10">
                          <span className="text-[9px] font-mono text-cafe-gold uppercase tracking-wider block font-bold mb-1">
                            Guest @{selectedPost.id}_{index + 322}
                          </span>
                          <span className="text-xs text-cafe-dark dark:text-cafe-cream leading-relaxed block font-sans">
                            {comment}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom interactive row */}
                <div>
                  {/* Like/Interact bar */}
                  <div className="flex justify-between items-center py-3 border-t border-b border-cafe-beige/20 dark:border-cafe-brown/10 mb-4">
                    <div className="flex gap-4">
                      <button
                        onClick={() => handleLike(selectedPost.id)}
                        className={`flex items-center gap-1.5 font-mono text-xs transition-colors ${
                          likesState[selectedPost.id]?.liked ? 'text-red-500' : 'text-cafe-dark/70 dark:text-cafe-cream/70 hover:text-red-500'
                        }`}
                      >
                        <Heart className={`w-4.5 h-4.5 ${likesState[selectedPost.id]?.liked ? 'fill-red-500 text-red-500' : ''}`} />
                        <span className="font-semibold">{likesState[selectedPost.id]?.count} Likes</span>
                      </button>
                      <span className="flex items-center gap-1.5 font-mono text-xs text-cafe-dark/70 dark:text-cafe-cream/70">
                        <MessageCircle className="w-4.5 h-4.5 text-cafe-gold" />
                        <span className="font-semibold">{commentsState[selectedPost.id]?.length} comments</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cafe-gold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cafe-gold inline" />
                      Live Feed
                    </span>
                  </div>

                  {/* Comment submit form */}
                  <form onSubmit={handleAddComment} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add an aesthetic comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="flex-1 px-3 py-2 bg-cafe-cream dark:bg-cafe-dark border border-cafe-beige/40 dark:border-cafe-brown/25 text-xs text-cafe-dark dark:text-cafe-cream focus:outline-none focus:border-cafe-gold"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-cafe-brown dark:bg-cafe-gold text-cafe-bg dark:text-cafe-dark font-mono text-[10px] uppercase tracking-widest font-bold hover:bg-cafe-dark dark:hover:bg-cafe-cream transition-colors"
                    >
                      Post
                    </button>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

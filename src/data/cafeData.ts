import { MenuItem, CafeSpace, CafeEvent, Review, InstagramPost } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'm1',
    name: 'The Hidden Latte',
    description: 'Our signature espresso infused with house-made Madagascar vanilla-bean syrup, fresh orange zest oils, and topped with 24k edible gold leaf.',
    price: '$6.75',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600&auto=format&fit=crop',
    tags: ['Signature', 'Award Winner']
  },
  {
    id: 'm2',
    name: 'Kyoto Cold Brew',
    description: 'Slow-dripped for 24 hours through a towering Japanese glass apparatus, infused with organic lavender-blossom maple syrup.',
    price: '$7.00',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600&auto=format&fit=crop',
    tags: ['Cold Brew', 'Floral']
  },
  {
    id: 'm3',
    name: 'Sea Salt Caramel Flat White',
    description: 'Rich ristretto espresso topped with micro-foamed oat milk, house caramel reduction, and a sprinkle of hand-harvested Maldon sea salt crystals.',
    price: '$6.25',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=600&auto=format&fit=crop',
    tags: ['Popular', 'Creamy']
  },
  {
    id: 'm4',
    name: 'Ceremonial Matcha Cortado',
    description: 'Stone-ground Uji matcha whisked with absolute precision, cut with warm velvety oat milk and a touch of sweet organic honeysuckle nectar.',
    price: '$6.50',
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=600&auto=format&fit=crop',
    tags: ['Superfood', 'Japanese']
  },
  {
    id: 'm5',
    name: 'Earl Grey Lavender Chiffon',
    description: 'An airy, delicate chiffon sponge cake infused with organic bergamot tea, layered and frosted with freshly whipped lavender blossom cream.',
    price: '$8.50',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    tags: ['Signature', 'House Baked']
  },
  {
    id: 'm6',
    name: 'Yuzu Matcha Tart',
    description: 'Bright, zesty Japanese yuzu lemon curd housed in a buttery stone-ground matcha shortbread crust, topped with toasted Italian meringue kisses.',
    price: '$7.50',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600&auto=format&fit=crop',
    tags: ['Tangy', 'Vibrant']
  },
  {
    id: 'm7',
    name: 'Espresso Tiramisu Choux',
    description: 'Crisp, craquelin-capped choux pastry shell filled to the brim with single-origin espresso paste and rich whipped mascarpone mousse.',
    price: '$9.00',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop',
    tags: ['Decadent']
  },
  {
    id: 'm8',
    name: 'Cardamom Pistachio Croissant',
    description: 'Flakey, 72-hour laminated pastry loaded with direct-trade Iranian pistachio frangipane paste and brushed with a fragrant wild cardamom glaze.',
    price: '$6.50',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    tags: ['Flakey', 'Fragrant']
  },
  {
    id: 'm9',
    name: 'Botanical Charcoal Tonic',
    description: 'Layers of premium activated coconut charcoal extract, house elderflower tonic water, capped with a double shot of bright single-origin Ethiopian espresso.',
    price: '$8.00',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=600&auto=format&fit=crop',
    tags: ['Zero-Proof', 'Cinematic']
  },
  {
    id: 'm10',
    name: 'Rose Gold Espresso Soda',
    description: 'Chilled artisanal sparkling mineral water, Bulgarian rose-water reduction, shaken espresso, and micro-sprinkles of dazzling edible gold shimmer.',
    price: '$7.50',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=600&auto=format&fit=crop',
    tags: ['Refreshing', 'Sparkling']
  },
  {
    id: 'm11',
    name: 'Melted S’mores Mocha',
    description: 'Melted dark artisanal cacao, dynamic double espresso, sweet micro-foamed oat milk, complete with toasted marshmallow foam and a crushed graham cracker rim.',
    price: '$8.50',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop',
    tags: ['Comfort', 'Sweet']
  },
  {
    id: 'm12',
    name: 'Smoked Rosemary Shakerato',
    description: 'Double espresso aerated with raw Demerara sugar, shaken over ice with fresh organic rosemary, and served in a glass dome trapped with sweet applewood smoke.',
    price: '$8.50',
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop',
    tags: ['Smoked', 'Interactive']
  },
  {
    id: 'm13',
    name: 'Aged Maple Pecan Affogato',
    description: 'Two scoops of house-churned Tahitian vanilla bean gelato, hot double espresso, drizzled with 10-year barrel-aged maple syrup and crispy toasted Georgia pecans.',
    price: '$9.00',
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1594911774802-8822a707c9f2?q=80&w=600&auto=format&fit=crop',
    tags: ['Indulgent', 'Warm']
  },
  {
    id: 'm14',
    name: 'Spiced Plum Cold Foam',
    description: 'Our smooth-crafted cold brew topped with a thick, velvety layer of aerated wild plum and ground cardamom cold foam.',
    price: '$7.50',
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop',
    tags: ['Spiced', 'Fruity']
  }
];

export const CAFE_SPACES: CafeSpace[] = [
  {
    id: 's1',
    name: 'The Reading Corner',
    description: 'Surrounded by floor-to-ceiling indie literature and vinyl records, featuring deep leather armchairs, soft low-temperature glowing lamps, and absolute acoustic silence.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop',
    features: ['Indie Book Library', 'Vintage Vinyl Player', 'Acoustic Silence', 'Leather Lounge Seating'],
    vibe: 'Cozy & Intellectual'
  },
  {
    id: 's2',
    name: 'The Creator’s Studio',
    description: 'Tailored for focus and aesthetics. Boasting sand-textured backdrops, diffused natural window lighting, adjustable softboxes, and clean minimal design accents.',
    image: 'https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=800&auto=format&fit=crop',
    features: ['Natural Golden Light', 'Minimalist Props', 'Softbox Mounts', 'Textured Walls'],
    vibe: 'Aesthetic & Creative'
  },
  {
    id: 's3',
    name: 'The Ivy Canopy (Outdoor)',
    description: 'A magical outdoor escape shaded by cascading English ivy, suspended warm fairy lights, stone-fountain sounds, and rustic hand-forged wrought iron tables.',
    image: 'https://images.unsplash.com/photo-1531971589569-0d93700fd1a5?q=80&w=800&auto=format&fit=crop',
    features: ['Cascading Ivy', 'Water Fountain Soundscape', 'Fairy Lights', 'Heated Patio Tables'],
    vibe: 'Dreamy & Romantic'
  },
  {
    id: 's4',
    name: 'The Rain Window',
    description: 'Sleek dark oak bar tops overlooking the bustling street outside, outfitted with warm rain-simulation glass panels and premium wireless noise-canceling headphone docks.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop',
    features: ['Headphone Docks', 'Street Views', 'Rain-misted Panels', 'USB-C Charging Rails'],
    vibe: 'Reflective & Moody'
  },
  {
    id: 's5',
    name: 'The Deep Focus Zone',
    description: 'Designed for the modern builder. Complete with solid walnut standing desks, custom leather writing blotters, complimentary paper pads, and high-speed fiber-optic WiFi.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    features: ['Ergonomic Stools', 'Fiber WiFi (500Mbps)', 'Desk Power Ports', 'Free Sketchpads'],
    vibe: 'Productive & Refined'
  }
];

export const CAFE_EVENTS: CafeEvent[] = [
  {
    id: 'e1',
    title: 'Acoustic Sunset Sessions',
    description: 'An intimate candlelit performance by rising local indie singer-songwriters, set against the backdrop of our amber-lit garden.',
    date: 'Friday, July 10',
    time: '7:30 PM - 9:30 PM',
    spotsLeft: 12,
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600&auto=format&fit=crop',
    tag: 'Live Music'
  },
  {
    id: 'e2',
    title: 'Pour-Over Masterclass',
    description: 'Deconstruct brewing ratios, extraction chemistry, and hand-pouring techniques with our award-winning Head Barista.',
    date: 'Sunday, July 19',
    time: '10:00 AM - 12:00 PM',
    spotsLeft: 5,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop',
    tag: 'Workshop'
  },
  {
    id: 'e3',
    title: 'Clay & Sip: Ceramic Painting',
    description: 'Paint your own custom espresso demitasse cup under the guidance of ceramic artist Liam Hall, with complimentary signature beverages.',
    date: 'Saturday, July 25',
    time: '2:00 PM - 4:30 PM',
    spotsLeft: 8,
    image: 'https://images.unsplash.com/photo-1565192647048-f997ded87958?q=80&w=600&auto=format&fit=crop',
    tag: 'Creativity'
  },
  {
    id: 'e4',
    title: 'Underground Coffee Tasting',
    description: 'A sensory journey tasting rare, exclusive micro-lots from Panama and Ethiopia, paired with tailored vegan desserts.',
    date: 'Thursday, August 6',
    time: '6:00 PM - 7:30 PM',
    spotsLeft: 6,
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop',
    tag: 'Tasting'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Sarah Jenkins',
    role: 'Aesthetic Traveler & Journalist',
    text: 'Walking through that unmarked oak door felt like discovering a cozy, magical portal. The Hidden Latte was literally a masterpiece, and the book collection is hand-curated beautifully.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop',
    date: 'June 22, 2026'
  },
  {
    id: 'r2',
    name: 'Tyler Kincaid',
    role: 'Remote Software Designer',
    text: 'The Deep Focus Zone is unmatched. Ultra-fast WiFi, beautiful walnut tables, and the Cardamom Croissant has perfectly crispy laminations. This is my absolute favorite hidden sanctuary.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
    date: 'June 18, 2026'
  },
  {
    id: 'r3',
    name: 'Elena Rostova',
    role: 'Editorial Director & Influencer',
    text: 'Your next viral reel starts here, indeed! The lighting in the Creator Corner is stunning, and the Smoked Rosemary Shakerato served under a smoked glass dome is pure art.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
    date: 'June 27, 2026'
  },
  {
    id: 'r4',
    name: 'Marcus Vance',
    role: 'Coffee Grader & Enthusiast',
    text: 'As a coffee grader, I am skeptical of "aesthetic" shops. But the Kyoto Cold Brew blew me away. Perfectly balanced acidity, clean extraction notes, and absolute respect for the bean.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop',
    date: 'June 25, 2026'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'p1',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=500&auto=format&fit=crop',
    likes: 1240,
    comments: 48,
    caption: 'Tucked away. Brewed with absolute intent. Pouring our award-winning Flat White all weekend. ☕️✨ #TheHiddenMug #Sanctuary'
  },
  {
    id: 'p2',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=500&auto=format&fit=crop',
    likes: 2315,
    comments: 92,
    caption: 'Soft sunlight, a good book, and fresh Earl Grey Lavender Chiffon Cake. Time slows down in our Reading Corner. 📖🌿 #AestheticCafes #SlowLiving'
  },
  {
    id: 'p3',
    image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=500&auto=format&fit=crop',
    likes: 1890,
    comments: 64,
    caption: 'Your creative playground awaits. The Creator Studio is fully outfitted with softboxes, sand backdrops, and golden light. 📸💡 #CreatorsHideout #CafeCreative'
  },
  {
    id: 'p4',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500&auto=format&fit=crop',
    likes: 1542,
    comments: 39,
    caption: 'The Smoked Rosemary Shakerato under the dome. Interactive, fragrant, and profoundly rich. Ready for your sensory test? 💨☕️ #SpecialtyCoffee #Mixology'
  },
  {
    id: 'p5',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500&auto=format&fit=crop',
    likes: 2108,
    comments: 75,
    caption: 'Rainy vibes on a Sunday afternoon. Noise-canceling headphones at the rain window bar. Find your peace. 🌧️🎧 #RainyDayCafe #DeepFocus'
  },
  {
    id: 'p6',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=500&auto=format&fit=crop',
    likes: 2950,
    comments: 112,
    caption: 'Discovering the entrance is part of the journey. Secret Member Nook members got a key to our latest single-origin lot today. Passcode in bio. 🔑🚪 #HiddenGems #SecretMug'
  }
];

export const SECRET_MENU_ITEMS: MenuItem[] = [
  {
    id: 's-m1',
    name: 'The Midnight Velvet',
    description: 'Double espresso pulled over house-made organic blackberry syrup, dynamic steamed cocoa, elderberry flower foam, topped with organic dried rosebuds.',
    price: '$8.50',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=600&auto=format&fit=crop',
    tags: ['Nook Secret', 'Velvety']
  },
  {
    id: 's-m2',
    name: 'Honeysuckle Espresso Tonic',
    description: 'Crisp artisanal tonic water, freshly cold-infused honeysuckle infusion, micro-dose of sweet lime bitters, and sparkling single-origin shot.',
    price: '$8.00',
    category: 'special',
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=600&auto=format&fit=crop',
    tags: ['Nook Secret', 'Botanical']
  },
  {
    id: 's-m3',
    name: 'Toasted Cardamom Crème Brûlée Tart',
    description: 'Silky rich egg yolk custard infused with hand-cracked green cardamom, topped with glass-like caramelized Demerara sugar inside a pistachio tart crust.',
    price: '$9.50',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?q=80&w=600&auto=format&fit=crop',
    tags: ['Nook Secret', 'Limited Edition']
  }
];

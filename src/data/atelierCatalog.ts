import type { MediaAssetKey } from '../assets/mediaAssets';

export const HERITAGE_PORTRAIT_KEY: MediaAssetKey = 'portrait';

export interface BottleProduct {
  id: string;
  brandKicker?: string;
  titleLine1: string;
  titleLine2: string;
  fullName: string;
  subtitle: string;
  abv: string;
  volume: string;
  priceLabel: string;
  provenance: string;
  image: MediaAssetKey;
  imageAlt: string;
  description: string;
  tastingNotes: string[];
  details: { label: string; value: string }[];
}

export interface EditorialStory {
  id: string;
  kicker: string;
  title: string;
  ctaLabel: string;
  image: MediaAssetKey;
  imageAlt: string;
  objectPosition?: string;
  subtitle: string;
  readTime: string;
  location: string;
  paragraphs: string[];
  details: { label: string; value: string }[];
}

export interface SignaturePiece {
  id: string;
  title: string;
  category: 'Martini' | 'Spritz' | 'Evening';
  description: string;
  image: MediaAssetKey;
  imageAlt: string;
  objectPosition: string;
  specs: {
    spirit: string;
    glassware: string;
    ice: string;
    garnish: string;
    occasion: string;
  };
  notes: string[];
}

export interface MaisonEdition {
  id: string;
  brandLine: string;
  name: string;
  subtitle: string;
  description: string;
  image: MediaAssetKey;
  imageAlt: string;
  objectPosition: string;
  priceLabel: string;
  provenance: string;
  notes: string;
  isBottle?: boolean;
}

export const HERO_CONTENT = {
  kicker: 'BULGARIAN WHITE HORSE® VODKA',
  headlineLine1: 'PURE FROM',
  headlineLine2: 'RILA TO GLASS',
  description:
    'Distilled from Thracian winter wheat and naturally filtered through the glacial granite of Bulgaria’s Seven Rila Lakes. Presented alongside our debut muse campaign—crafted for luminous clarity and effortless evening poise.',
  ctaLabel: 'Explore White Horse Bottles',
  heroImage: 'rilaLakes' as MediaAssetKey,
  heroImageAlt: 'High-altitude glacial panorama of the Seven Rila Lakes in Bulgaria under clear alpine sky',
};

export const BOTTLE_COLLECTION: BottleProduct[] = [
  {
    id: 'bulgarian-white-horse-vodka',
    titleLine1: 'BULGARIAN WHITE HORSE®',
    titleLine2: 'VODKA',
    fullName: 'Bulgarian White Horse® Vodka',
    subtitle: 'Original Glacial Edition · 40% ABV',
    abv: '40% ABV',
    volume: '700 ml',
    priceLabel: '€64',
    provenance: 'Distilled in Rila, Bulgaria',
    image: 'bottleVodka',
    imageAlt:
      'Bulgarian White Horse frosted glass vodka bottle featuring a royal blue white-horse neck collar and Seven Rila Lakes exterior panorama',
    description:
      'Our flagship expression. Soft Bulgarian winter wheat is five-times copper distilled and married with mineral-pure snowmelt from the Seven Rila Lakes, framed across our frosted alpine bottle.',
    tastingNotes: [
      'Nose: Crisp mountain mist, crushed almond, and delicate white blossom.',
      'Palate: Velvety mineral weight with clean cracked-wheat sweetness and zero burn.',
      'Finish: Lingering alpine silkiness calibrated for neat freezer pours or dry martinis.',
    ],
    details: [
      { label: 'Water Source', value: 'Seven Rila Lakes (2,300m)' },
      { label: 'Grain', value: 'Single-Harvest Thracian Wheat' },
      { label: 'Filtration', value: 'Quartz & Alpine Charcoal' },
    ],
  },
  {
    id: 'bulgarian-white-horse-rila-reserve',
    titleLine1: 'BULGARIAN WHITE HORSE®',
    titleLine2: 'RILA RESERVE',
    fullName: 'Bulgarian White Horse® Rila Reserve',
    subtitle: 'High-Altitude Crystal Decanter · 40% ABV',
    abv: '40% ABV',
    volume: '700 ml',
    priceLabel: '€135',
    provenance: 'Small-Batch Glacial Reserve',
    image: 'bottleReserve',
    imageAlt:
      'Bulgarian White Horse Rila Reserve tapered faceted crystal bottle displaying the Seven Rila Lakes vista',
    description:
      'Rested in stainless steel vats cooled by natural mountain air and bottled in a hand-faceted crystal carafe sculpted after Rila’s jagged ridges and turquoise cirque lakes.',
    tastingNotes: [
      'Nose: Glacial ozone, faint wild thyme, and white peppercorn.',
      'Palate: Extraordinary crystalline viscosity with chilled river-stone purity.',
      'Finish: Long, poised, and mineral-bright—best served neat over a single hand-carved ice sphere.',
    ],
    details: [
      { label: 'Edition', value: 'Numbered Alpine Carafe' },
      { label: 'Resting', value: '90-Day Cold Stone Rest' },
      { label: 'Vessel', value: 'Faceted Crystal Glass' },
    ],
  },
  {
    id: 'bulgarian-white-horse-seven-lakes-martini',
    brandKicker: 'BULGARIAN WHITE HORSE®',
    titleLine1: 'SEVEN LAKES',
    titleLine2: 'MARTINI EDITION',
    fullName: 'Bulgarian White Horse® Seven Lakes Martini',
    subtitle: 'Pre-Chilled Aperitif Blend · 35% ABV',
    abv: '35% ABV',
    volume: '700 ml',
    priceLabel: '€72',
    provenance: 'Crafted for Immediate Pour',
    image: 'bottleMartini',
    imageAlt:
      'Bulgarian White Horse Seven Lakes Martini frosted bottle with silver neck band and martini glass window framing the Rila Lakes',
    description:
      'Pre-married in small batches with dry Balkan vermouth botanicals and a whisper of lemon peel oil—ready straight from the freezer into a chilled coupe for gallery openings and midnight soirées.',
    tastingNotes: [
      'Nose: Bright Amalfi lemon zest, wild chamomile, and crisp mountain air.',
      'Palate: Silky dry martini balance with herbal elegance and soft grain backbone.',
      'Finish: Clean, brisk, and aromatic—garnish only with a twisted lemon ribbon.',
    ],
    details: [
      { label: 'Botanicals', value: 'Dry Vermouth & Mountain Herb' },
      { label: 'Serve Temp', value: '-12°C Straight from Freezer' },
      { label: 'Pairing', value: 'Chilled Coupe & Lemon Twist' },
    ],
  },
];

export const FEATURE_SPLIT_STORIES: [EditorialStory, EditorialStory] = [
  {
    id: 'campaign-muse-nocturne',
    kicker: 'Launch Campaign Muse',
    title: 'Midnight Pour at the Gilded Salon',
    ctaLabel: 'View Campaign',
    image: 'salon',
    imageAlt:
      'Campaign muse in a black evening gown inside a gilded salon introducing Bulgarian White Horse vodka',
    objectPosition: 'center 30%',
    subtitle: 'Introducing Bulgarian White Horse Through Our Debut Muse',
    readTime: '3 min read',
    location: 'Sofia & Paris Preview',
    paragraphs: [
      'To unveil Bulgarian White Horse before its global bottle release, we stepped inside gilded neoclassical salons with our debut campaign muse—capturing the poise, contrast, and nocturnal glamour at the heart of our spirit.',
      'Just as obsidian silk absorbs warm candlelight, our five-times-distilled Rila wheat vodka brings effortless stillness to the evening table—cool, architectural, and unmistakably refined.',
    ],
    details: [
      { label: 'Campaign', value: 'Debut Vodka Reveal' },
      { label: 'Spirit', value: 'Bulgarian White Horse®' },
      { label: 'Water', value: 'Seven Rila Lakes' },
    ],
  },
  {
    id: 'muse-behind-the-spirit',
    kicker: 'Editorial Portrait',
    title: 'Chiaroscuro & Alpine Clarity',
    ctaLabel: 'Read Story',
    image: 'portrait',
    imageAlt:
      'Close-up campaign muse portrait showcasing the luminous atmosphere behind Bulgarian White Horse vodka',
    objectPosition: 'center 20%',
    subtitle: 'Why Modern Luxury Vodka Begins With Editorial Storytelling',
    readTime: '4 min read',
    location: 'Rila & European Tour',
    paragraphs: [
      'Before a single case reached flagship bars, our founding visual series centered on a singular presence: unhurried confidence after dusk. Every portrait pairs low-key warmth against the crystalline chill of Bulgarian White Horse.',
      'From private cars between midnight tastings to candlelit salon pours, the campaign expresses what words alone cannot—pure Bulgarian craftsmanship dressed for the world’s finest nights.',
    ],
    details: [
      { label: 'Distillery', value: 'Rila Foothills, Bulgaria' },
      { label: 'Muse Series', value: 'Nocturne Frames I–V' },
      { label: 'Release', value: '2026 Inaugural Batch' },
    ],
  },
];

export const HERITAGE_CHAPTERS = [
  {
    index: '01.',
    title: 'Seven Rila Lakes',
    location: '2,300m Glacial Source',
    summary:
      'High in Bulgaria’s Rila massif, pure snowmelt filters naturally across ancient granite basins—delivering water so soft and mineral-balanced it requires no artificial softening.',
  },
  {
    index: '02.',
    title: 'Thracian Wheat',
    location: 'Single-Origin Grain',
    summary:
      'Harvested across Bulgaria’s fertile Thracian Valley, plump winter wheat gives Bulgarian White Horse its signature creamy mouthfeel and delicate almond finish.',
  },
  {
    index: '03.',
    title: 'The Muse & The Night',
    location: 'Campaign Craft',
    summary:
      'Our launch portraits travel from gilded European salons to late-night drives—introducing the world to a Bulgarian spirit shaped for celebration and quiet elegance.',
  },
];

export const SIGNATURE_PIECES: SignaturePiece[] = [
  {
    id: 'seven-lakes-martini',
    title: 'Seven Lakes Dry Martini',
    category: 'Martini',
    description:
      'An ultra-clean tribute to Rila’s crystal basins. Stirred for thirty unhurried rotations with a whisper of dry vermouth and served ice-cold for our evening campaign muse.',
    image: 'triptych',
    imageAlt:
      'Three-frame evening campaign muse portrait celebrating the Seven Lakes Dry Martini serve',
    objectPosition: 'center center',
    specs: {
      spirit: '60 ml Bulgarian White Horse® Vodka',
      glassware: 'Frozen Nick & Nora Coupe',
      ice: 'Hand-Cut Crystal Block (Stir)',
      garnish: 'Expressed Amalfi Lemon Zest',
      occasion: 'Late-Evening Campaign Pour',
    },
    notes: [
      'Chill both the frosted bottle and glassware to -12°C prior to pouring.',
      'Stir gently with 10 ml extra-dry vermouth for 25–30 seconds without bruising.',
      'Express fresh lemon oils directly across the rim and discard the peel.',
    ],
  },
  {
    id: 'rila-reserve-neat',
    title: 'Rila Reserve on Crystal',
    category: 'Evening',
    description:
      'Designed to highlight the natural alpine minerality of Rila Reserve without distraction—poured alongside intimate twilight portraits in our launch film.',
    image: 'portrait',
    imageAlt:
      'Campaign muse portrait representing the poised Rila Reserve neat evening pour',
    objectPosition: 'center 20%',
    specs: {
      spirit: '50 ml White Horse® Rila Reserve',
      glassware: 'Heavy-Base Crystal Rocks',
      ice: 'Single Hand-Carved Ice Sphere',
      garnish: 'None — Pure Mineral Expression',
      occasion: 'Midnight Salon Tasting',
    },
    notes: [
      'Allow Rila Reserve to warm slightly in the glass to release white blossom aromatics.',
      'Pair with lightly salted Balkan caviar blinis or aged sheep’s milk cheese.',
      'Photographed as the signature drink of our debut automotive transit frame.',
    ],
  },
  {
    id: 'salon-dore-vesper',
    title: 'Salon Doré Nocturne',
    category: 'Evening',
    description:
      'Rich, aromatic, and quietly dramatic—created for neoclassical gallery receptions where Bulgarian White Horse sits beside gilded frames and black silk.',
    image: 'salon',
    imageAlt:
      'Campaign muse in black gown beneath gilded salon paintings inspiring the Salon Doré Nocturne cocktail',
    objectPosition: 'center 42%',
    specs: {
      spirit: '55 ml Bulgarian White Horse® Vodka',
      glassware: 'Fluted Crystal Martini',
      ice: 'Hard Shake & Double Strain',
      garnish: 'White Blossom & Grapefruit Twist',
      occasion: 'Private Gallery Reception',
    },
    notes: [
      'Combine 55 ml White Horse Vodka with 15 ml elderflower liqueur and 10 ml Lillet Blanc.',
      'Shake briskly over cracked alpine ice until frost forms on the tin.',
      'Double strain and crown with a slender ribbon of pink grapefruit peel.',
    ],
  },
  {
    id: 'triomphe-alpine-spritz',
    title: 'Alpine Mist Spritz',
    category: 'Spritz',
    description:
      'Crisp citrus, mountain botanical soda, and frosted Bulgarian White Horse—inspired by rain-washed limestone avenues on our Paris preview tour.',
    image: 'triomphe',
    imageAlt:
      'Rain-washed Parisian monument backdrop for the crisp Alpine Mist Spritz serve',
    objectPosition: 'center 48%',
    specs: {
      spirit: '45 ml Bulgarian White Horse® Vodka',
      glassware: 'Tall Stemmed Wine Balloon',
      ice: 'Clear Cube Column',
      garnish: 'Fresh Rosemary & Lime Wheel',
      occasion: 'Afternoon Terrace Aperitif',
    },
    notes: [
      'Build directly over clear ice with 90 ml chilled artisanal bergamot tonic.',
      'Stir once from bottom to top to preserve effervescence.',
      'Finish with gently slapped mountain rosemary to lift the aroma.',
    ],
  },
  {
    id: 'gallery-white-horse-blanc',
    title: 'Vitrine Blanc',
    category: 'Martini',
    description:
      'Minimalist proportion in a glass: crystalline Bulgarian vodka brightened with white verjus and chilled mountain spring water.',
    image: 'louvre',
    imageAlt:
      'Minimalist gallery framing echoing the restrained Vitrine Blanc cocktail',
    objectPosition: 'center 45%',
    specs: {
      spirit: '60 ml White Horse® Seven Lakes Martini',
      glassware: 'Stemless Tasting Flute',
      ice: 'Diluted Cold-Batch Serve',
      garnish: 'Chilled Green Castelvetrano Olive',
      occasion: 'Curated Exhibition Preview',
    },
    notes: [
      'Pre-batch with 10% pure Rila spring water and store in the freezer.',
      'Pour directly into chilled crystal with zero ice dilution in the glass.',
      'Balanced 60-30-10 acidity and silky grain warmth.',
    ],
  },
  {
    id: 'balkan-emerald-fizz',
    title: 'Rila Emerald Fizz',
    category: 'Spritz',
    description:
      'Effervescent green apple, wild mint, and crisp Bulgarian White Horse—capturing the sunlit turquoise glow of Bulgaria’s highest glacial lakes.',
    image: 'rilaLakes',
    imageAlt:
      'Turquoise waters of the Seven Rila Lakes inspiring the Rila Emerald Fizz cocktail',
    objectPosition: 'center center',
    specs: {
      spirit: '45 ml Bulgarian White Horse® Vodka',
      glassware: 'Slender Highball',
      ice: 'Crushed & Clear Spear Blend',
      garnish: 'Crisp Apple Fan & Mint Sprig',
      occasion: 'Golden Hour Terrace',
    },
    notes: [
      'Combine vodka with 25 ml freshly pressed green apple and 15 ml lime juice.',
      'Top with chilled dry sparkling mineral water from Bulgaria’s mountain springs.',
      'Bright, refreshing, and effortlessly low-sweetness.',
    ],
  },
  {
    id: 'midnight-triptych-tonic',
    title: 'White Horse Midnight Tonic',
    category: 'Spritz',
    description:
      'Flash-lit glamour in highball form: luminous silver quinine bubbles lifting the clean almond sweetness of Thracian wheat vodka.',
    image: 'triptych',
    imageAlt:
      'Campaign muse triptych showcasing the luminous White Horse Midnight Tonic',
    objectPosition: 'center 70%',
    specs: {
      spirit: '50 ml Bulgarian White Horse® Vodka',
      glassware: 'Faceted Highball',
      ice: 'Hand-Pressed Ice Spear',
      garnish: 'Charred Lemon & Silver Rim',
      occasion: 'After-Hours Lounge',
    },
    notes: [
      'Pour Bulgarian White Horse over a single crystal ice spear.',
      'Top slowly down a bar spoon with dry Mediterranean tonic.',
      'Designed as the effortless signature serve of our launch campaign.',
    ],
  },
];

export const MAISON_EDITIONS: MaisonEdition[] = [
  {
    id: 'edition-classic-vodka',
    brandLine: 'BULGARIAN WHITE HORSE®',
    name: 'Bulgarian White Horse® Vodka (700 ml)',
    subtitle: 'Seven Rila Lakes Glacial Edition · 40% ABV',
    description:
      'Our flagship frosted bottle wrapped with the panoramic vista of Bulgaria’s Seven Rila Lakes. Five-times distilled from Thracian winter wheat for luminous clarity.',
    image: 'bottleVodka',
    imageAlt: 'Bulgarian White Horse Classic Vodka bottle with Seven Rila Lakes panorama',
    objectPosition: 'center center',
    priceLabel: '€64',
    provenance: 'Distilled in Rila, Bulgaria',
    notes: 'Wheat Base · Quartz-Charcoal Filtered · 700 ml Frosted Bottle',
    isBottle: true,
  },
  {
    id: 'edition-rila-reserve',
    brandLine: 'BULGARIAN WHITE HORSE®',
    name: 'Bulgarian White Horse® Rila Reserve',
    subtitle: 'Faceted Crystal Decanter · 40% ABV',
    description:
      'Small-batch reserve rested in cold stone tanks and housed in a sculptural faceted crystal carafe etched with the peaks and cirque basins of Rila.',
    image: 'bottleReserve',
    imageAlt: 'Bulgarian White Horse Rila Reserve faceted crystal bottle',
    objectPosition: 'center center',
    priceLabel: '€135',
    provenance: 'Small-Batch Glacial Reserve',
    notes: '90-Day Cold Stone Rest · Sculpted Crystal Carafe · Numbered Neck Seal',
    isBottle: true,
  },
  {
    id: 'edition-martini-bottle',
    brandLine: 'BULGARIAN WHITE HORSE®',
    name: 'Bulgarian White Horse® Seven Lakes Martini',
    subtitle: 'Pre-Chilled Botanical Aperitif · 35% ABV',
    description:
      'Ready-to-pour dry martini crafted with Bulgarian White Horse Vodka and crisp mountain vermouth botanicals—framed by a frosted martini window over the Seven Rila Lakes.',
    image: 'bottleMartini',
    imageAlt: 'Bulgarian White Horse Seven Lakes Martini cocktail bottle',
    objectPosition: 'center center',
    priceLabel: '€72',
    provenance: 'Freeze & Pour Edition',
    notes: 'Serve at -12°C · Dry Vermouth & Lemon Oil · 700 ml',
    isBottle: true,
  },
  {
    id: 'edition-campaign-salon',
    brandLine: 'BULGARIAN WHITE HORSE®',
    name: 'Nocturne Campaign — Salon Tasting Set',
    subtitle: 'Private Tasting Flight + Archival Print',
    description:
      'Reserve an inaugural private flight pairing our three Rila Lakes bottles with a signed archival print from our debut campaign muse shoot.',
    image: 'salon',
    imageAlt: 'Debut campaign muse inside gilded neoclassical salon',
    objectPosition: 'center 35%',
    priceLabel: '€240',
    provenance: 'Inaugural Launch Allocation',
    notes: 'Includes 3 Tasting Measures · Signed Campaign Folio · Private Sommelier',
  },
  {
    id: 'edition-rila-source',
    brandLine: 'BULGARIAN WHITE HORSE®',
    name: 'Seven Rila Lakes — Origin Coffret',
    subtitle: 'Collector’s Twin Bottle Presentation',
    description:
      'A linen-bound collector’s box uniting our Classic Vodka and Rila Reserve bottles alongside a photographic study of the Seven Rila Lakes source.',
    image: 'rilaLakes',
    imageAlt: 'Seven Rila Lakes glacial valley in Bulgaria',
    objectPosition: 'center center',
    priceLabel: '€210',
    provenance: 'Rila Mountain Distillery',
    notes: '2 x 700 ml Bottles · Glacial Water Monograph · Hand-Stitched Navy Case',
  },
];

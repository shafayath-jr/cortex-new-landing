export interface DomainEnding {
  ext: string; // e.g. ".com"
  slug: string; // e.g. "com"
  tagline: string;
  description: string;
  price: string;
  priceNote?: string;
  bestFor: string[];
  facts: { label: string; value: string }[];
  examples: string[];
  category: "popular" | "business" | "creative" | "local" | "niche";
  color?: string; // accent override (optional)
}

const ENDINGS: DomainEnding[] = [
  {
    ext: ".com",
    slug: "com",
    tagline: "The world's most trusted domain",
    description:
      ".com is the gold standard of domain extensions. With over 160 million registrations worldwide, it's the first thing people type when they think of a website. A .com builds instant credibility and is the safest choice for any business, brand, or project.",
    price: "from £12/yr",
    priceNote: "Renews at standard rate after first year",
    bestFor: ["Any business", "E-commerce", "Personal brands", "Startups"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Transfer lock", value: "60-day lock on new registrations" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["apple.com", "shopify.com", "airbnb.com"],
    category: "popular",
  },
  {
    ext: ".co.uk",
    slug: "co.uk",
    tagline: "The trusted home of British business",
    description:
      ".co.uk is the UK's most recognised domain extension. It signals local presence and builds trust with British customers. Perfect for businesses targeting UK audiences who want a familiar, credible web address.",
    price: "from £8/yr",
    bestFor: ["UK businesses", "Local services", "British brands", "Retail"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Geographic signal", value: "United Kingdom" },
      { label: "Characters allowed", value: "2–63 alphanumeric + hyphens" },
    ],
    examples: ["bbc.co.uk", "boots.co.uk", "rightmove.co.uk"],
    category: "local",
  },
  {
    ext: ".shop",
    slug: "shop",
    tagline: "Built for commerce, recognised by everyone",
    description:
      ".shop tells visitors exactly what you do before they even click. It's the go-to TLD for online stores and product-based businesses — short, memorable, and search-friendly.",
    price: "from £12/yr",
    bestFor: [
      "Online stores",
      "Product launches",
      "E-commerce brands",
      "Retail",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Best pairing", value: "Shopify, WooCommerce" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["new.shop", "glossier.shop", "nike.shop"],
    category: "business",
  },
  {
    ext: ".studio",
    slug: "studio",
    tagline: "Where creative work lives",
    description:
      ".studio is the domain of makers. Whether you're a design studio, music producer, film crew, or creative agency, .studio frames your work beautifully and stands out from the crowd.",
    price: "from £18/yr",
    bestFor: [
      "Design studios",
      "Music producers",
      "Architecture firms",
      "Artists",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Creative & design" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["rga.studio", "hype.studio", "mono.studio"],
    category: "creative",
  },
  {
    ext: ".io",
    slug: "io",
    tagline: "The domain the tech world chose",
    description:
      ".io has been adopted by startups, SaaS products, and developer tools as the de-facto extension of the tech industry. It's short, punchy, and signals innovation. If you're building something technical, .io fits perfectly.",
    price: "from £35/yr",
    bestFor: ["SaaS products", "Developer tools", "Tech startups", "APIs"],
    facts: [
      { label: "Registration period", value: "1–5 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Tech & software" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["linear.io", "pitch.io", "framer.io"],
    category: "popular",
  },
  {
    ext: ".net",
    slug: "net",
    tagline: "The established alternative to .com",
    description:
      ".net was originally intended for network-based organisations and has remained one of the most recognised extensions globally. It's a solid, professional choice when your .com is taken.",
    price: "from £14/yr",
    bestFor: [
      "Tech companies",
      "Network services",
      "Internet businesses",
      "Developers",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Global recognition", value: "Top 5 TLD worldwide" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["speedtest.net", "behance.net", "slideshare.net"],
    category: "popular",
  },
  {
    ext: ".org",
    slug: "org",
    tagline: "The mark of organisations that matter",
    description:
      ".org carries a sense of purpose. Originally reserved for non-profits, it's now open to anyone — and it still communicates trust, community, and mission above commerce.",
    price: "from £11/yr",
    bestFor: [
      "Non-profits",
      "Charities",
      "Communities",
      "Open-source projects",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Trust signal", value: "Non-profit & community" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["wikipedia.org", "mozilla.org", "archive.org"],
    category: "popular",
  },
  {
    ext: ".app",
    slug: "app",
    tagline: "Purpose-built for products people download",
    description:
      ".app is a Google-backed TLD that requires HTTPS by default — meaning your site is secure out of the box. It's the obvious choice for mobile apps, web apps, and software products.",
    price: "from £14/yr",
    bestFor: ["Mobile apps", "Web apps", "SaaS", "Software products"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "HTTPS required", value: "Yes — HSTS preloaded" },
      { label: "Registry", value: "Google Registry" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["hey.app", "base.app", "read.app"],
    category: "popular",
  },
  {
    ext: ".store",
    slug: "store",
    tagline: "Your online store, in your domain",
    description:
      ".store makes it immediately clear you're selling something. High search visibility, instant clarity, and a natural fit for any product-first brand.",
    price: "from £13/yr",
    bestFor: ["Online retail", "Brand stores", "Product lines", "Merch shops"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "SEO signal", value: "Commercial intent" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["lego.store", "tesla.store", "supreme.store"],
    category: "business",
  },
  {
    ext: ".online",
    slug: "online",
    tagline: "Simple. Modern. Always on.",
    description:
      ".online is a versatile, modern extension that works for almost any type of business. It communicates that you're present, accessible, and digital-first.",
    price: "from £8/yr",
    bestFor: [
      "Online businesses",
      "Freelancers",
      "Consultants",
      "Digital services",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Versatility", value: "Any industry" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["coach.online", "teach.online", "book.online"],
    category: "business",
  },
  {
    ext: ".info",
    slug: "info",
    tagline: "Authority through information",
    description:
      ".info is one of the original generic TLDs, signalling a site built around knowledge, resources, and useful content rather than direct commerce.",
    price: "from £7/yr",
    bestFor: ["Informational sites", "Directories", "Reference guides", "News"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Best use", value: "Content & resources" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["whois.info", "airport.info", "jobs.info"],
    category: "business",
  },
  {
    ext: ".biz",
    slug: "biz",
    tagline: "Serious about business",
    description:
      ".biz was created for commercial entities and is a direct, no-frills alternative to .com for businesses worldwide.",
    price: "from £9/yr",
    bestFor: ["Small businesses", "Tradespeople", "Local services", "Retail"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Registrant restriction", value: "Commercial use only" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["wedding.biz", "catering.biz", "cleaning.biz"],
    category: "business",
  },
  {
    ext: ".design",
    slug: "design",
    tagline: "A domain that shows your work before they see it",
    description:
      ".design is the premium TLD for designers of all kinds — graphic, product, interior, fashion. It's a portfolio statement in URL form.",
    price: "from £22/yr",
    bestFor: [
      "Graphic designers",
      "UX/UI designers",
      "Interior designers",
      "Agencies",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Design & creative" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["ana.design", "studio.design", "pixel.design"],
    category: "creative",
  },
  {
    ext: ".tech",
    slug: "tech",
    tagline: "For builders of the future",
    description:
      ".tech is widely used by technology companies, hackathons, and developer communities. It's punchy, memorable, and signals innovation.",
    price: "from £16/yr",
    bestFor: [
      "Tech startups",
      "Hackathons",
      "Dev communities",
      "Hardware brands",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Technology" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["usa.tech", "hackathon.tech", "my.tech"],
    category: "business",
  },
  {
    ext: ".digital",
    slug: "digital",
    tagline: "For agencies doing digital differently",
    description:
      ".digital works well for marketing agencies, consultancies, and any brand that puts digital at the centre of their service offering.",
    price: "from £18/yr",
    bestFor: [
      "Digital agencies",
      "Marketing firms",
      "Consultancies",
      "Media brands",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Marketing & media" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["bold.digital", "bloom.digital", "spark.digital"],
    category: "business",
  },
  {
    ext: ".co",
    slug: "co",
    tagline: "Short, global, and instantly recognisable",
    description:
      ".co is short, memorable, and works in every language. Originally Colombia's country code, it's been embraced globally as a clean alternative to .com — especially by startups.",
    price: "from £22/yr",
    bestFor: ["Global startups", "Companies", "Short brands", "Tech companies"],
    facts: [
      { label: "Registration period", value: "1–5 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Registry", value: "Go Daddy (registry operator)" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["envato.co", "angel.co", "type.co"],
    category: "popular",
  },
  {
    ext: ".me",
    slug: "me",
    tagline: "Your personal corner of the internet",
    description:
      ".me is uniquely personal. It's the natural fit for personal websites, portfolios, and anyone who wants their domain to reflect their individual identity.",
    price: "from £14/yr",
    bestFor: [
      "Personal websites",
      "Portfolios",
      "Freelancers",
      "Personal brands",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Best pairing", value: "firstname.me" },
      { label: "Characters allowed", value: "2–63 alphanumeric + hyphens" },
    ],
    examples: ["about.me", "john.me", "hire.me"],
    category: "creative",
  },
  {
    ext: ".ai",
    slug: "ai",
    tagline: "The domain of the AI revolution",
    description:
      ".ai is officially Anguilla's country code, but has been fully adopted by the artificial intelligence industry. If your product uses AI, there's no more fitting extension.",
    price: "from £55/yr",
    bestFor: ["AI products", "Machine learning", "Data science", "AI startups"],
    facts: [
      { label: "Registration period", value: "1–2 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Artificial intelligence" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["jasper.ai", "copy.ai", "runway.ai"],
    category: "popular",
  },
  {
    ext: ".dev",
    slug: "dev",
    tagline: "For developers, by developers",
    description:
      ".dev is Google's TLD for the developer community. Like .app, it requires HTTPS by default. It's the home for open-source projects, developer tools, and technical documentation.",
    price: "from £14/yr",
    bestFor: [
      "Developers",
      "Open source projects",
      "Dev tools",
      "Technical blogs",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "HTTPS required", value: "Yes — HSTS preloaded" },
      { label: "Registry", value: "Google Registry" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["web.dev", "css.dev", "node.dev"],
    category: "popular",
  },
  {
    ext: ".agency",
    slug: "agency",
    tagline: "Position your agency in the URL",
    description:
      ".agency is direct and professional. It tells every visitor exactly what kind of business you run, before they even arrive at your homepage.",
    price: "from £16/yr",
    bestFor: [
      "Marketing agencies",
      "PR firms",
      "Creative agencies",
      "Talent agencies",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Agency & consulting" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["good.agency", "wild.agency", "bold.agency"],
    category: "business",
  },
  {
    ext: ".media",
    slug: "media",
    tagline: "For content creators and publishers",
    description:
      ".media is a natural fit for publishers, broadcasters, content studios, and anyone whose product is storytelling or content in any form.",
    price: "from £18/yr",
    bestFor: [
      "Publishers",
      "Podcasters",
      "Video creators",
      "Content studios",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Media & content" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["future.media", "vice.media", "vox.media"],
    category: "creative",
  },
  {
    ext: ".photography",
    slug: "photography",
    tagline: "Frame your work with the perfect domain",
    description:
      ".photography is the domain of image-makers. Long but descriptive, it instantly communicates your craft to every visitor — and sets expectations before the first image loads.",
    price: "from £16/yr",
    bestFor: [
      "Photographers",
      "Photography studios",
      "Stock photo sites",
      "Portfolios",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Photography" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["fine.photography", "urban.photography", "anna.photography"],
    category: "creative",
  },
  {
    ext: ".services",
    slug: "services",
    tagline: "What you do, right in your URL",
    description:
      ".services is ideal for any service-based business. It's professional, self-explanatory, and pairs perfectly with a business name or descriptive adjective.",
    price: "from £18/yr",
    bestFor: ["Service businesses", "Consultants", "Tradespeople", "Agencies"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Service sector" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["it.services", "home.services", "financial.services"],
    category: "business",
  },
  {
    ext: ".solutions",
    slug: "solutions",
    tagline: "Lead with what you deliver",
    description:
      ".solutions is a strong choice for consultancies, IT companies, and B2B businesses that want to immediately communicate value — not just their name.",
    price: "from £18/yr",
    bestFor: [
      "IT companies",
      "Consultancies",
      "B2B businesses",
      "Problem-solvers",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "B2B & consulting" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["it.solutions", "smart.solutions", "green.solutions"],
    category: "business",
  },
  {
    ext: ".consulting",
    slug: "consulting",
    tagline: "Authority begins at the domain level",
    description:
      ".consulting is immediately professional. It sets the tone before a prospect reads a single word of copy — ideal for independent consultants and boutique advisory firms.",
    price: "from £18/yr",
    bestFor: [
      "Management consultants",
      "Advisors",
      "Strategy firms",
      "Independent experts",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Consulting & advisory" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["peak.consulting", "north.consulting", "alex.consulting"],
    category: "business",
  },
  {
    ext: ".events",
    slug: "events",
    tagline: "Built for moments that matter",
    description:
      ".events is a clean, memorable TLD for event planners, venues, conferences, festivals, and community gatherings of any kind.",
    price: "from £18/yr",
    bestFor: [
      "Event planners",
      "Venues",
      "Conferences",
      "Festivals",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Events & hospitality" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["london.events", "startup.events", "bright.events"],
    category: "niche",
  },
  {
    ext: ".club",
    slug: "club",
    tagline: "Your community, your name",
    description:
      ".club is perfect for membership organisations, communities, loyalty programmes, and anything built around a group of like-minded people.",
    price: "from £11/yr",
    bestFor: ["Communities", "Membership sites", "Sports clubs", "Fan groups"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Community & membership" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["poker.club", "dinner.club", "book.club"],
    category: "niche",
  },
  {
    ext: ".space",
    slug: "space",
    tagline: "Open, infinite, yours",
    description:
      ".space is a versatile, creative TLD that works for co-working spaces, creative studios, tech products, and any brand with an expansive vision.",
    price: "from £8/yr",
    bestFor: [
      "Co-working spaces",
      "Creative studios",
      "Tech products",
      "Artists",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Versatility", value: "Any creative industry" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["your.space", "co.space", "open.space"],
    category: "creative",
  },
  {
    ext: ".life",
    slug: "life",
    tagline: "For brands with a lifestyle at their core",
    description:
      ".life works beautifully for wellness brands, lifestyle publications, coaches, and anyone whose business is about helping people live better.",
    price: "from £16/yr",
    bestFor: ["Wellness brands", "Lifestyle blogs", "Coaches", "Health brands"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Wellness & lifestyle" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["good.life", "best.life", "simple.life"],
    category: "niche",
  },
  {
    ext: ".world",
    slug: "world",
    tagline: "Think bigger than a country",
    description:
      ".world is expansive and ambitious. It suits global brands, international communities, and any business that wants to communicate a worldwide reach.",
    price: "from £16/yr",
    bestFor: [
      "Global brands",
      "International communities",
      "Travel companies",
      "NGOs",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Geographic signal", value: "Global" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["hello.world", "craft.world", "music.world"],
    category: "niche",
  },
  {
    ext: ".today",
    slug: "today",
    tagline: "News, updates, and what's happening now",
    description:
      ".today is a timely, topical TLD that works well for news sites, daily briefings, deal-of-the-day businesses, and any brand that's about what's current.",
    price: "from £14/yr",
    bestFor: ["News sites", "Daily deals", "Newsletters", "Updates"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "News & media" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["product.today", "art.today", "deal.today"],
    category: "niche",
  },
  {
    ext: ".health",
    slug: "health",
    tagline: "The authoritative domain for healthcare",
    description:
      ".health is a premium, restricted TLD for legitimate health organisations, medical providers, and wellness brands — adding a layer of credibility that generic TLDs can't match.",
    price: "from £55/yr",
    bestFor: ["Healthcare", "Clinics", "Wellness apps", "Medical brands"],
    facts: [
      { label: "Registration period", value: "1–5 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Verification", value: "May require credential check" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["my.health", "better.health", "open.health"],
    category: "niche",
  },
  {
    ext: ".fitness",
    slug: "fitness",
    tagline: "For gyms, trainers, and the active lifestyle",
    description:
      ".fitness is the natural home for personal trainers, gyms, fitness apps, and health brands that want a domain that matches their energy.",
    price: "from £18/yr",
    bestFor: [
      "Personal trainers",
      "Gyms",
      "Fitness apps",
      "Nutrition brands",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Health & fitness" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["my.fitness", "city.fitness", "future.fitness"],
    category: "niche",
  },
  {
    ext: ".beauty",
    slug: "beauty",
    tagline: "For brands that make people feel beautiful",
    description:
      ".beauty is a stylish, memorable TLD for cosmetics brands, beauty salons, skincare lines, and anyone in the beauty industry.",
    price: "from £18/yr",
    bestFor: [
      "Beauty brands",
      "Cosmetics",
      "Salons",
      "Skincare",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Beauty & cosmetics" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["bare.beauty", "pure.beauty", "nova.beauty"],
    category: "niche",
  },
  {
    ext: ".art",
    slug: "art",
    tagline: "The canvas for your digital presence",
    description:
      ".art is a dedicated space for artists, galleries, and creative institutions. Short, prestigious, and instantly meaningful to a global arts audience.",
    price: "from £12/yr",
    bestFor: ["Artists", "Galleries", "Art platforms", "Creative portfolios"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Fine art & culture" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["pixel.art", "public.art", "house.art"],
    category: "creative",
  },
  {
    ext: ".music",
    slug: "music",
    tagline: "Your sound, your domain",
    description:
      ".music is the home for musicians, labels, streaming services, and music communities. It pairs perfectly with your artist name or band name.",
    price: "from £22/yr",
    bestFor: ["Musicians", "Record labels", "Music platforms", "Bands"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Music & entertainment" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["indie.music", "live.music", "house.music"],
    category: "creative",
  },
  {
    ext: ".food",
    slug: "food",
    tagline: "From farm to fork to URL",
    description:
      ".food is the domain for anyone passionate about what we eat — restaurants, recipe blogs, food brands, meal kit services, and culinary creators.",
    price: "from £18/yr",
    bestFor: [
      "Restaurants",
      "Food brands",
      "Recipe blogs",
      "Meal kit services",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Food & beverage" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["real.food", "good.food", "street.food"],
    category: "niche",
  },
  {
    ext: ".kitchen",
    slug: "kitchen",
    tagline: "Where flavour meets the web",
    description:
      ".kitchen is a warm, evocative TLD for professional chefs, ghost kitchens, cookware brands, and anyone whose business starts at the stove.",
    price: "from £18/yr",
    bestFor: [
      "Ghost kitchens",
      "Chefs",
      "Cookware brands",
      "Cooking schools",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Food & hospitality" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["dark.kitchen", "home.kitchen", "pro.kitchen"],
    category: "niche",
  },
  {
    ext: ".cafe",
    slug: "cafe",
    tagline: "The domain that smells like coffee",
    description:
      ".cafe is a charming, specific TLD for coffee shops, cafés, bakeries, and neighbourhood food and drink spots that want a domain as warm as their welcome.",
    price: "from £18/yr",
    bestFor: ["Coffee shops", "Cafés", "Bakeries", "Brunch spots"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Food & beverage" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["corner.cafe", "roast.cafe", "night.cafe"],
    category: "niche",
  },
  {
    ext: ".bar",
    slug: "bar",
    tagline: "Pull up a stool and get online",
    description:
      ".bar is perfect for bars, cocktail lounges, nightlife venues, and hospitality brands that want a short, memorable, genre-defining URL.",
    price: "from £18/yr",
    bestFor: ["Bars", "Cocktail lounges", "Nightlife venues", "Breweries"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Hospitality & nightlife" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["craft.bar", "dive.bar", "rooftop.bar"],
    category: "niche",
  },
  {
    ext: ".pizza",
    slug: "pizza",
    tagline: "For the people who take pizza seriously",
    description:
      ".pizza is fun, memorable, and impossible to forget. Perfect for pizzerias, food delivery brands, and any business that runs on dough, sauce, and cheese.",
    price: "from £22/yr",
    bestFor: ["Pizzerias", "Food delivery", "Restaurant chains", "Food brands"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Food & hospitality" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["new.pizza", "deep.pizza", "hot.pizza"],
    category: "niche",
  },
  {
    ext: ".salon",
    slug: "salon",
    tagline: "Your chair, your brand, your domain",
    description:
      ".salon is tailor-made for hair salons, beauty parlours, nail studios, and grooming businesses of all kinds.",
    price: "from £18/yr",
    bestFor: ["Hair salons", "Beauty parlours", "Nail studios", "Barbers"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Beauty & grooming" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["colour.salon", "bloom.salon", "glam.salon"],
    category: "niche",
  },
  {
    ext: ".plumbing",
    slug: "plumbing",
    tagline: "The domain that gets found when pipes burst",
    description:
      ".plumbing is highly descriptive and SEO-friendly. When someone searches for a local plumber in an emergency, a .plumbing domain cuts through the noise immediately.",
    price: "from £22/yr",
    bestFor: [
      "Plumbers",
      "Plumbing companies",
      "Trade directories",
      "Home services",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "SEO signal", value: "High local intent" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["city.plumbing", "fast.plumbing", "pro.plumbing"],
    category: "niche",
  },
  {
    ext: ".repairs",
    slug: "repairs",
    tagline: "When things break, they find you first",
    description:
      ".repairs is a keyword-rich TLD that helps repair businesses rank locally and communicate their service instantly — no tagline required.",
    price: "from £22/yr",
    bestFor: [
      "Repair shops",
      "Appliance repair",
      "Phone repair",
      "Home services",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "SEO signal", value: "High local intent" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["phone.repairs", "laptop.repairs", "car.repairs"],
    category: "niche",
  },
  {
    ext: ".cleaning",
    slug: "cleaning",
    tagline: "A clean domain for a spotless business",
    description:
      ".cleaning is an excellent domain for cleaning services, professional cleaners, and hygiene brands that want to be found quickly and look credible online.",
    price: "from £22/yr",
    bestFor: [
      "Cleaning services",
      "Commercial cleaners",
      "Dry cleaners",
      "Hygiene brands",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "SEO signal", value: "High local intent" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["pro.cleaning", "eco.cleaning", "deep.cleaning"],
    category: "niche",
  },
  {
    ext: ".legal",
    slug: "legal",
    tagline: "Authority and expertise in your URL",
    description:
      ".legal is a premium TLD for law firms, legal tech companies, compliance consultancies, and any professional in the legal sector who wants to stand out.",
    price: "from £22/yr",
    bestFor: ["Law firms", "Legal tech", "Compliance", "Legal directories"],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Legal & compliance" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["open.legal", "ai.legal", "family.legal"],
    category: "niche",
  },
  {
    ext: ".accountant",
    slug: "accountant",
    tagline: "Numbers you can trust, starting with the URL",
    description:
      ".accountant is a credibility-signalling TLD for accountants, bookkeepers, and financial service providers who want to be found and trusted instantly.",
    price: "from £22/yr",
    bestFor: [
      "Accountants",
      "Bookkeepers",
      "Financial advisors",
      "Tax professionals",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Finance & accounting" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["your.accountant", "cloud.accountant", "pro.accountant"],
    category: "niche",
  },
  {
    ext: ".estate",
    slug: "estate",
    tagline: "For property professionals with presence",
    description:
      ".estate is the domain of choice for estate agents, property developers, real estate platforms, and luxury property brands.",
    price: "from £22/yr",
    bestFor: [
      "Estate agents",
      "Property developers",
      "Real estate platforms",
      "Luxury property",
    ],
    facts: [
      { label: "Registration period", value: "1–10 years" },
      { label: "WHOIS privacy", value: "Included free" },
      { label: "Industry fit", value: "Property & real estate" },
      { label: "Characters allowed", value: "3–63 alphanumeric + hyphens" },
    ],
    examples: ["prime.estate", "grand.estate", "city.estate"],
    category: "niche",
  },
];

export const DOMAIN_ENDINGS_MAP: Record<string, DomainEnding> = Object.fromEntries(
  ENDINGS.map((e) => [e.slug, e])
);

export function getDomainEnding(slug: string): DomainEnding | null {
  return DOMAIN_ENDINGS_MAP[slug] ?? null;
}

export function getAllEndingSlugs(): string[] {
  return ENDINGS.map((e) => e.slug);
}

export { ENDINGS as ALL_DOMAIN_ENDINGS };

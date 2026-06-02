export interface Service {
  name: string;
  price: number;
  duration: number; // minutes
  description?: string;
}

export interface ServiceCategory {
  category: string;
  icon: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    category: "Fransförlängning",
    icon: "✨",
    services: [
      { name: "Mega Volymfransar – Nytt set", price: 900, duration: 115 },
      { name: "Volymfransar – Nytt set", price: 800, duration: 100, description: "10% Studentrabatt" },
      { name: "Mixfransar – Nytt set", price: 800, duration: 100 },
      { name: "Wispy Lashes – Nytt set", price: 850, duration: 105 },
      { name: "Singelfransar – Nytt set", price: 700, duration: 90 },
      { name: "Borttagning + Mega Volymfransar", price: 1000, duration: 145 },
      { name: "Borttagning + Volymfransar", price: 900, duration: 130 },
      { name: "Borttagning + Mixfransar", price: 900, duration: 130 },
      { name: "Borttagning + Singelfransar", price: 800, duration: 120 },
      { name: "Borttagning + Wispy Lashes", price: 950, duration: 145 },
      { name: "Borttagning av fransar", price: 200, duration: 30 },
    ],
  },
  {
    category: "Påfyllning",
    icon: "🪶",
    services: [
      { name: "Mega Volymfransar – Stor påfyllning", price: 650, duration: 70 },
      { name: "Mega Volymfransar – Liten påfyllning", price: 700, duration: 60 },
      { name: "Mega Volymfransar – Quickfix", price: 450, duration: 30 },
      { name: "Volymfransar – Stor påfyllning", price: 550, duration: 60 },
      { name: "Volymfransar – Liten påfyllning", price: 600, duration: 50 },
      { name: "Volymfransar – Quickfix", price: 400, duration: 30 },
      { name: "Mixfransar – Stor påfyllning", price: 550, duration: 60 },
      { name: "Mixfransar – Liten påfyllning", price: 600, duration: 50 },
      { name: "Mixfransar – Quickfix", price: 400, duration: 30 },
      { name: "Wispy Lashes – Stor påfyllning", price: 600, duration: 60 },
      { name: "Wispy Lashes – Liten påfyllning", price: 650, duration: 50 },
      { name: "Singelfransar – Stor påfyllning", price: 500, duration: 60 },
      { name: "Singelfransar – Liten påfyllning", price: 550, duration: 50 },
    ],
  },
  {
    category: "Lashlift & Browlift",
    icon: "👁️",
    services: [
      { name: "Kombo Behandling Lash & Browlift", price: 900, duration: 60 },
      { name: "Browlift inkl. Keratin & Trådning", price: 700, duration: 45 },
      { name: "Browlift inkl. Trådning & Färg", price: 750, duration: 45 },
      { name: "Lashlift inkl. Keratin & Fransfärg", price: 700, duration: 45 },
      { name: "Lashlift inkl. Keratin", price: 600, duration: 40 },
    ],
  },
  {
    category: "Trådning & Färgning",
    icon: "🧵",
    services: [
      { name: "Trådning av bryn inkl. Färgning bryn/fransar", price: 500, duration: 30 },
      { name: "Trådning av bryn och Färgning", price: 350, duration: 30 },
      { name: "Trådning av hela ansiktet", price: 450, duration: 30 },
      { name: "Trådning av bryn", price: 400, duration: 30 },
      { name: "Färgning av fransar", price: 200, duration: 15 },
      { name: "Kombo behandling", price: 250, duration: 20 },
      { name: "Kombo behandling bryn & fransar", price: 300, duration: 25 },
      { name: "Trådning överläpp", price: 100, duration: 10 },
    ],
  },
  {
    category: "Massage",
    icon: "💆",
    services: [
      { name: "Skalp + Ansiktsmassage", price: 600, duration: 50 },
    ],
  },
];

export const reviews = [
  {
    author: "Sophie L.",
    rating: 5,
    text: "Lugn miljö, trevligt bemötande. Får råd om typ av fransar som passar bäst och skötselråd. Varit där 3 gånger o fransarna har suttit bra! Mycket prisvärt. Kan verkligen rekommendera!",
    date: "2026-05-19",
  },
  {
    author: "Evelina B.",
    rating: 5,
    text: "Supernöjd",
    date: "2026-05-03",
  },
  {
    author: "Jennie W.",
    rating: 4,
    text: "Duktig och trevligt bemötande, kommer boka hos henne igen.",
    date: "2026-04-23",
  },
  {
    author: "Artela S.",
    rating: 5,
    text: "Så nöjd med mina fransar!! Diana är så duktig och så trevlig 😍",
    date: "2026-04-08",
  },
];

export const salonInfo = {
  name: "DianaBeauty",
  address: "Ekholmsvägen 98, 589 25 Linköping",
  phone: "070 047 52 04",
  email: "Dianabeauty.db@gmail.com",
  instagram: "https://www.instagram.com/dianabeauty.db/",
  instagramHandle: "@dianabeauty.db",
  bokaDirekt: "https://www.bokadirekt.se/places/dianabeauty-52970",
  rating: 4.8,
  reviewCount: 305,
  description:
    "Välkommen till min lilla hemma salong! Certifierad fransstylist sedan 2018 med passion för skönhet och detaljer. Jag strävar alltid efter att ge dig en personlig upplevelse där kvalitet, noggrannhet och ditt resultat står i fokus!",
  guidelines: [
    "Sällskap är inte tillåtet.",
    "Jag tar emot endast tjejer.",
    "Kom gärna exakt på din bokade tid.",
    "Skriv till mig på Instagram eller SMS när du är utanför, så kommer jag och öppnar dörren.",
    "Kom gärna osminkad och utan linser för bästa resultat.",
    "Kom inte sjuk – då behöver vi boka om din tid.",
  ],
  cancellation: [
    "Avbokning sker senast 24h innan via länken i ditt bekräftelsemail.",
    "Vid sen avbokning eller uteblivet besök debiteras fullt pris.",
    "Vid försening över 15 minuter kan tiden behöva avbokas och debiteras.",
  ],
  parking: "Parkering finns mittemot byggnaden. Busshållplatsen Räcknestickan ligger ca 2 minuter bort.",
};

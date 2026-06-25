import {
  ArrowRight,
  CalendarCheck,
  Car,
  Check,
  ChefHat,
  Clock,
  Facebook,
  Flame,
  Instagram,
  Leaf,
  MapPin,
  Menu,
  Phone,
  Quote,
  Send,
  Sparkles,
  Star,
  Truck,
  Utensils,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

const phoneHref = "tel:+15062042249";
const directionsHref =
  "https://www.google.com/maps/dir/?api=1&destination=75+Champlain+St,+Dieppe,+NB+E1A+1N5";

const navItems = ["Menu", "Reviews", "Catering", "Location"];

const stats = [
  { label: "4.4 Rating", icon: Star },
  { label: "368+ Reviews", icon: Quote },
  { label: "Fresh Ingredients", icon: Leaf },
  { label: "Catering Available", icon: CalendarCheck },
];

const featuredMenu = [
  {
    name: "Butter Paneer Combo",
    tag: "Best Seller",
    description: "Served with butter naan, rice, and raita",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dal Makhni Combo",
    tag: "Slow Cooked",
    description: "Slow-cooked black lentils with butter naan, rice, and raita",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Pav Bhaji",
    tag: "Street Favourite",
    description: "Indian street food favourite, buttery and bright with spice",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Malai Soya Chaap",
    tag: "Customer Favourite",
    description: "Creamy, smoky, and flavorful vegetarian comfort food",
    image:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hakka Combo with Noodles",
    tag: "Most Ordered",
    description: "Veg Chow Mein with Manchurian in Indo-Chinese style",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Chole Bhatura",
    tag: "Punjabi Classic",
    description: "Fluffy bhatura with spiced chickpea curry",
    image:
      "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Paneer Tikka",
    tag: "Tandoori Specialty",
    description: "Charred paneer, peppers, onions, and aromatic spices",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Amritsari Kulcha",
    tag: "Punjabi Bread",
    description: "Authentic stuffed Punjabi bread served hot",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
  },
];

const categories: Array<[string, LucideIcon]> = [
  ["Best Sellers", Flame],
  ["Tandoori Bites", ChefHat],
  ["Veg Main Course", Leaf],
  ["Indian Breads", Utensils],
  ["Hakka Items", Sparkles],
  ["Street Bites", Car],
  ["Lunch Specials", Clock],
  ["Desserts", Star],
  ["Beverages", Send],
];

const loveCards: Array<[string, string, LucideIcon]> = [
  ["Authentic Indian Flavors", "Traditional recipes and spices.", ChefHat],
  ["Fresh Ingredients", "Prepared fresh daily.", Leaf],
  ["Generous Portions", "Excellent value for money.", Utensils],
  ["Vegetarian Friendly", "Extensive vegetarian menu.", Leaf],
  ["Catering Services", "Perfect for events and celebrations.", CalendarCheck],
  ["Fast Service", "Friendly and attentive staff.", Truck],
];

const reviews = [
  {
    quote:
      "Excellent Catering Experience. The chicken sabzi, dal, noodles, soya chaap, and garlic naan were all delicious. Great quality, freshness, and generous portions. Highly recommended.",
    name: "Narinder Kaur",
  },
  {
    quote:
      "The food was absolutely delicious, full of rich flavor, fresh, and perfectly cooked. Every dish tasted authentic and satisfying.",
    name: "Ayush Dabur",
  },
  {
    quote:
      "The best place for authentic Indian cuisine. The butter paneer was rich and creamy, the pav bhaji perfectly spiced, and everything tasted incredibly fresh.",
    name: "Arash Kahlon",
  },
];

const gallery = [
  ["Butter Paneer", featuredMenu[0].image],
  ["Dal Makhani", featuredMenu[1].image],
  ["Pav Bhaji", featuredMenu[2].image],
  ["Chole Bhatura", featuredMenu[5].image],
  ["Paneer Tikka", featuredMenu[6].image],
  [
    "Mango Lassi",
    "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Restaurant Interior",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
  ],
  [
    "Catering Setup",
    "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
  ],
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e5bf73]/40 bg-[#fff4da] px-3 py-1 text-[12px] font-semibold uppercase tracking-normal text-[#8f3f0f]">
      <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2
        className={`text-3xl font-semibold md:text-5xl ${
          tone === "dark" ? "text-white" : "text-[#24130d]"
        }`}
      >
        {title}
      </h2>
      {children && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-7 md:text-lg ${
            tone === "dark" ? "text-[#f8e4c4]" : "text-[#6e584d]"
          }`}
        >
          {children}
        </p>
      )}
    </div>
  );
}

function RatingStars() {
  return (
    <div className="flex items-center gap-0.5 text-[#f6b73c]" aria-label="4.4 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-current"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="spice-shop min-h-screen bg-[#fff9ee] text-[#24130d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#1f110d]/90 text-white backdrop-blur-xl">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Primary navigation"
        >
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f3a51c] text-[#1f110d]">
              <Flame className="h-5 w-5 fill-current" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold leading-5">
                Spice Shop
              </span>
              <span className="block text-[11px] uppercase tracking-normal text-[#f4d7a6]">
                Dieppe, NB
              </span>
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[#fff4df]/80 transition hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <a
              href={phoneHref}
              className="hidden rounded-full border border-[#f3a51c]/40 px-4 py-2 text-sm font-semibold text-[#f9d997] transition hover:bg-[#f3a51c] hover:text-[#1f110d] sm:inline-flex"
            >
              Call Now
            </a>
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-[#f3a51c] px-4 py-2 text-sm font-semibold text-[#1f110d] shadow-lg shadow-black/20 transition hover:bg-[#ffc45b]"
            >
              <Menu className="h-4 w-4 md:hidden" aria-hidden="true" />
              <span className="hidden sm:inline">Order Online</span>
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[#1f110d] pt-24 text-white">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1800&q=85"
              alt="Premium Indian curry served in a brass bowl"
              className="h-full w-full object-cover opacity-35"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,17,13,0.96),rgba(31,17,13,0.72),rgba(31,17,13,0.38))]" />
          </div>
          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f3a51c]/40 bg-white/10 px-3 py-1 text-sm font-semibold text-[#f9d997] backdrop-blur">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                75 Champlain St, Dieppe
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-[#fff8eb] sm:text-6xl lg:text-7xl">
                Authentic Indian Flavours in the Heart of Dieppe
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#f8e4c4] sm:text-xl">
                Experience rich Punjabi curries, fresh tandoori specialties,
                Indian street food favourites, and Indo-Chinese classics made
                fresh every day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f3a51c] px-6 py-3 font-semibold text-[#1f110d] shadow-xl shadow-black/25 transition hover:bg-[#ffc45b]"
                >
                  Order Online
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#menu"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  View Menu
                </a>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >
                    <Icon className="mb-3 h-5 w-5 text-[#f3a51c]" aria-hidden="true" />
                    <p className="text-sm font-semibold text-white">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur">
                <img
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=85"
                  alt="Fresh Indian dishes with naan and curry"
                  className="aspect-[4/5] w-full rounded-[24px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-3xl bg-[#fff8eb] p-5 text-[#24130d] shadow-2xl">
                <div className="flex items-center gap-3">
                  <RatingStars />
                  <span className="font-semibold">4.4</span>
                </div>
                <p className="mt-1 text-sm text-[#6e584d]">368+ Google Reviews</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="grid grid-cols-2 gap-3">
              {gallery.slice(0, 4).map(([label, image], index) => (
                <img
                  key={label}
                  src={image}
                  alt={label}
                  loading="lazy"
                  className={`h-48 w-full rounded-3xl object-cover shadow-lg ${
                    index === 1 || index === 2 ? "mt-8" : ""
                  }`}
                />
              ))}
            </div>
            <div>
              <SectionLabel>About Spice Shop</SectionLabel>
              <h2 className="max-w-2xl text-4xl font-semibold text-[#24130d] md:text-5xl">
                Authentic Taste, Made Fresh Daily
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6e584d]">
                Spice Shop brings authentic Indian flavors to Dieppe with
                traditional recipes, fresh ingredients, generous portions, and
                exceptional customer service. From creamy butter paneer and rich
                dal makhani to street-food favourites and Indo-Chinese
                specialties, every dish is prepared with care and passion.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Dine In",
                  "Takeout",
                  "Delivery",
                  "Catering",
                  "Family Meals",
                  "Vegetarian Options",
                  "Indian Street Food",
                  "Indo-Chinese Cuisine",
                ].map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-[#f0dfc4]"
                  >
                    <Check className="h-5 w-5 text-[#c45a17]" aria-hidden="true" />
                    <span className="font-semibold text-[#352018]">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Featured Menu" title="Signature Dishes">
              Punjabi classics, street food favourites, and Indo-Chinese
              comfort dishes prepared fresh daily.
            </SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featuredMenu.map((item, index) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="group overflow-hidden rounded-3xl bg-[#fff9ee] shadow-sm ring-1 ring-[#f0dfc4] transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-[#1f110d]/85 px-3 py-1 text-xs font-semibold text-[#f9d997] backdrop-blur">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-[#24130d]">
                      {item.name}
                    </h3>
                    <p className="mt-2 min-h-12 text-sm leading-6 text-[#6e584d]">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Browse The Menu" title="Menu Categories" />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-9">
              {categories.map(([label, Icon]) => (
                <a
                  key={label}
                  href="#menu"
                  className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-3xl bg-[#24130d] p-4 text-center text-white shadow-sm transition hover:-translate-y-1 hover:bg-[#7a3215]"
                >
                  <Icon
                    className="h-6 w-6 text-[#f3a51c] transition group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-semibold">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#24130d] px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Why Customers Love Us"
              title="Made For Regulars"
              tone="dark"
            >
              A warm local restaurant experience with bold flavour, consistent
              service, and dishes built for sharing.
            </SectionHeading>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {loveCards.map(([title, text, Icon]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#f3a51c] text-[#24130d]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-[#f8e4c4]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Customer Reviews" title="Trusted By Dieppe Diners">
              <span className="inline-flex items-center justify-center gap-3">
                <RatingStars /> 4.4 Stars · 368+ Google Reviews
              </span>
            </SectionHeading>
            <div className="grid gap-5 lg:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="rounded-3xl bg-[#fff9ee] p-6 shadow-sm ring-1 ring-[#f0dfc4]"
                >
                  <Quote className="h-8 w-8 text-[#c45a17]" aria-hidden="true" />
                  <p className="mt-5 text-lg leading-8 text-[#352018]">
                    “{review.quote}”
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-[#ead6b9] pt-5">
                    <p className="font-semibold text-[#24130d]">
                      — {review.name}
                    </p>
                    <RatingStars />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="catering"
          className="relative overflow-hidden bg-[#fff3d6] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel>Catering Services</SectionLabel>
              <h2 className="text-4xl font-semibold text-[#24130d] md:text-5xl">
                Make Your Event Memorable
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6e584d]">
                Whether it's a birthday, wedding, corporate gathering, family
                event, or community celebration, Spice Shop offers catering
                packages with authentic Indian cuisine prepared fresh for your
                guests.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Custom Catering Menus",
                  "Large Group Orders",
                  "Vegetarian Options",
                  "Professional Service",
                  "Freshly Prepared Food",
                ].map((feature) => (
                  <p
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 font-semibold text-[#352018]"
                  >
                    <Check className="h-5 w-5 text-[#c45a17]" aria-hidden="true" />
                    {feature}
                  </p>
                ))}
              </div>
              <a
                href="#catering-form"
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#24130d] px-6 py-3 font-semibold text-white transition hover:bg-[#7a3215]"
              >
                Request Catering Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            <form
              id="catering-form"
              className="rounded-[32px] bg-white p-5 shadow-xl ring-1 ring-[#ead6b9] sm:p-8"
            >
              <h3 className="text-2xl font-semibold text-[#24130d]">
                Catering Inquiry
              </h3>
              <div className="mt-6 grid gap-4">
                <label className="grid gap-2 text-sm font-semibold text-[#352018]">
                  Name
                  <input
                    className="min-h-12 rounded-2xl border border-[#ead6b9] px-4 outline-none transition focus:border-[#c45a17]"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[#352018]">
                  Phone
                  <input
                    className="min-h-12 rounded-2xl border border-[#ead6b9] px-4 outline-none transition focus:border-[#c45a17]"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="(506) 000-0000"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[#352018]">
                  Event Details
                  <textarea
                    className="min-h-32 rounded-2xl border border-[#ead6b9] px-4 py-3 outline-none transition focus:border-[#c45a17]"
                    name="message"
                    placeholder="Date, guest count, menu preferences"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#c45a17] px-6 py-3 font-semibold text-white transition hover:bg-[#9b3f10]"
                >
                  Send Request
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Gallery" title="A Taste Of Spice Shop" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map(([label, image]) => (
                <figure
                  key={label}
                  className="group relative overflow-hidden rounded-3xl bg-[#24130d]"
                >
                  <img
                    src={image}
                    alt={label}
                    loading="lazy"
                    className="aspect-square w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 font-semibold text-white">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="location"
          className="bg-[#fff9ee] px-4 py-20 sm:px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-[32px] bg-[#24130d] p-6 text-white sm:p-8">
              <SectionLabel>Visit Us</SectionLabel>
              <h2 className="text-4xl font-semibold text-white">Location</h2>
              <div className="mt-8 space-y-5 text-[#f8e4c4]">
                <p className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#f3a51c]" />
                  <span>75 Champlain St, Dieppe, NB E1A 1N5</span>
                </p>
                <p className="flex gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-[#f3a51c]" />
                  <a href={phoneHref} className="hover:text-white">
                    (506) 204-2249
                  </a>
                </p>
                <p className="flex gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-[#f3a51c]" />
                  <span>Open Daily · 11:00 AM – 10:00 PM</span>
                </p>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={phoneHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f3a51c] px-5 py-3 font-semibold text-[#24130d]"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Now
                </a>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>
            <div className="min-h-[420px] overflow-hidden rounded-[32px] bg-[#ead6b9] shadow-lg ring-1 ring-[#ead6b9]">
              <iframe
                title="Google Map for Spice Shop in Dieppe"
                src="https://www.google.com/maps?q=75%20Champlain%20St%2C%20Dieppe%2C%20NB%20E1A%201N5&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[420px] w-full border-0"
              />
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="text-4xl font-semibold text-[#24130d]">
                Questions or large orders?
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#6e584d]">
                Send a quick message or call the restaurant directly for
                takeout, delivery, family meals, and catering.
              </p>
            </div>
            <form className="grid gap-4 rounded-[32px] bg-[#fff9ee] p-5 ring-1 ring-[#ead6b9] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-[#352018]">
                  Name
                  <input
                    type="text"
                    name="contact-name"
                    autoComplete="name"
                    className="min-h-12 rounded-2xl border border-[#ead6b9] px-4 outline-none focus:border-[#c45a17]"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-[#352018]">
                  Phone
                  <input
                    type="tel"
                    name="contact-phone"
                    autoComplete="tel"
                    className="min-h-12 rounded-2xl border border-[#ead6b9] px-4 outline-none focus:border-[#c45a17]"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-[#352018]">
                Message
                <textarea
                  name="contact-message"
                  className="min-h-32 rounded-2xl border border-[#ead6b9] px-4 py-3 outline-none focus:border-[#c45a17]"
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#24130d] px-6 py-3 font-semibold text-white transition hover:bg-[#7a3215]"
              >
                Send Message
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#1f110d] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f3a51c] text-[#1f110d]">
                <Flame className="h-5 w-5 fill-current" aria-hidden="true" />
              </span>
              <span className="text-xl font-semibold">Spice Shop</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#f8e4c4]">
              Authentic Indian restaurant in Dieppe, New Brunswick serving
              Punjabi favourites, street food, Indo-Chinese dishes, and catering.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Visit</h3>
            <p className="mt-4 text-sm leading-6 text-[#f8e4c4]">
              75 Champlain St
              <br />
              Dieppe, NB E1A 1N5
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Hours</h3>
            <p className="mt-4 text-sm leading-6 text-[#f8e4c4]">
              Open Daily
              <br />
              11:00 AM – 10:00 PM
              <br />
              <a href={phoneHref} className="hover:text-white">
                (506) 204-2249
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">Quick Links</h3>
            <div className="mt-4 grid gap-2 text-sm text-[#f8e4c4]">
              {["Menu", "Reviews", "Catering", "Location"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href="#top"
                aria-label="Spice Shop on Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[#f3a51c] hover:bg-white/20"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#top"
                aria-label="Spice Shop on Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-[#f3a51c] hover:bg-white/20"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#f8e4c4] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Spice Shop. All rights reserved.</p>
          <p>Indian restaurant Dieppe · Catering Dieppe · Vegetarian Indian food</p>
        </div>
      </footer>
    </div>
  );
}

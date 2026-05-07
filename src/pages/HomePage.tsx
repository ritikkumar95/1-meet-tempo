import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/design-system/layout/Container";
import { SearchBar } from "@/design-system/components/SearchBar";
import { ListingCard } from "@/design-system/components/ListingCard";
import { Button } from "@/design-system/primitives/Button";
import { LISTINGS } from "@/data/listings";

const featured = LISTINGS.slice(0, 4);

const stagger = {
  container: { transition: { staggerChildren: 0.08 } },
  item: { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function HomePage() {
  const navigate = useNavigate();

  function handleSearch({ destination }: { destination: string }) {
    navigate(`/search${destination ? `?q=${encodeURIComponent(destination)}` : ""}`);
  }

  return (
    <div className="min-h-screen">
      {/* ─── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
            alt="Alpine landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper/90 via-paper/60 to-paper/10" />
        </div>

        <Container className="relative z-10 pt-24 pb-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            {/* Display headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-light italic text-display-xl text-ink leading-[0.92] tracking-tight mb-8"
            >
              Where to
              <br />
              <em className="not-italic text-terracotta">next?</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-ink/70 mb-10 max-w-md leading-relaxed"
            >
              Exceptional places, thoughtfully chosen. Stone cottages in Cinque Terre.
              Treehouses over old-growth forest. Riads with rooftop plunge pools.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <SearchBar onSearch={handleSearch} className="max-w-xl" />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ─── Divider ──────────────────────────────────────────────────── */}
      <div className="h-px bg-stone-light mx-8 my-2" />

      {/* ─── Featured listings ─────────────────────────────────────────── */}
      <section className="py-16">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display font-light text-display-md text-ink"
              >
                Places worth the trip
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="text-stone mt-2"
              >
                Guest favourites, rare finds, and once-in-a-decade views.
              </motion.p>
            </div>
            <Button
              variant="ghost"
              onClick={() => navigate("/search")}
              className="hidden sm:flex items-center gap-1"
            >
              All places <ArrowRight size={16} />
            </Button>
          </div>

          <motion.div
            variants={stagger.container}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featured.map((listing) => (
              <motion.div key={listing.id} variants={stagger.item}>
                <ListingCard listing={listing} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ─── Category strip ────────────────────────────────────────────── */}
      <section className="py-12 bg-paper-dark/40">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Coastal escapes", emoji: "🏖️", q: "coastal" },
              { label: "Forest hideaways", emoji: "🌲", q: "forest" },
              { label: "City stays", emoji: "🏙️", q: "city" },
              { label: "Mountain lodges", emoji: "⛰️", q: "mountain" },
            ].map(({ label, emoji, q }) => (
              <button
                key={q}
                onClick={() => navigate(`/search?q=${q}`)}
                className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-paper hover:bg-paper border border-stone-light hover:border-stone hover:shadow-card transition-all duration-200"
              >
                <span className="text-3xl">{emoji}</span>
                <span className="text-sm font-medium text-ink">{label}</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-24">
        <Container size="md">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-display font-light italic text-display-lg text-ink mb-4"
            >
              Your next trip is <br />
              <em className="not-italic text-terracotta">already waiting</em>
            </motion.h2>
            <p className="text-stone mb-8">Browse 8 handpicked properties across 7 countries.</p>
            <Button onClick={() => navigate("/search")} size="lg">
              Start exploring <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

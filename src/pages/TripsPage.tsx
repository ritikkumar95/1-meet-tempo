import { motion } from "framer-motion";
import { Container } from "@/design-system/layout/Container";
import { BookingCard } from "@/design-system/components/BookingCard";
import { TRIPS } from "@/data/trips";

const upcoming = TRIPS.filter((t) => t.status !== "completed" && t.status !== "cancelled");
const past = TRIPS.filter((t) => t.status === "completed" || t.status === "cancelled");

export function TripsPage() {
  return (
    <div className="min-h-screen pb-16">
      <Container className="pt-8 max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-display font-light text-display-md text-ink mb-8"
        >
          Your trips
        </motion.h1>

        {upcoming.length > 0 && (
          <section className="mb-10">
            <h2 className="text-xs font-semibold tracking-widest text-stone uppercase mb-4">
              Upcoming
            </h2>
            <div className="space-y-3 stagger-children">
              {upcoming.map((trip) => (
                <BookingCard key={trip.id} trip={trip} />
              ))}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <h2 className="text-xs font-semibold tracking-widest text-stone uppercase mb-4">
              Past trips
            </h2>
            <div className="space-y-3 stagger-children">
              {past.map((trip) => (
                <BookingCard key={trip.id} trip={trip} />
              ))}
            </div>
          </section>
        )}

        {upcoming.length === 0 && past.length === 0 && (
          <div className="text-center py-24">
            <p className="font-display text-2xl text-ink mb-2">No trips yet</p>
            <p className="text-stone">Your upcoming and past trips will appear here.</p>
          </div>
        )}
      </Container>
    </div>
  );
}

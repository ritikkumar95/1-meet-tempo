import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/design-system/layout/Container";
import { Button } from "@/design-system/primitives/Button";
import { ListingCard } from "@/design-system/components/ListingCard";
import { LISTINGS } from "@/data/listings";

interface Wishlist {
  id: string;
  name: string;
  listingIds: string[];
  createdAt: string;
}

const DEFAULT_WISHLISTS: Wishlist[] = [
  { id: "wl-001", name: "Italy trip", listingIds: ["lst-001", "lst-004"], createdAt: "2026-02-10" },
  { id: "wl-002", name: "Nature escapes", listingIds: ["lst-003", "lst-007", "lst-008"], createdAt: "2026-03-01" },
];

export function WishlistsPage() {
  const [wishlists, setWishlists] = useState<Wishlist[]>(DEFAULT_WISHLISTS);
  const [activeWishlist, setActiveWishlist] = useState<string | null>(null);
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");

  const active = wishlists.find((w) => w.id === activeWishlist);

  function createWishlist() {
    if (!newName.trim()) return;
    const id = `wl-${Date.now()}`;
    setWishlists((prev) => [...prev, { id, name: newName.trim(), listingIds: [], createdAt: new Date().toISOString() }]);
    setNewName("");
    setShowCreate(false);
  }

  if (active) {
    const savedListings = LISTINGS.filter((l) => active.listingIds.includes(l.id));
    return (
      <div className="min-h-screen pb-16">
        <Container className="pt-8 max-w-5xl">
          <div className="flex items-center gap-3 mb-8">
            <button onClick={() => setActiveWishlist(null)} className="text-stone hover:text-ink text-sm flex items-center gap-1">
              ← All wishlists
            </button>
          </div>
          <h1 className="font-display font-light text-display-md text-ink mb-2">{active.name}</h1>
          <p className="text-stone mb-8">{savedListings.length} {savedListings.length === 1 ? "place" : "places"}</p>
          {savedListings.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-stone-light rounded-2xl">
              <Heart size={32} className="text-stone mx-auto mb-3" />
              <p className="text-stone">No listings saved to this wishlist yet.</p>
              <Link to="/search">
                <Button variant="secondary" className="mt-4">Browse places</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
              {savedListings.map((listing) => (
                <motion.div key={listing.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
                  <ListingCard listing={listing} saved onSaveToggle={(_id) => {
                    setWishlists((prev) => prev.map((w) =>
                      w.id === active.id
                        ? { ...w, listingIds: w.listingIds.filter((i) => i !== _id) }
                        : w
                    ));
                  }} />
                </motion.div>
              ))}
            </div>
          )}
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      <Container className="pt-8 max-w-5xl">
        <div className="flex items-end justify-between mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-light text-display-md text-ink"
          >
            Wishlists
          </motion.h1>
          <Button variant="outline" size="sm" className="gap-2" onClick={() => setShowCreate(true)}>
            <Plus size={14} /> New list
          </Button>
        </div>

        {wishlists.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-stone-light rounded-2xl">
            <Heart size={40} className="text-stone mx-auto mb-4" />
            <p className="font-display text-2xl text-ink mb-2">Nothing saved yet</p>
            <p className="text-stone mb-6">Tap the heart on any listing to save it here.</p>
            <Link to="/search">
              <Button>Start exploring</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {wishlists.map((wl) => {
              const listings = LISTINGS.filter((l) => wl.listingIds.includes(l.id));
              return (
                <motion.button
                  key={wl.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => setActiveWishlist(wl.id)}
                  className="text-left group"
                >
                  {/* 4-photo collage cover */}
                  <div className="aspect-square rounded-2xl overflow-hidden bg-stone-light mb-3 grid grid-cols-2 grid-rows-2 gap-0.5">
                    {[...Array(4)].map((_, i) => {
                      const img = listings[i]?.images[0];
                      return img ? (
                        <img key={i} src={img} alt="" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                      ) : (
                        <div key={i} className="bg-stone-light/80" />
                      );
                    })}
                  </div>
                  <p className="font-medium text-ink">{wl.name}</p>
                  <p className="text-sm text-stone">{listings.length} {listings.length === 1 ? "place" : "places"}</p>
                </motion.button>
              );
            })}
          </div>
        )}
      </Container>

      {/* Create modal */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/30 backdrop-blur-sm" onClick={() => setShowCreate(false)}>
          <div className="bg-paper rounded-3xl shadow-modal w-full max-w-sm p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-display text-xl text-ink mb-4">New wishlist</h3>
            <input
              autoFocus
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") createWishlist(); }}
              placeholder="Name your wishlist…"
              className="w-full h-11 bg-paper-dark rounded-xl px-4 text-sm text-ink placeholder:text-stone focus:outline-none focus:ring-2 focus:ring-terracotta/20 mb-4"
            />
            <Button className="w-full mb-2" onClick={createWishlist} disabled={!newName.trim()}>Create</Button>
            <Button variant="ghost" className="w-full" onClick={() => setShowCreate(false)}>Cancel</Button>
          </div>
        </div>
      )}
    </div>
  );
}

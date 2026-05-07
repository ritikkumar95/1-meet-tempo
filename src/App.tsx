import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/design-system/layout/Navbar";
import { HomePage } from "@/pages/HomePage";
import { SearchPage } from "@/pages/SearchPage";
import { ListingDetailPage } from "@/pages/ListingDetailPage";
import { TripsPage } from "@/pages/TripsPage";
import { TripDetailPage } from "@/pages/TripDetailPage";
import { MessagesPage } from "@/pages/MessagesPage";
import { WishlistsPage } from "@/pages/WishlistsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/listing/:id" element={<ListingDetailPage />} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/trips/:id" element={<TripDetailPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/wishlists" element={<WishlistsPage />} />
          <Route path="*" element={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <p className="font-display text-6xl text-stone/30 mb-4">404</p>
                <p className="text-stone">Page not found</p>
              </div>
            </div>
          } />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

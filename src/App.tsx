import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import Productions from "./pages/Productions";
import ProductionDetails from "@/pages/ProductionDetails";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Newsletter from "./pages/Newsletter";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";
import BookingEmbed from "./pages/BookingEmbed";
import NewsletterPopup from "@/components/NewsletterPopup";

const queryClient = new QueryClient();

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Component to conditionally show newsletter popup
const ConditionalNewsletterPopup = () => {
  const { pathname } = useLocation();
  
  // Don't show popup on newsletter page or booking pages
  if (pathname === '/newsletter' || pathname.startsWith('/booking/')) {
    return null;
  }
  
  return <NewsletterPopup />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <ConditionalNewsletterPopup />
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/productions" element={<Productions />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/productions/:slug" element={<ProductionDetails />} />
          <Route path="/booking/:slug" element={<BookingEmbed />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

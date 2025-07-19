import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Necklaces from "./pages/Necklaces";
import Rings from "./pages/Rings";
import Bracelets from "./pages/Bracelets";
import Earrings from "./pages/Earrings";
import Gifts from "./pages/Gifts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/gifts" element={<Gifts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

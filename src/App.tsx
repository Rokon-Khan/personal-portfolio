// import "./App.css";
// import AboutMe from "./components/AboutMe";
// import CardSection from "./components/CardSection";
// import ContactMe from "./components/ContanctMe";
// import Footer from "./components/Footer";
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import ResumeSection from "./components/ResumeSection";
// import Skills from "./components/Skills";

// function App() {
//   return (
//     <>
//       <Navbar></Navbar>
//       <HeroSection></HeroSection>
//       <AboutMe></AboutMe>
//       <Skills></Skills>
//       <CardSection></CardSection>
//       <ResumeSection></ResumeSection>
//       <ContactMe></ContactMe>
//       <Footer></Footer>
//     </>
//   );
// }

// export default App;

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

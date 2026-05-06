import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const App = () => {
  return (
    <main className="relative">
      <Navigation transparent />
      <Hero />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default App;

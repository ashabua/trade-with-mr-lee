import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import InvestorPartnership from './components/InvestorPartnership';
import Performance from './components/Performance';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#020817' }}>
      <Navigation />
      <main>
        <Hero />
        <About />
        <InvestorPartnership />
        <Performance />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

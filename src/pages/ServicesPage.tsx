import Header from '../components/Header';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
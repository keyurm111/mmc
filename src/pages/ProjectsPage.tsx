import Header from '../components/Header';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
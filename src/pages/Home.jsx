import PageTransition from '../components/ui/PageTransition.jsx';
import HeroVideoCycler from '../components/Hero/HeroVideoCycler.jsx';
import FeaturedStrip from '../components/Home/FeaturedStrip.jsx';
import AboutTeaser from '../components/Home/AboutTeaser.jsx';
import Testimonials from '../components/Home/Testimonials.jsx';
import CTASection from '../components/Home/CTASection.jsx';

export default function Home() {
  return (
    <PageTransition>
      <HeroVideoCycler />
      <FeaturedStrip />
      <AboutTeaser />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}

import Navbar from '../../components/layout/Herosection/Navbar'
import HeroSection from '../../components/layout/Herosection/HeroSection'
import FeatureCardSection from '../../components/layout/FeatureSection/FeatureCardSection'
import LearnMoreSection from '../../components/layout/FeatureSection/LearnMoreSection'
import TestimonialCardSection from '../../components/layout/TestimonialSection/TestimonialCardSection'
import Footer from '../../components/layout/FooterSection/Footer'

function Dashboard() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LearnMoreSection />
      <FeatureCardSection />
      <TestimonialCardSection />
      <Footer />
    </>
  )
}

export default Dashboard
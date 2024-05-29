import BoxInfo from "@/components/Landing/BoxInfo"
import Header from "@/components/Landing/Header"
import MarqueeSlider from "@/components/Landing/MarqueeSlider"
import MatrixEffect from "@/components/Landing/MatrixEffect"
import Para from "@/components/Landing/Para"
import SecondPara from "@/components/Landing/SecondPara"
import Testimonials from "@/components/Landing/Testimonials/Testimonials"

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
      </div>
      <MarqueeSlider />
      <Para />
      <BoxInfo />
      <SecondPara />
      <MatrixEffect />
      <Testimonials />
    </>
  )
}

export default Home
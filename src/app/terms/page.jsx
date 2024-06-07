import MainFooter from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Heading from "@/components/Terms/Heading"
import LastModified from "@/components/Terms/LastModified"
import OurService from "@/components/Terms/OurService"

const TermsAndCondition = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <Heading />
            <div className="max-w-[1000px] mx-auto px-4 md:px-9">
                <LastModified />
                <OurService />
            </div>
            <MainFooter />
        </div>
    )
}

export default TermsAndCondition

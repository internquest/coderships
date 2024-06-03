import Accordion from "@/components/ForStudents/Accordion/Accordion"
import ChangingApproach from "@/components/ForStudents/ChangingApproach"
import SailWithCoderships from "@/components/ForStudents/SailWithCoderships"
import StudentsHeader from "@/components/ForStudents/StudentsHeader"
import Tagline from "@/components/ForStudents/Tagline"

const StudentsPage = () => {
    return (
        <>
            <StudentsHeader />
            <div className="bg-white">
                <ChangingApproach />
                <Tagline />
                <Accordion />
                <SailWithCoderships />
            </div>
        </>
    )
}

export default StudentsPage


import CTA from '../components/cta'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import AboutHeader from '../components/AboutHeader'
import Foundersx from '../components/foundersx'
import Space from '../components/space'
import Intructors from '../components/Instructors'

export default function About() {
    return (
        <>

            <Navbar />
            <AboutHeader />

            <div className="mt-[95vh] relative z-10">
                <Foundersx />
                <Intructors />
                <Space />
                <CTA />
                <Footer />

            </div>


        </>
    )
}
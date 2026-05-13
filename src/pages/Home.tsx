import Header from '../components/header'
import Vision from '../components/vision'
import Founders from '../components/founders'
import CTA from '../components/cta'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Home() {
    return (

        <>
            <Navbar />
            <Header />
            <div className="mt-[95vh] relative z-10">
                <Vision />
                <Founders />
                <CTA />
                <Footer />

            </div>

        </>


    )
}
import ClassesHeader from '../components/ClassesHeader'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Classesx from '../components/Classesx'
import Promise from '../components/Promise'
export default function Classes() {
    return (
        <>

            <Navbar />
            <ClassesHeader />
            <div className="mt-[95vh] relative z-10 w-full">
                <Classesx />
                <Promise />
                <Footer />
            </div>


        </>

    )
}
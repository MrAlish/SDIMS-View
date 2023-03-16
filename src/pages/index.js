import Header from "@/components/header/Header";
import LandingPage from "@/components/landingPage/LandingPage";
import Footer from "@/components/footer/Footer";
import SeoOptimization from "../components/reusableDesign/SeoOptimzation";
import BackToTop from "../backToTop/BackToTop";


export default function Home() {
  return (
    <>
      <SeoOptimization title={"nagarpalika"} />

      <div className="app-container">
        <div className="header">
          <Header />
        </div>
        <div className="body ">
          <LandingPage />
        </div>
        <div className=" flex justify-between lg:px-20 px-6  pb-4">
          <div className="lg:px-80">
            <Footer />
          </div>
          <div className="hidden lg:flex ">
            {" "}
            <BackToTop />
          </div>
        </div>
      </div>
    </>
  );
}

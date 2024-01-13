import heroImage from "./assets/hero-graphics.svg";
import headerLogo from "./assets/lws-logo-en.svg";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import StudentList from "./components/StudentList";

function App() {
  return (
    <>
      <Navbar headerLogo={headerLogo} />
      <Hero heroImage={heroImage} />
      <section className="py-24 lg:pt-[120px] lg:pb-28">
        <div className="container">
          <div className="mb-16 flex flex-col items-center">
            <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
              <span className="text-[#00CC8C]">Students</span> of the Year
            </h2>
            <Search />
          </div>

          <div className="max-w-[848px] mx-auto overflow-auto">
            <StudentList />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;

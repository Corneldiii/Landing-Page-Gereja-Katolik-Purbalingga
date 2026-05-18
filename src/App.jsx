import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import DailyVerse from "./components/DailyVerse";
import Priests from "./components/Priests";
import Activities from "./components/Activities";
import MassSchedule from "./components/MassSchedule";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <DailyVerse />
        <Priests />
        <Activities />
        <MassSchedule />
      </main>
      <Footer />
    </>
  );
}
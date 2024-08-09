import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import BubblesBar from "./components/BubblesBar";
import Listings from "./components/Listings";

function App() {

    const sections = [
        { id: "home", label: "Home" },
        { id: "services", label: "Services" },
        { id: "listings", label: "Listings" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <div className="App">
            <Header />
            <BubblesBar sections={sections} />
            <Home />
            <Services />
            <Listings />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;

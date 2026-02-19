import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <Hero />
            <TrustBar />
            <WhyUs />
            <Services />
            <Footer />
        </div>
    );
}

export default App;

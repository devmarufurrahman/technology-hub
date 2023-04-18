import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useSmoothScroll } from "./hooks/SmothScroll";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Favourite from "./components/Favourite";
import NotFound from "./components/NotFound";

const App = () => {
	useSmoothScroll();
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/feature" element={<Feature />} />
				<Route path="/about" element={<About />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/favourite" element={<Favourite needFullHight={true} />} />
				<Route path="/*" element={<NotFound needFullHight={true} />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;

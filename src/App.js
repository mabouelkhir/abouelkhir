import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const Pharmacies = lazy(() => import('./pages/Pharmacies.jsx'));
const Predictsdh = lazy(() => import('./pages/Predictsdh'));
const Myeval = lazy(() => import('./pages/Myeval'));
const Epay = lazy(() => import('./pages/Epay'));
const Kunnash = lazy(() => import('./pages/Kunnash'));
const Objectdetection = lazy(() => import('./pages/Objectdetection'));
const Para = lazy(() => import('./pages/Para'));
const BloodDonation = lazy(() => import('./pages/BloodDonation'));
const Hcaravan = lazy(() => import('./pages/Hcaravan'));
const Nht = lazy(() => import('./pages/Nht'));
const Renovation = lazy(() => import('./pages/Renovation'));
const ShipCharityShop = lazy(() => import('./pages/ShipCharityShop'));
const ShipIftar = lazy(() => import('./pages/ShipIftar'));




function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/single-project"
								element={<ProjectSingle />}
							/>
							<Route path="projects/predictsdh"
							element={<Predictsdh />}/>
							<Route path="projects/pharmacies"
							element={<Pharmacies />}/>
							<Route path="projects/myeval"
							element={<Myeval />}/>
							<Route path="projects/e-pay"
							element={<Epay />}/>
							<Route path="projects/kunnash"
							element={<Kunnash />}/>
							<Route path="projects/objectdetection"
							element={<Objectdetection />}/>
							<Route path="extracurricular_activities/blood_donation"
							element={<BloodDonation />}/>
							<Route path="extracurricular_activities/nht"
							element={<Nht />}/>
							<Route path="extracurricular_activities/hcaravane"
							element={<Hcaravan />}/>
							<Route path="extracurricular_activities/charity"
							element={<ShipCharityShop />}/>
							<Route path="extracurricular_activities/renovation"
							element={<Renovation />}/>
							<Route path="extracurricular_activities/ship_iftar"
							element={<ShipIftar />}/>
							<Route path="extracurricular_activities"
							element={<Para />}/>

							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;

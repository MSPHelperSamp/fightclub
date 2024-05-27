import './home.scss'
import { Navbar, Intro, Join, Project, BreakImage1, BreakImage2, Footer, Email} from '../../components'
function Home() {
	return (
		<section className='homeSection'>
			<Navbar/>
			<Intro/>
			<BreakImage1/>
			<Join/>
			<Project/>
			<BreakImage2/>
			<Footer/>
			<Email/>
		</section>
	);
}

export default Home;
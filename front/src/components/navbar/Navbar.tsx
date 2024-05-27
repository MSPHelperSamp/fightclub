import logo from '/logo.svg'
import './navbar.scss'

const Navbar = () => {
	return (
		<nav className='navbarSection'>
			<img src={logo} alt='logo' />
			<div className='welcome'>
				<a>Project</a>
				<a>Roadmap</a>
				<a>Join Club</a>
			</div>
		</nav>
	)
}

export default Navbar
import './project.scss'
import projectMan from '/projectMan.svg'
import projectTooth from '/projectTooth.svg'
import projectHand from '/projectHand.svg'
import fartClub from '/fartClub.svg'

const Project = () => {
	return (
		<section className='project'>
			<img className='projectTooth' src={projectTooth} alt='image' />
			<img className='projectHand' src={projectHand} alt='image' />
			<div className='textBlock'>
				<p>project</p>
				<p>MAYHEM 2</p>
				<p>I felt like destroying something beautiful.</p>
			</div>
			<div className='roadmap'>
				<div className='box'>
					<p className='topText'>Joining Club</p>
					<p className='bottomText'>01.06 - 28.06</p>
				</div>
				<div className='box'>
					<p className='topText'>Launching quests</p>
					<p className='bottomText'>28.06 - 06.07</p>
				</div>
				<div className='box'>
					<p className='topText'>Freemint NFT</p>
					<p className='bottomText'>07.07 - ???</p>
				</div>
				<div className='box'>
					<p className='topText'>Token drop</p>
					<p className='bottomText'>??? - ???</p>
				</div>
				<div className='box'>
					<p className='topText'>Token listing</p>
					<p className='bottomText'>??? - ???</p>
				</div>
			</div>
			<img className='projectMan' src={projectMan} alt='image' />
			<img className='fartClub' src={fartClub} alt='image' />
		</section>
	)
}

export default Project;

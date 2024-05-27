import face from '/face.svg'
import './breakImage2.scss'

const BreakImage2 = () => {
	return (
		<section className='break2'>
			<>
				<img src={face} alt='image' />
				<article>
					<p>★ I say never be complete. Stop<br></br>being perfect. I say let's evolve,<br></br>let the chips fall where they may.</p>
					<p className='caption'>Ⓒ Tuler Dyrden</p>
				</article>
			</>
		</section>
	)
}

export default BreakImage2;
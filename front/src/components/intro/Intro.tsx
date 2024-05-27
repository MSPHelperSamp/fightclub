import imageIntro from '/imageIntro.svg'
import './Intro.scss'

const Intro = () => {
	return (
		<section className='intro'>
			<article>
				<p>★ The first rule of Fight Club<br></br>is to talk about Fight Club.</p>
				<p className='caption'>Ⓒ Tuler Dyrden</p>
			</article>
			<img src={imageIntro} alt='image' />
		</section>
	)
}

export default Intro;
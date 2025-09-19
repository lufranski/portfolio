import heroImg from './../../assets/mestesso.svg'
import './Hero.module.css'

function Hero() {
    return <section id='hero'>
        <h2>Hi, I'm</h2>
        <h2>Luiz Franski</h2>
        <h2>Frontend Developer</h2>
        <img src={heroImg} alt="Hero Image" id='hero_avatar' />
    </section>
}

export default Hero;
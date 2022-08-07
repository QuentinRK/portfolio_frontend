import React from 'react'
import { AiFillLinkedin as Linkedin,
         AiFillGithub as Github,
         AiOutlineMail as Mail} from 'react-icons/ai'
import '../styles/footer.scss'

const Footer = () => {
    return (
        <div className="footer-container">
        <ul className="social-media">

        <a href="https://www.linkedin.com/in/quentin-rankin" target="_blank" rel="noreferrer" ><Linkedin id="linkedin"/></a>
        <a href="https://github.com/QuentinRK" target="_blank" rel="noreferrer" ><Github id="github"/></a>
        <a href="mailto:q.rankin@outlook.com"><Mail id="Mail"/></a>
        </ul>
        </div>
    )
}

export default Footer

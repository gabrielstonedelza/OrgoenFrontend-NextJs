import footerstyle from '../../styles/footer/Footer.module.css'
import {
    FaFacebookF,
    FaInstagram,
    FaPhoneAlt,
    FaYoutube,
} from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={footerstyle.footer}>
            <div className={footerstyle.socialmedia}>
                <a href="https://www.facebook.com/hopeorgeonofstars-309631359937695/?__tn__=%2Cd%2CP-R&eid=ARDvvJO-Pv5b_GV6VKvU2mQrIRjtI5OyACb_aM537mwafkSKiaxancgNBDn6GvmiZe665-UZjsOKq1qY" target="_blank">
                    <FaFacebookF className={footerstyle.icon} />
                </a>
                <a href="https://www.instagram.com/hopeorgeonofstars/" target="_blank">
                    <FaInstagram className={footerstyle.icon} />
                </a>
                <a href="https://www.youtube.com/channel/UChDw2wQiCqw0s0aSLph3sPA/videos" target="_blank">
                    <FaYoutube className={footerstyle.icon} />
                </a>
            </div>
            <div className={footerstyle.contactnumbers}>
                <FaPhoneAlt className={footerstyle.icon} /> 
                <span className={footerstyle.numbers}>
                +1 844-339-4020 | +233 593380008
                </span>
            </div>
            <div className={footerstyle.credits}>
                <p>&copy; 2022 orgeonofstars.org</p>
                <Link href="/">Terms</Link> |
                <Link href="/privacy">Privacy</Link>
            </div>

        </div>
    )
}

export default Footer
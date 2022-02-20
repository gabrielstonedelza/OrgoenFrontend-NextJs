import footerstyle from '../../styles/footer/Footer.module.css'
import {
    FaFacebookF,
    FaInstagram,
    FaLocationArrow,
    FaPhoneSquare,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className={footerstyle.footer}>
            <div className={footerstyle.socialmedia}>
                <a href="https://www.facebook.com/hopeorgeonofstars-309631359937695/?__tn__=%2Cd%2CP-R&eid=ARDvvJO-Pv5b_GV6VKvU2mQrIRjtI5OyACb_aM537mwafkSKiaxancgNBDn6GvmiZe665-UZjsOKq1qY" target="_blank">
                    <FaFacebookF  className={footerstyle.icon}/>
                </a>
                <a href="https://www.instagram.com/hopeorgeonofstars/" target="_blank">
                    <FaInstagram className={footerstyle.icon}/>
                </a>
                <a href="https://www.youtube.com/channel/UChDw2wQiCqw0s0aSLph3sPA/videos" target="_blank">
                    <FaYoutube  className={footerstyle.icon}/>
                </a>
            </div>
            <div className={footerstyle.credits}>
                <p>&copy; 2022 CopyRight: orgeonofstars.org</p>
            </div>

        </div>
    )
}

export default Footer
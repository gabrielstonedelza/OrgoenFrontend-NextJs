
import { useState } from 'react'
import Link from "next/link";
import headerStyle from '../../styles/headerstyles/HeaderStyle.module.css'
import Image from "next/image";
import logo from '../../assets/images/orgeonlogo.jpg'
import {
    FaBars,
    FaRegTimesCircle
} from "react-icons/fa";

const Header = () => {
    const [sidenavOpened, setSideNavOpened] = useState(false);

    const handleOpenedSideNav = () => {
        setSideNavOpened(true);
        console.log("thank")
    };
    const handleClosedSideNav = () => {
        setSideNavOpened(false);
    };

    return (
        <>
            <div className={headerStyle.header}>
                {/* logo */}
                <div className={headerStyle.forlogo}>
                    <Image src={logo} alt="company logo" className={headerStyle.logo} width={70} height={70} />
                </div>
                {/* navlinks */}
                <div className={headerStyle.navs}>
                    <div className={headerStyle.navlinks}>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/" passHref className={headerStyle.link} id={headerStyle.mylink}>
                                Home
                            </Link>
                        </div>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/volunteers" passHref>
                                Volunteers
                            </Link>
                        </div>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/partners" passHref>
                                Partners
                            </Link>
                        </div>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/gallery" passHref>
                                Gallery
                            </Link>
                        </div>
                    
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/about" passHref>
                                About
                            </Link>
                        </div>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/donate" passHref>
                                Donate
                            </Link>
                        </div>

                    </div>
                </div>
                <div className={headerStyle.donateiconandbars}>
                    <div className={headerStyle.bars}>
                        <FaBars onClick={handleOpenedSideNav} />
                    </div>
                </div>
            </div>
            {/* on smaller screens */}
            {sidenavOpened &&
                <div onClick={handleClosedSideNav}>
                    <div className={headerStyle.onsmallerscreen}>
                        <FaRegTimesCircle
                            className={headerStyle.close} onClick={handleClosedSideNav}
                        />
                        <div className={headerStyle.navs}>
                    <div className={headerStyle.navlinks}>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/" passHref className={headerStyle.link} id={headerStyle.mylink}>
                                Home
                            </Link>
                        </div>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/volunteers" passHref>
                                Volunteers
                            </Link>
                        </div>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/partners" passHref>
                                Partners
                            </Link>
                        </div>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/gallery" passHref>
                                Gallery
                            </Link>
                        </div>
                    
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/about" passHref>
                                About
                            </Link>
                        </div>
                        <div className={headerStyle.navlinksitem}>
                            <Link href="/donate" passHref>
                                Donate
                            </Link>
                        </div>

                    </div>
                </div>

                    </div>
                </div>
            }
        </>
    )
}

export default Header
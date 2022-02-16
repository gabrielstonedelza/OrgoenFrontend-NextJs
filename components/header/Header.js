
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
                <nav className={headerStyle.nav}>
                    <ul className={headerStyle.navlinks}>
                        <li className={headerStyle.navlinksitem}>
                            <Link href="/" passHref className={headerStyle.link}>
                                Home
                            </Link>
                        </li>
                        <li className={headerStyle.navlinksitem}>
                            <Link href="/" passHref>
                                Volunteers
                            </Link>
                        </li>
                        <li className={headerStyle.navlinksitem}>
                            <Link href="/" passHref>
                                Partners
                            </Link>
                        </li>
                        <li className={headerStyle.navlinksitem}>
                            <Link href="/" passHref>
                                Gallery
                            </Link>
                        </li>
                        <li className={headerStyle.navlinksitem}>
                            <Link href="/" passHref>
                                Contact
                            </Link>
                        </li>
                        <li className={headerStyle.navlinksitem}>
                            <Link href="/" passHref>
                                About
                            </Link>
                        </li>
                        <li className={headerStyle.navlinksitem}>
                            <Link href="/" passHref>
                                Donate
                            </Link>
                        </li>

                    </ul>
                </nav>
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
                        <nav className={headerStyle.nav}>
                            <ul className={headerStyle.navlinks}>
                                <li className={headerStyle.navlinksitem}>
                                    <Link href="/" passHref className={headerStyle.link}>
                                        Home
                                    </Link>
                                </li>
                                <li className={headerStyle.navlinksitem}>
                                    <Link href="/" passHref>
                                        Volunteers
                                    </Link>
                                </li>
                                <li className={headerStyle.navlinksitem}>
                                    <Link href="/" passHref>
                                        Partners
                                    </Link>
                                </li>
                                <li className={headerStyle.navlinksitem}>
                                    <Link href="/" passHref>
                                        Gallery
                                    </Link>
                                </li>
                                <li className={headerStyle.navlinksitem}>
                                    <Link href="/" passHref>
                                        Contact
                                    </Link>
                                </li>
                                <li className={headerStyle.navlinksitem}>
                                    <Link href="/" passHref>
                                        About
                                    </Link>
                                </li>
                                <li className={headerStyle.navlinksitem}>
                                    <Link href="/" passHref>
                                        Donate
                                    </Link>
                                </li>

                            </ul>
                        </nav>

                    </div>
                </div>
            }
        </>
    )
}

export default Header
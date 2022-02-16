import Image from "next/image";
import Akofa from "../../assets/images/f71e4e8d-4cf0-48a5-9e8c-f0bd837ceb66.JPG";
import Gabriel from "../../assets/images/ae2032cf-ddff-4022-8eae-93d3c5e3ddf9.jpg";
import Emma from "../../assets/images/WhatsApp-Image-2019-06-25-at-16.32.41-731x1024.jpeg";
import Default from "../../assets/images/boy.png";
import styles from "../../styles/team/Team.module.css";
import { FaFacebookF, FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Team = () => {
    return (
        <div className={styles.mainteamcontainer}>
            <h3 className={styles.teamtitle}>Our Team</h3>
            <div className={styles.myteam}>
                <div className={styles.teambox}>
                    <div className={styles.myimageandsocial}>
                        <Image
                            src={Akofa}
                            alt="team poster"
                            width={150}
                            height={150}
                            className={styles.myimage}
                            objectFit="cover"
                        />
                        <div className={styles.sociallinks}>
                            <Link href="https://web.facebook.com/joselyn.amenyo" passHref>
                                <FaFacebookF className={styles.socialicon} />
                            </Link>
                            <Link href="https://www.instagram.com/josekyn4448/" passHref>
                                <FaInstagram className={styles.socialicon} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.teaminfo}>
                        <h3 className={styles.teamname}>Joselyn Akofa AMenyo</h3>
                        <small className={styles.position}>CEO</small>
                    </div>
                </div>
                <div className={styles.teambox}>
                    <div className={styles.myimageandsocial}>
                        <Image
                            src={Gabriel}
                            alt="team poster"
                            width={150}
                            height={150}
                            className={styles.myimage}
                            objectFit="cover"
                        />
                        <div className={styles.sociallinks}>
                            <Link href="https://web.facebook.com/connect.django/" passHref>
                                <FaFacebookF className={styles.socialicon} />
                            </Link>
                            <Link href="https://www.instagram.com/gabriel_stonedelza/" passHref>
                                <FaInstagram className={styles.socialicon} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/gabriel-akwasi-asare-2367021a6/" passHref>
                                <FaLinkedin className={styles.socialicon} />
                            </Link>
                            <Link href="https://github.com/gabrielstonedelza" passHref>
                                <FaGithub className={styles.socialicon} />
                            </Link>
                            <Link href="https://twitter.com/gabriel_stone_" passHref>
                                <FaTwitter className={styles.socialicon} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.teaminfo}>
                        <h3 className={styles.teamname}>Gabriel Akwasi Asare</h3>
                        <small className={styles.position}>General Manager / Software Engineer</small>
                    </div>
                </div>
                <div className={styles.teambox}>
                    <div className={styles.myimageandsocial}>
                        <Image
                            src={Emma}
                            alt="team poster"
                            width={150}
                            height={150}
                            className={styles.myimage}
                            objectFit="cover"
                        />
                        <div className={styles.sociallinks}>
                            <Link href="https://web.facebook.com/asti.christlike" passHref>
                                <FaFacebookF className={styles.socialicon} />
                            </Link>
                            <Link href="https://www.instagram.com/asti_van_sweet/" passHref>
                                <FaInstagram className={styles.socialicon} />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.teaminfo}>
                        <h3 className={styles.teamname}>Mr Emmanuel Nimako Mensah</h3>
                        <small className={styles.position}>IT / Social Media</small>
                    </div>
                </div>
                <div className={styles.teambox}>
                    <Image
                        src={Default}
                        alt="team poster"
                        width={150}
                        height={150}
                        className={styles.myimage}
                        objectFit="cover"
                    />
                    <div className={styles.teaminfo}>
                        <h3 className={styles.teamname}>James Yaw Anane</h3>
                        <small className={styles.position}>Project Manager</small>
                    </div>
                </div>
                <div className={styles.teambox}>
                    <Image
                        src={Default}
                        alt="team poster"
                        width={150}
                        height={150}
                        className={styles.myimage}
                        objectFit="cover"
                    />
                    <div className={styles.teaminfo}>
                        <h3 className={styles.teamname}>Eunice Acheampong</h3>
                        <small className={styles.position}>Secretary</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
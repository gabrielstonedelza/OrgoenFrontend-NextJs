import volunteerStyle from "../../styles/volunteers/VolunteerCard.module.css";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

const VolunteerItem = ({
    name,
    pic,
    country,
    profession,
    id
}) => {
    return (
        <>

            <div className={volunteerStyle.containerbox}>
                <Link href="/volunteer/[id]" as={`/volunteer/${id}`} passHref>
                    <FaTrash className={volunteerStyle.trash} title="Stop being a volunteer and delete all your personal information"/>
                </Link>
                <Image
                    src={pic}
                    alt="volunteer's picture"
                    width={150}
                    height={150}
                    className={volunteerStyle.img}
                    layout="intrinsic"
                />
                <h1 className={volunteerStyle.name}>{name}</h1>
                <small className={volunteerStyle.muted}>{profession}</small>
                <small className={volunteerStyle.muted}>{country}</small>
            </div>
        </>
    );
};

export default VolunteerItem;
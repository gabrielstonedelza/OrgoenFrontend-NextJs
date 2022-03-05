import volunteerStyle from "../../styles/volunteers/VolunteerCard.module.css";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

const VolunteerItem = ({
    data,
}) => {
    return (
        <>

            <div className={volunteerStyle.containerbox}>
                <Link href="/volunteer/[id]" as={`/volunteer/${data.id}`} passHref>
                    <FaTrash className={volunteerStyle.trash} title="Stop being a volunteer and delete all your personal information"/>
                </Link>
                <Image
                    src={data.get_volunteer_photo}
                    alt="volunteer's picture"
                    width={150}
                    height={150}
                    className={volunteerStyle.img}
                    layout="intrinsic"
                />
                <h1 className={volunteerStyle.name}>{data.name}</h1>
                <small className={volunteerStyle.muted}>{data.profession}</small>
                <small className={volunteerStyle.muted}>{data.country}</small>
            </div>
        </>
    );
};

export default VolunteerItem;
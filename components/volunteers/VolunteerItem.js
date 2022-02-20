import volunteerStyle from "../../styles/volunteers/VolunteerCard.module.css";
import Image from "next/image";

const VolunteerItem = ({
    name,
    pic,
    country,
    profession,
}) => {
    return (
        <>
        
            <div className={volunteerStyle.containerbox}>
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
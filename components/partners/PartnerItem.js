import volunteerStyle from "../../styles/volunteers/VolunteerCard.module.css";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

const PartnerItem = ({ name, id }) => {
  return <div className={volunteerStyle.partnercontainerbox}>

    <h1 className={volunteerStyle.name}>{name}</h1>
    <Link href="/partner/[id]" as={`/partner/${id}`} passHref>
      <FaTrash className={volunteerStyle.trash} title="Stop being our partner and delete all your personal information" />
    </Link>
  </div>;
};

export default PartnerItem;

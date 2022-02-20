import volunteerStyle from "../../styles/volunteers/VolunteerCard.module.css";

const PartnerItem = ({name}) => {
  return <div className={volunteerStyle.partnercontainerbox}>
  
  <h1 className={volunteerStyle.name}>{name}</h1>
</div>;
};

export default PartnerItem;

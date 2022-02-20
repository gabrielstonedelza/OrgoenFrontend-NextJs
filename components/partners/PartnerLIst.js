import PartnerItem from '../../components/partners/PartnerItem'
import volunteerStyle from "../../styles/volunteers/VolunteerCard.module.css";

const PartnersList = ({data}) => {
  return <div>
  <div className={volunteerStyle.partnercontainer}>
    {data.map((partner) => (
      <div key={partner.id}>
        <PartnerItem
          name={partner.name}
        />
      </div>
    ))}
  </div>
</div>;
};

export default PartnersList;
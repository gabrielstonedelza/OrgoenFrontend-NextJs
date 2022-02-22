import PartnerItem from '../../components/partners/PartnerItem'
import volunteerStyle from "../../styles/volunteers/VolunteerCard.module.css";

const PartnersList = ({data}) => {
  return <div className={volunteerStyle.mainpartnercontainer}>
    <h3>Our Partners Available</h3>
  <div className={volunteerStyle.partnercontainer}>
    {data.map((partner) => (
      <div key={partner.id}>
        <PartnerItem
          name={partner.name}
          id={partner.id}
        />
      </div>
    ))}
  </div>
</div>;
};

export default PartnersList;
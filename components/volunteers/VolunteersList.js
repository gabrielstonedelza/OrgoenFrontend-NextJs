import VolunteerItem from "../volunteers/VolunteerItem";
import volunteerStyle from "../../styles/volunteers/VolunteerCard.module.css";

const VolunteersList = ({ data }) => {
  return (
    <div>
        <h3 className={volunteerStyle.title}>Our Volunteers</h3>
      <div className={volunteerStyle.container}>
        {data.map((volunteer) => (
          <div key={volunteer.id}>
            <VolunteerItem
              data={data}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteersList;
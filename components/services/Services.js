import serviceStyle from '../../styles/services/Services.module.css'
import Image from "next/image";
import Christ from "../../assets/images/christ.png";
import Counselling from "../../assets/images/counselling.png";
import Education from "../../assets/images/education.png";
import Shelter from "../../assets/images/shelter.png";
import Medical from "../../assets/images/mediacal.png";

const Services = () => {
    return (
        <div className={serviceStyle.maincontainer}>
            <h3 className={serviceStyle.serviceheading}>Our Services</h3>
            <div className={serviceStyle.servicecontainer}>
                <div className={serviceStyle.box}>
                    <Image src={Christ} alt="knowing Christ" width={300} height={300} className={serviceStyle.img}/>
                    <button className={serviceStyle.btn}>More</button>
                </div>
                <div className={serviceStyle.box}>
                    <Image src={Counselling} alt="Counselling" width={300} height={300} className={serviceStyle.img}/>
                    <button className={serviceStyle.btn}>More</button>
                </div>
                <div className={serviceStyle.box}>
                    <Image src={Education} alt="Education" width={300} height={300} className={serviceStyle.img}/>
                    <button className={serviceStyle.btn}>More</button>
                </div>
                <div className={serviceStyle.box}>
                    <Image src={Medical} alt="Medical Aid" width={300} height={300} className={serviceStyle.img}/>
                    <button className={serviceStyle.btn}>More</button>
                </div>
                <div className={serviceStyle.box}>
                    <Image src={Shelter} alt="Shelter" width={300} height={300} className={serviceStyle.img}/>
                    <button className={serviceStyle.btn}>More</button>
                </div>
            </div>
        </div>
    )
}

export default Services
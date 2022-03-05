import serviceStyle from '../../styles/services/Services.module.css'
import Image from "next/image";
import Christ from "../../assets/images/christ.png";
import Counselling from "../../assets/images/counselling.png";
import Education from "../../assets/images/education.png";
import Shelter from "../../assets/images/shelter.png";
import Medical from "../../assets/images/mediacal.png";

const Services = () => {
    return (
        <div className={serviceStyle.myservicecontainer}>

        <div className={serviceStyle.maincontainer}>
            <h3 className={serviceStyle.serviceheading}>Our Services</h3>
            <div className={serviceStyle.servicecontainer}>
                <div className={serviceStyle.box}>
                    <h3 className={serviceStyle.title}>Knowing Christ</h3>
                <div className={serviceStyle.scontents}>
                    <p>
                        1.Evangelism : As a Christian base organization we commission
                        ourselves to preach and spread the word of God. We seek to feed the
                        lost souls with the word of God and lead them to Christ.
                    </p>
                    <p>
                        2.Bible classes for new converts :  For beginners who have led to
                        Christ, we organize classes for our new convert to learn all about
                        God.
                    </p>
                    <p>
                        3.Prayer guidance : Contacts us with any prayer request and we will remember
                        you during our prayer sessions.
                    </p>
                </div>
                    <Image src={Christ} alt="knowing Christ" width={50} height={50} className={serviceStyle.img} priority/>
                   
                </div>
                <div className={serviceStyle.box}>
                <h3 className={serviceStyle.title}>Counselling and Mentorship</h3>
                <div className={serviceStyle.scontents}>
                    <p>
                        We offer counselling sessions to children struggling with drug addictions, behavior problems, abuse victims and etc. Our mentorship programs also offers guidance for carrier and talents development.
                    </p>
                </div>
                    <Image src={Counselling} alt="Counselling" width={50} height={50} className={serviceStyle.img} priority/>
                    
                </div>
                <div className={serviceStyle.box}>
                <h3 className={serviceStyle.title}>Education and Vocational Skill Program</h3>
                <div className={serviceStyle.scontents}>
                    <p>
                        Great educational opportunities are offered to children or adolescence
                        who are either behind in education or never had the opportunity to
                        attend one.Basic education and vocational skills such as carpentry,
                        tailoring/designing , beauty school/ cosmetology, catering and etc.
                        are some of the courses we offer
                    </p>
                </div>
                    <Image src={Education} alt="Education" width={50} height={50} className={serviceStyle.img} priority/>
                    
                </div>
                <div className={serviceStyle.box}>
                <h3 className={serviceStyle.title}>Medical Aid</h3>
                <div className={serviceStyle.scontents}>
                    <p>
                        Annual health screening & health educational programs are conducted to
                        help with early sickness detection or prevention.Our medical bill
                        assistance program provides aid for children from; age 0-17. The
                        criteria to qualify for this aid are;
                    </p>
                    <p> 1.Health condition must be critical or a chronic condition.</p>
                    <p> 2.Family income must be legally proven to be less than the outstanding bill.
                    </p>
                    <p> 3. Family must adhere to medical treatment at all times.
                    </p>
                </div>
                    <Image src={Medical} alt="Medical Aid" width={50} height={50} className={serviceStyle.img} priority/>
                    </div>
                    
                <div className={serviceStyle.box}>
                <h3 className={serviceStyle.title}>Shelter</h3>
                <div className={serviceStyle.scontents}>
                    <p>
                        We provide shelters for temporal stay for children struggling with accommodation, whiles finding a permanent home for them. Orphanage home for orphans.
                    </p>
                </div>
                    <Image src={Shelter} alt="Shelter" width={50} height={50} className={serviceStyle.img} priority/>
                    
                </div>
            </div>
        </div>
        </div>
       
    )
}

export default Services;
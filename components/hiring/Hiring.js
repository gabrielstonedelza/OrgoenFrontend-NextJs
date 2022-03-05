import PA from '../../assets/images/pa.png'
import IT from '../../assets/images/moderator.png'
import Image from 'next/image'
import hiringStyle from '../../styles/hiring/Hiring.module.css'

const Hiring = () => {
    return (
        <div className={hiringStyle.maincontainer}>
            <h3 className={hiringStyle.title}>We are hiring</h3>
            <div className={hiringStyle.container}>
                <div className={hiringStyle.position}>
                    <div className={hiringStyle.paimage}>
                        <Image src={PA} alt="pa image" className={hiringStyle.paimg} width={100} height={100} priority/>
                        <h4>Personal Asssistant</h4>
                    </div>
                    <div className={hiringStyle.paduties}>
                        <h3 className={hiringStyle.dtitle}>Duties</h3>
                        <p>1.Assist senior managers with daily administrative tasks.</p>
                        <p>2.Take notes.</p>
                        <p>3.Create documents and filing systems.</p>
                        <p>4.Schedule appointments.</p>
                        <p>NB: Send CV or Resume to orgeonofstars@gmail.com</p>
                    </div>
                </div>
                <div className={hiringStyle.position}>
                    <div className={hiringStyle.paimage}>
                        <Image src={IT} alt="pa image" className={hiringStyle.paimg} width={100} height={100} priority/>
                        <h4>Social Media Rep</h4>
                    </div>
                    <div className={hiringStyle.paduties}>
                        <h3 className={hiringStyle.dtitle}>Duties</h3>
                        <p>1.Responsible for optimizing companys social media goals.</p>
                        <p>2.Responding to customers queries via social media.</p>
                        <p>3.Managing the companys social media visibility.</p>
                        <p>4.Reviewing social media campaigns.</p>
                        <p>NB: Send CV or Resume to orgeonofstars@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hiring
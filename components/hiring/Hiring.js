import PA from '../../assets/images/pa.png'
import Image from 'next/image'
import hiringStyle from '../../styles/hiring/Hiring.module.css'

const Hiring = () => {
    return (
        <>
        <h3 className={hiringStyle.title}>We are hiring</h3>
        <div className={hiringStyle.container}>
            <div className={hiringStyle.paimage}>
                <Image src={PA} alt="pa image" className={hiringStyle.paimg}  width={300} height={300}/>
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
        </>
    )
}

export default Hiring
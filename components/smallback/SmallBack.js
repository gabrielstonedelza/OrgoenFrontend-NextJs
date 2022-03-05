import Image from 'next/image';
import vidstyles from '../../styles/showcasestyles/ShowcaseStyles.module.css'
import back from '../../public/back.jpg'

const SmallBack = () => {
  return (
    <div className={vidstyles.smallbackcontainer}>
        <Image src={back} alt="background image" layout="responsive" className={vidstyles.smallimage} priority/>
        <div className={vidstyles.smallcontents}>
            <h3>Orgeonofstars</h3>
        </div>
        
        </div>
  )
}

export default SmallBack
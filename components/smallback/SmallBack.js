import Image from 'next/image';
import vidstyles from '../../styles/showcasestyles/ShowcaseStyles.module.css'
import back from '../../public/back.jpg'

const SmallBack = () => {
  return (
    <div className={vidstyles.smallbackcontainer}>
        <div className={vidstyles.smallbackback}></div>
        <div className={vidstyles.smallbackoverlay}></div>
        <div className={vidstyles.smallcontents}>
            <h3>Orgeonofstars</h3>
        </div>
        </div>
  )
}

export default SmallBack
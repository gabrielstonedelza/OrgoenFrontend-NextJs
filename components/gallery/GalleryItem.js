import { useState } from "react";
import galleryStyle from "../../styles/gallery/Gallery.module.css";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const GalleryItem = ({ image }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <>
    <FsLightbox
          toggler={toggler}
          initialAnimation="scale-in-long"
          slideChangeAnimation="scale-in"
          sources={[
            `${image}`
          ]}
        />
      <div className={galleryStyle.containerbox}>
        <Image
          src={image}
          alt="gallery pic"
          width={250}
          height={200}
          layout="intrinsic"
          className={galleryStyle.img}
          onClick={() => setToggler(!toggler)}
          priority
        />
      </div>
    </>
  );
};

export default GalleryItem;

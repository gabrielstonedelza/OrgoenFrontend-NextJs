import GalleryItem from "./GalleryItem";
import galleryStyle from "../../styles/gallery/Gallery.module.css";

const GalleryList = ({ data }) => {
  return (
    <div>
      <div className={galleryStyle.container}>
        {data.map((gallery) => (
          <div key={gallery.id}>
            <GalleryItem image={gallery.get_gallery_item} caption={gallery.image_caption}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryList;

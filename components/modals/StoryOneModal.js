import storyStyles from "../../styles/stories/Stories.module.css";
const StoryOneModal = () => {
  return (
    <div>
      <div className={storyStyles.storycontainer}>
      <h2 className={storyStyles.storyheader}>Teshie-Nungua Orphanage</h2>
        <p className={storyStyles.storycontent}>
          We took this picture in 2007, it was our very first event and
          donation. We had a fun play day with with the orphans at the
          Teshie-Nungua Orphanage. We gave some monetary gifts and some basic
          items to show our love and support.
        </p>
      </div>
    </div>
  );
};

export default StoryOneModal;

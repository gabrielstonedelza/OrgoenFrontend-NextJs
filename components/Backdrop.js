import storyStyles from "../styles/stories/Stories.module.css"

const Backdrop = ({onClick}) => {
  return <div className={storyStyles.backdropcontainer} onClick={onClick} />

};

export default Backdrop;
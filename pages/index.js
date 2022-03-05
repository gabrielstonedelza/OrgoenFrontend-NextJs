import Head from 'next/head'
import Image from 'next/image'
import Vidback from '../components/vidback/Vidback'
import Hiring from '../components/hiring/Hiring'
import Services from '../components/services/Services'
import Team from '../components/team/Team'
import { useState } from 'react';
import storyStyles from '../styles/stories/Stories.module.css';
import Photo1 from "../assets/images/PHOTO-2019-04-11-14-53-36.jpg";
import Photo2 from "../assets/images/Screenshot-from-2019-06-26-00-01-41.png";
import Photo3 from "../assets/images/somekids-1024x768.jpg";
import Photo4 from "../assets/images/someparty-1024x768.jpg";
import Photo5 from "../assets/images/teshie-nungua-1024x768.jpg";
import Photo6 from "../assets/images/twins-576x1024.jpg";
import Photo7 from "../assets/images/idontknow.jpg";
import Photo8 from "../assets/images/isababy-576x1024.jpg";
import StoryTwo from "../components/modals/StoryTwoModal";
import StoryThree from "../components/modals/StoryThreeModal";
import StoryFour from "../components/modals/StoryFour";
import StoryFive from "../components/modals/StoryFive";
import StorySix from "../components/modals/StorySIx";
import StorySeven from "../components/modals/StorySeven";
import Backdrop from "../components/Backdrop";
import StoryOneModal from "../components/modals/StoryOneModal";
import ContactUs from "../components/contact/Contact"
import Footer from '../components/footer/Footer'
import SmallBack from '../components/smallback/SmallBack'

export default function Home() {
  const [openStoryOneModal, setOpenStoryOneModal] = useState(false);
  const [openStoryTwoModal, setOpenStoryTwoModal] = useState(false);
  const [openStoryThreeModal, setOpenStoryThreeModal] = useState(false);
  const [openStoryFourModal, setOpenStoryFourModal] = useState(false);
  const [openStoryFiveModal, setOpenStoryFiveModal] = useState(false);
  const [openStorySixModal, setOpenStorySixModal] = useState(false);
  const [openStorySevenModal, setOpenStorySevenModal] = useState(false);

  const openStoryOneModalContainer = () => {
    setOpenStoryOneModal(true);
  };
  const openStoryTwoModalContainer = () => {
    setOpenStoryTwoModal(true);
  };
  const openStoryThreeModalContainer = () => {
    setOpenStoryThreeModal(true);
  };
  const openStoryFourModalContainer = () => {
    setOpenStoryFourModal(true);
  };
  const openStoryFiveModalContainer = () => {
    setOpenStoryFiveModal(true);
  };
  const openStorySixModalContainer = () => {
    setOpenStorySixModal(true);
  };
  const openStorySevenModalContainer = () => {
    setOpenStorySevenModal(true);
  };

  const closeKnowingModalContainer = () => {

    setOpenStoryOneModal(false);
    setOpenStoryTwoModal(false);
    setOpenStoryThreeModal(false);
    setOpenStoryFourModal(false);
    setOpenStoryFiveModal(false);
    setOpenStorySixModal(false);
    setOpenStorySevenModal(false);
  };
  return (
    <div>
      <Head>
        <title>Oregon | Welcome</title>
        <meta name="description" content="Welcome to Orgeonofstars" />
        <link rel="icon" href="/forhome.png" />
      </Head>
      {openStoryOneModal && <Backdrop onClick={closeKnowingModalContainer} />}
      {openStoryTwoModal && <Backdrop onClick={closeKnowingModalContainer} />}
      {openStoryThreeModal && <Backdrop onClick={closeKnowingModalContainer} />}
      {openStoryFourModal && <Backdrop onClick={closeKnowingModalContainer} />}
      {openStoryFiveModal && <Backdrop onClick={closeKnowingModalContainer} />}
      {openStorySixModal && <Backdrop onClick={closeKnowingModalContainer} />}
      {openStorySevenModal && <Backdrop onClick={closeKnowingModalContainer} />}

      {openStoryOneModal && <StoryOneModal />}
      {openStoryTwoModal && <StoryTwo />}
      {openStoryThreeModal && <StoryThree />}
      {openStoryFourModal && <StoryFour />}
      {openStoryFiveModal && <StoryFive />}
      {openStorySixModal && <StorySix />}
      {openStorySevenModal && <StorySeven />}
      <Vidback />
      <SmallBack />
      <Hiring />
      <Services />
      <Team />
      <div className={storyStyles.mainback}>
        <h3 className={storyStyles.storytag}>
          Success Stories
        </h3>
        <div className={storyStyles.container}>
          <div
            className={storyStyles.containerbox}
            onClick={openStoryOneModalContainer}
          >
            <Image
              src={Photo5}
              alt="teshie"
              width={250}
              height={200}
              className={storyStyles.img}
              priority
              objectFit="cover"
              
            />
          </div>
          <div
            className={storyStyles.containerbox}
            onClick={openStoryTwoModalContainer}
          >
            <Image
              src={Photo3}
              alt="teshie"
              width={250}
              height={200}
              className={storyStyles.img}
              objectFit="cover"
            />
          </div>
          <div
            className={storyStyles.containerbox}
            onClick={openStoryThreeModalContainer}
          >
            <Image
              src={Photo7}
              alt="teshie"
              width={250}
              height={200}
              className={storyStyles.img}
              objectFit="cover"
            />
          </div>
          <div
            className={storyStyles.containerbox}
            onClick={openStoryThreeModalContainer}
          >
            <Image
              src={Photo4}
              alt="teshie"
              width={250}
              height={200}
              className={storyStyles.img}
              objectFit="cover"
            />
          </div>
          <div
            className={storyStyles.containerbox}
            onClick={openStoryFourModalContainer}
          >
            <Image
              src={Photo8}
              alt="teshie"
              width={250}
              height={200}
              className={storyStyles.img}
              objectFit="cover"
            />
          </div>
          <div
            className={storyStyles.containerbox}
            onClick={openStoryFiveModalContainer}
          >
            <Image
              src={Photo1}
              alt="teshie"
              width={250}
              height={200}
              className={storyStyles.img}
              objectFit="cover"
            />
          </div>

          <div
            className={storyStyles.containerbox}
            onClick={openStorySevenModalContainer}
          >
            <Image
              src={Photo2}
              alt="teshie"
              width={250}
              height={200}
              className={storyStyles.img}
              objectFit="cover"
            />
          </div>
          <div
            className={storyStyles.containerbox}
            onClick={openStorySixModalContainer}
          >
            <Image
              src={Photo6}
              alt="teshie"
              width={250}
              height={200}
              className={storyStyles.img}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <hr />
      <ContactUs />
      <Footer />
    
    </div>
  )
}

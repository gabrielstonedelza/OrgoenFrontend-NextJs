import AddVolunteer from "../components/volunteers/AddVolunteer";
import Head from "next/head";

const addvolunteer = () => {
  return <div>
    <Head>
        <title>Volunteers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./forhome.png" />
      </Head>
      <AddVolunteer />

  </div>;
};

export default addvolunteer;
import volunteerStyle from "../../../styles/volunteers/VolunteerCard.module.css";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import styles from "../../../styles/volunteers/VolunteerCard.module.css";
var FormData = require("form-data");

const Volunteer = ({ v_detail }) => {
  const router = useRouter();
  const v_num = v_detail.phone;
  const [mobileNumber, setMobileNumber] = useState("");
  const img = v_detail.get_volunteer_photo;
  const handleDeleteVolunteer = (e) => {
    e.preventDefault();
    toast.success("Please wait,removing your data");
    const apiUrl = `http://127.0.0.1:8000/delete_volunteer/${v_detail.id}`;
    if(mobileNumber == v_num){
        axios({
            method: "delete",
            url: apiUrl,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
                setTimeout(function () {
                    router.push("/volunteers");
                },3000)
            })
            .catch((error) => {
              if (error.response) {
                if (error.response.data["email"]) {
                  toast.error(`${error.response.data["email"]}`);
                }
                toast.error(`${error.response.data}`);
              }
            });
    }
    else{
        toast.error("Invalid mobile number provided")
    }
  };

  return (
    <>
      <Head>
        <title>Orgeon | Volunteer - {v_detail.id}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./forhome.png" />
      </Head>
      <div className={volunteerStyle.vmaincontainer}>
            <h2>Stop been a volunteer and delete all your information</h2>
        <div className={volunteerStyle.vdetailscontainer}>
          <Image
            src={img}
            alt="volunteer's picture"
            width={150}
            height={150}
            className={volunteerStyle.img}
            layout="intrinsic"
          />
        </div>
        <h4>Enter your mobile number</h4>
        <ToastContainer className="foo" style={{ width: "320px",fontSize: "15px" }}/>
        <form onSubmit={handleDeleteVolunteer}>
          <div className={styles.formcontrol}>
            
            <input
              required
              type="text"
              name=""
              id="mobilenumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Mobile Number"
            />
          </div>

          <br />
          <div className={styles.formcontrol}>
            <button type="submit">Delete</button>
          </div>
          <br />
        </form>
      </div>
    </>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://127.0.0.1:8000/volunteer_detail/${context.params.id}`
  );
  const v_detail = await res.json();

  return {
    props: {
      v_detail,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`http://127.0.0.1:8000/get_volunteers`);
  const volunteers = await res.json();
  const ids = volunteers.map((volunteer) => volunteer.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return { paths, fallback: false };
};

export default Volunteer;
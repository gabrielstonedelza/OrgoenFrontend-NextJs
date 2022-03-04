import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/volunteers/VolunteerCard.module.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
var FormData = require("form-data");

const AddPartner = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  var bodyForm = new FormData();
  bodyForm.append("name", name);
  bodyForm.append("email", email);
  bodyForm.append("phone", phone);

  const handleAddPartner = async (e) => {
    e.preventDefault();
    toast.success("Please wait,processing your data")
    const apiUrl = 'https://orgeonofstars.xyz/add_partner/'
    axios({
        method: "post",
        url: apiUrl,
        data: bodyForm,
        headers: { "Content-Type": "multipart/form-data" },
    })
        .then(function (response) {
          setTimeout(function () {
            router.push('/partners')
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

};

  return (
    <div>
      <div className={styles.myform}>
        <ToastContainer className="foo" style={{ width: "320px",fontSize: "15px" }}/>
        <h3>Partner with us</h3>
        <form onSubmit={handleAddPartner}>
          <div className={styles.formcontrol}>
            <label htmlFor="name">Name</label>
            <input
              required
              type="text"
              name=""
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formcontrol}>
            <label htmlFor="email">Email</label>
            <input
              required
              type="text"
              name=""
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.formcontrol}>
            <label htmlFor="phone">Phone</label>
            <input
              required
              type="text"
              name="phone"
              id=""
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <br />
          <div className={styles.formcontrol}>
            <button type="submit">Send</button>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
};

export default AddPartner;

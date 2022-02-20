import { useState } from "react";
import { useRouter } from 'next/router'
import styles from "../../styles/volunteers/VolunteerCard.module.css";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios'
var FormData = require('form-data')

const AddVolunteer = () => {
    const router = useRouter()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [profession, setProfession] = useState("");
    const [country, setCountry] = useState("");
    const [photo, setPhoto] = useState("");
    const [phone, setPhone] = useState("");
    const [whyjoin, setWhyjoin] = useState("");

    const checkFile = (e) => {
        setPhoto(e.target.files[0]);
    };

    var bodyForm = new FormData();
    bodyForm.append("name", name)
    bodyForm.append("email", email)
    bodyForm.append("profession", profession)
    bodyForm.append("country", country)
    bodyForm.append("photo", photo)
    bodyForm.append("phone", phone)
    bodyForm.append("why_join_Orgeon", whyjoin)



    const handleAddVolunteer = async (e) => {
        e.preventDefault();
        toast.success("Please wait,processing your data")
        const apiUrl = 'http://127.0.0.1:8000/add_volunteer/'
        axios({
            method: "post",
            url: apiUrl,
            data: bodyForm,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                router.push('/volunteers')
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
        <div className={styles.myform}>
            <ToastContainer />
            <h3>Become a volunteer</h3>
            <form onSubmit={handleAddVolunteer}>
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
                    <label htmlFor="phone">Profession</label>
                    <input
                        required
                        type="text"
                        name="profession"
                        id=""
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                    />
                </div>
                <div className={styles.formcontrol}>
                    <label htmlFor="country">Country</label>
                    <input
                        required
                        type="text"
                        name="contry"
                        id=""
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
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
                <div className={styles.formcontrol}>
                    <label htmlFor="whyjoin">Why join Orgeon?</label>
                    <input
                        required
                        type="text"
                        name="whyjoin"
                        id=""
                        value={whyjoin}
                        onChange={(e) => setWhyjoin(e.target.value)}
                    />
                </div>
                <div className={styles.formcontrol} id={styles.photo}>
                    <label htmlFor="photo">Photo</label>
                    <input
                        type="file"
                        name="photo"
                        id="photo"
                        required
                        onChange={(e) => checkFile(e)}
                    />
                </div>

                <br />
                <div className={styles.formcontrol}>
                    <button type="submit">Send</button>
                </div>
                <br />
            </form>
        </div>
    );
};

export default AddVolunteer;
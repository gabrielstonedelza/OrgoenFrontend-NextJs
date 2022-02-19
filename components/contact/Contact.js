import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/AddVolunteerForm.module.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
var FormData = require("form-data");

const ContactUs = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    var bodyForm = new FormData();
    bodyForm.append("name", name);
    bodyForm.append("email", email);
    bodyForm.append("phone", phone);
    bodyForm.append("message", message);

    const handleContact = async (e) => {
        e.preventDefault();
        toast.success("Please wait,processing your data")
        const apiUrl = 'http://127.0.0.1:8000/add_to_contacts/'
        axios({
            method: "post",
            url: apiUrl,
            data: bodyForm,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(function (response) {
                router.push('/')
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(`${error.response.data}`);
                }
            });

    };

    return <div>
        <div className={styles.myform}>
            <ToastContainer />
            <div className={styles.formcontainer}>
                <div className={styles.formaps}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1237.4238900487221!2d-88.25066052555648!3d41.56857610837526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e8ca1e0cfc507%3A0x84ed5fe1e4ef511b!2s2606%20Mirage%20Ave%2C%20Plainfield%2C%20IL%2060586%2C%20USA!5e0!3m2!1sen!2sgh!4v1645018352685!5m2!1sen!2sgh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className={styles.forform}>

                    <h3>Get In Touch.</h3>
                    <form onSubmit={handleContact}>
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
                        <div className={styles.formcontrol}>
                            <label htmlFor="message">Message</label>
                            <input
                                required
                                type="text"
                                name="message"
                                id=""
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
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
        </div>
    </div>;
};

export default ContactUs;

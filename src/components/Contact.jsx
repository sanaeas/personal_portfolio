import React, { useState, useRef } from "react";
import Bg from "../images/contact-img.svg";
import emailjs from "@emailjs/browser";

function Contact() {
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs
            .sendForm(
                "service_r9qhxpy",
                "template_vcy23fp",
                form.current,
                "vokDZ_2EC3M5g1460"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus({
                        succes: true,
                        message: "Message sent successfully",
                    });
                    setButtonText("Send");
                },
                (error) => {
                    console.log(error.text);
                    setStatus({
                        succes: false,
                        message:
                            "Something went wrong, please try again later.",
                    });
                }
            );
        document.querySelector(".name_input").value = "";
        document.querySelector(".email_input").value = "";
        document.querySelector(".message_area").value = "";
    };

    return (
        <main>
            <section className="contact">
                <div className="container">
                    <div className="left">
                        <div className="form__wrapper">
                            <div className="contact__section--title">
                                <h2>Contact</h2>
                            </div>
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="contact__form">
                                <div>
                                    <input
                                        className="contact__input name_input"
                                        autoComplete="off"
                                        name="user_name"
                                        type="text"
                                        placeholder="Name"
                                        required
                                    />
                                </div>

                                <div>
                                    <input
                                        className="contact__input email_input"
                                        autoComplete="off"
                                        name="user_email"
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>

                                <div>
                                    <textarea
                                        className="contact__input message_area"
                                        name="message"
                                        autoComplete="off"
                                        placeholder="Message"
                                        required></textarea>
                                </div>

                                <button
                                    type="submit"
                                    value="Send"
                                    className="form__submit">
                                    <span>{buttonText}</span>
                                </button>
                                {status.message && (
                                    <p
                                        className={
                                            status.success === false
                                                ? "danger"
                                                : "success"
                                        }>
                                        {status.message}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                    <div className="right">
                        <div className="image__wrapper">
                            <img src={Bg} alt="" className="img" />
                            <div className="wave-wrap">
                                <svg
                                    className="wave"
                                    viewBox="0 0 783 1536"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        id="wave"
                                        d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                                    />
                                </svg>
                            </div>
                            <svg
                                className="dashed-wave"
                                viewBox="0 0 345 877"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    id="dashed-wave"
                                    d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Contact;

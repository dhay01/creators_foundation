import React, {useEffect, useState} from "react";
import axios from "axios";
import "./contact.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faInstagram, faTelegram} from "@fortawesome/free-brands-svg-icons";

function Contact() {
    const [links, setLinks] = useState({});

    useEffect(() => {
        // Fetch links data from the API
        axios
            .get("https://back.creators-foundation.org/api/utilities.php?operation=utilities")
            .then((response) => {
                setLinks(response.data.utilities.reduce((acc, item) => {
                    acc[item.property] = item.value;
                    return acc;
                }, {}));
            })
            .catch((error) => {
                console.error("Error fetching links data:", error);
            });
    }, []);

    return (
        <div className="contact-container">
            <div className="row">

                <div className="col contact-details">
                    <h2>تواصل معنا</h2>
                    <ul className="contact-ul">
                        <li>
                            <h6>
                                +9647710000000
                                <span>
                                     <FontAwesomeIcon className="icon" icon={faPhone}/>
                                </span>
                            </h6>
                        </li>
                        <li>
                            <h6>
                                <a href={links.telegram}>@mobdion</a>
                                <span>
                                     <FontAwesomeIcon icon={faTelegram} className="icon"/>
                                </span>
                            </h6>

                        </li>
                        <li>
                            <h6>
                                <a
                                    href={links.instagram}> creators_foundation </a>
                                <span>
                                     <FontAwesomeIcon icon={faInstagram} className="icon"/>
                                </span>
                            </h6>
                        </li>
                        <li>

                            <h6>
                                <a
                                    href={links.facebook}> مؤسسة مبدعون للتنمية والفنون </a>
                                <span>
                                     <FontAwesomeIcon icon={faFacebookSquare} className="icon"/>
                                </span>
                            </h6>



                        </li>

                    </ul>

                </div>
                <div className="col">
                    <div className="col-md-6">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26672.791633646808!2d44.31504817284149!3d33.31622838118542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15577e507f7182cf%3A0xecef0f69c81dfb48!2sMansour%2C%20Baghdad!5e0!3m2!1sen!2siq!4v1688383177539!5m2!1sen!2siq"
                                frameBorder="0"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="embed-responsive-item"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>

        </div>
);
}

export default Contact;




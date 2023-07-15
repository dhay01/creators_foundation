import React, { useEffect, useState } from 'react';
import '../footer/footer.css';
import logowhite from '../footer/logowhite.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import axios from "axios";

const Footer = () => {
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
        <div className="footer-container">
            <footer className="text-center text-white">
                <div className="container">
                    <section className="mt-5">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="/contact" className="text-white">اتصل بنا</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="/news" className="text-white">اخر الاخبار</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="/gallery" className="text-white">معرص الصور</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="/about" className="text-white">عن المنظمة</a>
                                </h6>
                            </div>
                        </div>
                    </section>

                    <hr className="my-5" />

                    <section className="mb-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    معاً لبناء مجتمع متميز بإبداعات شبابية والتعاون مع كافة مؤسسات الدولة لدعم ومساندة الشباب في بغداد والمحافظات وكافة الدول العربية والعالم اجمع
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center mb-5">
                        <a href={links.telegram} className="text-white me-4">
                            <FontAwesomeIcon icon={faTelegram} style={{ color: "#ffffff" }} />
                        </a>
                        <a href={links.instagram} className="text-white me-4">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href={links.facebook} className="text-white me-4">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a href="" className="text-white me-4">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    ©2023 Creators foundation for development and fine arts (ngo)
                </div>
            </footer>
        </div>
    );
};

export default Footer;

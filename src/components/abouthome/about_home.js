import React from 'react';
import '../abouthome/about_home.css';
import aboutpicture from '../abouthome/photo_2023-07-16 12.24.57.jpeg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

function Abouthome() {
    return (
        <div className="container about-home">
            <div className="row">
                <div className="col-md-6 my-auto">
                    <h1 className="text-custom-primary font-tertiary">عن المنظمة</h1>
                    <h5 className="text-muted">

                        تسعى المؤسسة إلى رعاية وتحقيق الأهداف الانسانية والغايات العلمية الإبداعية الفنية والثقافية، التي
                        أنشئت من أجلها من خلال جملة من الأهداف المتجددة مع الزمن والتي تحددت ب50% من نشاطاتها للجانب
                        الإنساني المتعلق بشرائح المجتمع منها الايتام وذوي الاحتياجات الخاصة وكبار السن والارامل و50%
                        الأخرى
                        للنشاطات العلمية التنموية والفنية والثقافية وهي كالاتي
                    </h5>
                    <a href="/about">
                        <button className="btn btn-primary mt-3"> <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",marginRight  : 10}} />اقرا المزيد </button>

                    </a>

                </div>
                <div className="col-md-6 my-auto text-center">
                    <img src={aboutpicture} className="img-fluid" alt="mobile screen" />
                </div>
            </div>
        </div>
    );
}

export default Abouthome;

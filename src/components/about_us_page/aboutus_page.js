import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCodeBranch} from "@fortawesome/free-solid-svg-icons";
import "./aboutus_page.css";
import axios from "axios";
import logo from "./logocircle.png"

function AboutUsPage() {

    return (
        <>
            <div className="about-us-container">
                <div className="about-text">
                    <h1>عن المؤسسة</h1>
                    <hr />
                    <h2>شعار المؤسسة</h2>
                    <h6>
                        يتكون شعار المؤسسة الدائري من رمزٍ للاستمرارية والديمومة والشكلين
                        المجردين الأيمن تجريد رمزي لشخص ينحني ويمد يده للكتاب بإعتبار المعرفة
                        هي المنهل الرئيس للثقافة والفن والتنمية متدرج للون الأخضر رمزاً للتنمية
                        والحياة بينما الشكل المجرد من الجهة اليسرى يمثل كلمة الفن تم تصميم
                        الحرف العربي يحتضن الكتاب رمزاً للثقافة والمعرفة التي يستند اليها الفن
                        والتنمية، واتخذت أرضية الشعار اللون الأزرق ليرمز إلى الأهداف النبيلة
                        التي تهدف لها المؤسسة
                    </h6>
                    <img src={logo} className="logo-about" alt="Logo" />
                </div>
                <br/>
                <div className="about-text">
                    <h2>اهداف المؤسسة</h2>
                    <h6>
                        تسعى المؤسسة إلى رعاية وتحقيق الأهداف الانسانية والغايات العلمية الإبداعية الفنية والثقافية، التي
                        أنشئت من أجلها من خلال جملة من الأهداف المتجددة مع الزمن والتي تحددت ب50% من نشاطاتها للجانب
                        الإنساني المتعلق بشرائح المجتمع منها الايتام وذوي الاحتياجات الخاصة وكبار السن والارامل و50%
                        الأخرى
                        للنشاطات العلمية التنموية والفنية والثقافية وهي كالاتي
                    </h6>
                    <br/>
                    <ul>
                        <li>تنشيط الجوانب العلمية والنقدية والمعرفية العامة وتطويرها والارتقاء بها وتوسيع قاعدتها من
                            خلال
                            تنظيم المؤتمرات والمعارض وحلقات بالبحوث والدراسات في التخصصات المذكورة أعلاه.
                        </li>
                        <li>التأكيد على الهوية العراقية للمؤسسة بتقديم المساعدات الإنسانية للعوائل المتعففة والأيتام
                            وكافة
                            أنشطتها الإنسانية والعلمية.
                        </li>
                        <li>تأمين مظلة إبداعية علمية وثقافية تتابع شؤون الأفراد في المجتمع، الإبداعية والمعرفية،
                            وتسويقها،
                            والتعريف بها، على الصعيدين العراقي والعربي والخارجي، وخاصة للمرأة والشباب.
                        </li>
                        <li>تقوية أواصر وروح الصداقة والتعاون بين المؤسسة والمؤسسات المناظرة في كافة أرجاء العالم،
                            وتعميق
                            التواصل الاجتماعي بين المؤسسات وشحن طاقاتها وتطورها في مجالات الابتكار والإبداع.
                        </li>
                        <li>العمل على توفير الظروف الملائمة للمرأة والشباب للنمو والتعبير، في مناخ من الحرية.</li>
                        <li>التعريف بالمبدعين والمبدعات والتربويين والتربويات والباحثين والباحثات في الدول العربية
                            ودعمهم.
                        </li>
                        <li>استلهام وإبراز الجوانب الإنسانية والعلمية والثقافية والقومية والوطنية في العراق والوطن
                            العربي
                            والعالم.
                        </li>
                        <li>التأكيد على دور الإبداع وتمكين المرأة في تطوير قدراتها وإغناء وجودها في حياة المجتمعات
                            والشعوب،
                            وفي التعبير عن طموحاتها وآمالها.
                        </li>
                        <li>
                            تشجيع الدراسات بكافة التخصصات العلمية والفنية ورعايتها، والانفتاح على الثقافة الإنسانية
                            والعلمية
                            في الوطن العربي والعالم بما يتفق مع أهداف المؤسسة بالجانب الإنساني والعلمي.
                        </li>
                        <li>
                            المساهمة في التعريف بالإنتاج المعرفي في البلدان الأجنبية والتعريف بإنتاج هذه البلدان في
                            العالم
                            العربي.
                        </li>
                    </ul>

                </div>

                <div className="about-text">
                    <h2>وسائل تحقيق الأهداف</h2>
                    <h6>
                        لتحقيق اهداف المؤسسة يتم تعزيز الصلات بين المبدعين من خلال المؤسسة ، وبين الهيئات العلمية
                        والفنية
                        والثقافية والأدبية في الوطن العربي والمنظمات المماثلة في سائر بلدان العالم بما يحقق اتصالا
                        وتفاعلا
                        مع ثقافة الشعوب. كذلك من خلال الاتي
                    </h6>
                    <br/>
                    <ul>
                        <li>إصدار مطبوعات محكمة ودراسات ونشرات تكون منبرا تساهم في رفع الذائقة الجمالية والبصرية
                            والعلمية
                            والمعرفية وإثراء المعارف الفنية والثقافة العربية والإنسانية.
                        </li>
                        <li>دعم النشاط الإنساني والعلمي والثقافي والتربوي حول بلدان العرب والعمل على ترويجه وتعزيز حضوره
                        </li>
                        <li>تنظيم المؤتمرات والدورات التدريبية والندوات والورش الفنية لاستكشاف المواهب الجديدة في كافة
                            التخصصات، ورعايتها، وتمكينها من التطور وتبوء مكانتها المناسبة في العالم اجمع .
                        </li>
                        <li>
                            تثقيف المجتمع والعمل على نشر ثقافة حقوق الإنسان للنساء والشباب والأطفال من خلال إقامة
                            الدورات
                            التدريبية والورش والمؤتمرات .
                        </li>
                        <li>
                            تنمية وتعزيز احترام حقوق الإنسان وحقوق المراة وإلغاء التمييز الطائفي والديني والقومي والعرقي
                            وحقوق المرأة والعمل على حمايتها.
                        </li>
                        <li>
                            التواصل والتنسيق والتعاون المشترك مع المنظمات المحلية والدولية والوزارات والهيئات ذات
                            العلاقة
                            والاهداف السامية المشتركة ضمن المعايير المحلية والدولية للنهوض بالواقع الانساني للمجتمعات
                            وتقديم
                            المساعدات و لتحقيق ضمان حق الفرد العراقي .
                        </li>
                        <li>
                            نبذ كافة اعمال العنف والضغط النفسي والتهجير القسري والتعسف ضد المراة وتمكينها، للوصول الى
                            مجتمع
                            سامي متلاحم لكافة اطياف الشعب العراقي.
                        </li>
                        <li>
                            العمل على نشر ثقافة حقوق الانسان العراقي وتقديم المساعدات الإنسانية بكافة اشكالها ونبذ كافة
                            اعمال العنف والارهاب من خلال اقامة برامج والندوات والورش التدريبية والقانونية لعدد كبير من
                            شرائح
                            المجتمع وتثقيفه بمشاركة اساتذة وباحثين في الاستشارات الإنسانية والقانونية والعلمية والثقافية
                            .
                        </li>
                        <li>
                            تقديم الدراسات والبحوث اللازمة لإقامه مشاريع انسانية تخدم حاجات الفرد والمجتمع بما يعود
                            بالفائدة
                            على المجتمع العراقي.
                        </li>
                        <li>
                            -تطوير المؤسسات التعليمية (رياض اطفال –ابتدائية- ثانوية –بكلوريوس ودراسات عليا) والعمل على
                            متابعة واعداد برامج علمية تربوية للنهوض بواقع التعليم في العراق والسعي لإنشاء وتأسيس مؤسسة
                            علمية
                            تربوية رصينة وتطويرها بما ينسجم والتطوير الحاصل في المجال التعليم والتربية.
                        </li>
                        <li>
                            امكانية المشاركة او الدخول في المشاريع الإنسانية الاستثمارية وتقديم الاستشارات العلمية
                            والفنية
                            والهندسية سواء كانت مشاريع جديدة او تطويرية او تنفيذية وفق الاختصاصات والامكانيات العلمية
                            والفنية المتاحة بالمؤسسة.
                        </li>
                        <li>
                            تحديد جائزة سنوية لابرز مبدع ضمن النشاطات التي تقام فضلا عن اقامة مهرجان سنوي يقدم به جوائز
                            للمشاركين المتميزين
                        </li>
                    </ul>
                </div>
                <div className="about-text">
                    <h2>شروط العضوية</h2>
                    <h6>يجب أن تتوفر في طالب الانتساب للعضوية العاملة الشروط التالية
                    </h6>
                    <br/>
                    <ul>
                        <li>ـ أن يكون فنانا أو ناقدا او مثقفا او تربويا او عالما بتخصص من التخصصات التي ذكرت انفا او
                            تخصصات
                            أخرى .
                        </li>
                        <li>أن يؤمن بأهداف المؤسسة ويعلن موافقته على نظامه والتزامه.
                        </li>

                    </ul>
                </div>

                <div className="about-text">
                    <h2>متطلبات الانتساب لعضوية المؤسسة</h2>
                    <br/>
                    <ul>
                        <li>أن يكون العضو عراقي الجنسية أو مقيم في العراق او من جنسيات اخرى .</li>
                        <li>
                            أكمل الثامنة عشر من العمر وكامل الأهلية .
                        </li>
                        <li>أن يقبل بالنظام الداخلي للمنظمة كتابة.</li>
                        <li>ان يكون حسن السيرة والسلوك.</li>
                        <li>غير محكوم بجنحة مخلة بالشرف او جناية غير سياسية.</li>
                        <li>ملئ استمارة الانتماء.</li>

                    </ul>
                </div>

                <div className="about-text">
                    <h2>حقوق الاعضاء</h2>
                    <br/>
                    <ul>
                        <li>الحصول على هوية المؤسسة</li>
                        <li>المشاركة في الفعاليات والمؤتمرات و الندوات داخل وخارج العراق.</li>
                        <li>المشاركة في إبداء الرأي الاقتراح والمناقشة.</li>
                        <li>الاستفادة من التسهيلات والخدمات التي تقدمها المؤسسة لأعضائها.</li>
                        <li>الحصول على مساندة المؤسسة ، في حال تعرضه إلى أي قيود أو مضايقات، متعلقة بالعمل أو بحرية
                            الرأي
                            والتعبير.
                        </li>
                    </ul>
                </div>
                <div className="about-text">
                    <h2>فروع المؤسسة</h2>
                    <br/>
                    <ul>
                        <li>بغداد</li>
                        <li>الموصل ( بإدارة د.احمد نجم شيت</li>
                    </ul>

                </div>
            </div>
        </>


    );
}

export default AboutUsPage;

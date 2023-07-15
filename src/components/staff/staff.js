import React, {useEffect, useState} from "react";
import axios from "axios";
import "./staff.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressCard, faCalendar, faDownload, faUser} from "@fortawesome/free-solid-svg-icons";

function Staff() {
    const [staffMembers, setStaffMembers] = useState([]);

    useEffect(() => {
        // Fetch staff data from the API
        axios
            .get("https://back.creators-foundation.org/api/staff.php")
            .then((response) => {
                setStaffMembers(response.data.staff);
            })
            .catch((error) => {
                console.error("Error fetching staff data:", error);
            });
    }, []);

    const downloadCV = (cvUrl) => {
        // Use the CV URL to download the file
        window.open(cvUrl, "_blank");
    };

    return (
        <div className="staff-container">
            <div className="staff-title">
                <h2>اعضاء المنظمة</h2>
            </div>

            <div className="row">
                {Array.isArray(staffMembers) && staffMembers.length > 0 ? (
                    staffMembers.map((staffMember) => (
                        <div key={staffMember.staff_id} className="col-md-4">
                            <div className="staff-card">
                                <div className="rounded-circle overflow-hidden mx-auto staff-image-container">
                                    {staffMember.image ? (
                                        <img
                                            src={staffMember.image}
                                            alt="Staff Member"
                                            className="staff-image"
                                        />
                                    ) : (
                                        <div className="placeholder-image">No Image</div>
                                    )}
                                </div>
                                <h4>{staffMember.name}</h4>
                                <p> {staffMember.title}
                                    <FontAwesomeIcon className="fontawesomeicon"
                                        icon={faUser}
                                        style={{color: "#9e9e9e"}}
                                    />{" "}

                                </p>
                                <p> {staffMember.year}
                                    <FontAwesomeIcon  className="fontawesomeicon"
                                        icon={faCalendar}
                                        style={{color: "#9e9e9e"}}
                                    />{" "}

                                </p>
                                {staffMember.cv && (
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => downloadCV(staffMember.cv)}
                                    >
                                        تحميل السيرة الذاتية <FontAwesomeIcon icon={faDownload}
                                                                              style={{color: "#ffffff",}}/>
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default Staff;

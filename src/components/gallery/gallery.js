import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./gallery.css"; // Import custom CSS file for styling

function Gallery() {
    const [galleryData, setGalleryData] = useState(null);

    useEffect(() => {
        axios
            .get("https://back.creators-foundation.org/api/gallery.php?operation=gallery")
            .then((response) => {
                setGalleryData(response.data.gallery);
            })
            .catch((error) => {
                console.error(error);
                setGalleryData([]);
            });
    }, []);

    return (
        <div className="gallery-container">
            <h2>معرض الصور</h2>
            {Array.isArray(galleryData) && galleryData.length > 0 ? (
                <div className="gallery-row row">
                    {galleryData.map((gallery) => (
                        <div key={gallery.id} className="col-lg-4 col-md-6 col-sm-12">
                            <div className="album-container">
                                <Link to={`/gallery/${gallery.id}`}>
                                    <div className="album-overlay">
                                        <h5 className="album-title">{gallery.title}</h5>
                                    </div>
                                    <img src={gallery.images[0]?.path} alt={gallery.title} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="preloaded"></div>
            )}
        </div>
    );
}

export default Gallery;

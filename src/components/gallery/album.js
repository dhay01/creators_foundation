import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./album.css";
import ImageGallery from "react-image-gallery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays} from "@fortawesome/free-solid-svg-icons";
import Loader from "../../assets/loader";

function GalleryAlbum() {
    const { galleryId } = useParams();
    const [albumData, setAlbumData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://back.creators-foundation.org/api/gallery.php?operation=gallery&id=${galleryId}`)
            .then((response) => {
                setAlbumData(response.data.gallery);
            })
            .catch((error) => {
                console.error(error);
                setAlbumData([]);
            });
    }, [galleryId]);

    if (albumData.length === 0) {
        return <p className="preloading"> Loading album...</p>;
    }

    const album = albumData.find((album) => album.id === galleryId);

    if (!album) {

        return <p>Album not found</p>;
    }

    const { title, date, images } = album;

    const imageGalleryItems = images.map((image) => ({
        original: image.path,
        thumbnail: image.path,
    }));

    return (
        <div className="galleryalbum-container">
            <h2>{title}</h2>
            <p><FontAwesomeIcon icon={faCalendarDays} style={{color: "#707070",}} />  {date}</p>
            {images && images.length > 0 ? (
                <ImageGallery items={imageGalleryItems} />
            ) : (
                <div className="coming-soon-parent">
                    <Loader />
                </div>
            )}
        </div>
    );
}

export default GalleryAlbum;

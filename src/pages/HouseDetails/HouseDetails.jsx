import "./housedetails.css";

import GuestReviews from "@/components/GuestReviews";
import LoadingSpinner from "@/components/LoadingSpinner";

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePropertyContext } from "@/hooks/usePropertyContext";
import { useReviewsContext } from "@/hooks/useReviewsContext";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import guestImg from "@/assets/hero-guest.jpg";
import HostImg from "@/assets/hero-host.jpg";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
});

const environmentIcons = {
  desierto: "fa-solid fa-mountain-sun",
  montaña: "fa-solid fa-mountain",
  playa: "fa-solid fa-umbrella-beach",
  ciudad: "fa-solid fa-city",
};

const HouseDetails = () => {
  const { propertyData, loading: propertyLoading } = usePropertyContext();
  const {
    reviewsData,
    loading: reviewsLoading,
    setPropertyId,
  } = useReviewsContext();
  const { id } = useParams();
  const property = propertyData.find((property) => property._id === id);

  useEffect(() => {
    if (id) {
      setPropertyId(id);
    }
  }, [id, setPropertyId]);

  if (propertyLoading || reviewsLoading) {
    return <LoadingSpinner />;
  }

  if (!property) {
    return <p>Property not found</p>;
  }

  const {
    location: {
      address,
      city,
      state,
      postalCode,
      country,
      latitude,
      longitude,
    },
    title,
    description,
    pricePerNight,
    bedrooms,
    bathrooms,
    maxGuests,
    environment,
    ratings: { average, count },
    images,
  } = property;

  const position = [latitude, longitude];
  const environmentIcon =
    environmentIcons[environment] || "fa-solid fa-question";

  return (
    <section className="section__housedetails grid">
      <div className="housedetails__info flex">
        <div className="housedetails__img-wrapper">
          <Carousel
            showArrows
            showThumbs
            showStatus={false}
            autoPlay
            infiniteLoop
          >
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Property image ${index + 1}`}
                  className="housedetails__img"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="housedetails__header flex">
          <div className="housedetails__location">
            <h2 className="housedetails__hotel-name font-3">{title}</h2>
            <span className="housedetails__city font-base text-gray">
              {city}, {state}, {country}
            </span>
          </div>
          <div className="housedetails__pricing">
            <span className="housedetails__price font-3 fw-3">
              ${pricePerNight}
            </span>
            <span className="housedetails__price-detail font-sm">
              / por noche
            </span>
          </div>
        </div>
        <ul className="housedetails__perks flex text-secondary">
          <li className="housedetails__perk font-base">
            <i className="fa-solid fa-bed" />
            <span className="housedetails__perk-description font-sm">Casa</span>
          </li>
          <li className="housedetails__perk font-1">
            <i className={environmentIcon} />
            <span className="housedetails__perk-description font-sm capitalize">
              {environment}
            </span>
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-shower" />
            <span className="housedetails__perk-description font-sm">
              {bathrooms} {bathrooms === 1 ? "Baño" : "Baños"}
            </span>
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-users" />
            <span className="housedetails__perk-description font-sm">
              {maxGuests} {maxGuests === 1 ? "Persona" : "Personas"}
            </span>
          </li>
        </ul>
        <div className="housedetails__description grid">
          <div className="housedetails__text flex font-base">
            <p>{description}</p>
            <div className="housedetails__cta flex">
              <button className="housedetails__btn bg-accent text-white fw-3">
                Reservar
              </button>
              <button className="housedetails__btn flex">
                <i className="fa-regular fa-heart text-accent" />
                Agrega a tus favoritos
              </button>
            </div>
          </div>
          <div className="housedetails__map-wrapper">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "200px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>{title}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <aside className="housedetails__reviews flex">
        <h2 className="housedetails__reviews-title font-2">Reseñas</h2>
        {reviewsData.length === 0 ? (
          <p>No reviews available</p>
        ) : (
          reviewsData.map((review) => (
            <GuestReviews key={review._id} review={review} />
          ))
        )}
      </aside>
    </section>
  );
};

export default HouseDetails;

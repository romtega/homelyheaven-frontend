import { useParams } from "react-router-dom";
import { useHousingContext } from "@/hooks/useHousingContext";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import GuestTestimonial from "@/components/GuestTestimonial";
import guestImg from "@/assets/hero-guest.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar estilos del carrusel
import { Carousel } from "react-responsive-carousel";
import "./housedetails.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-shadow.png",
});

const HouseDetails = () => {
  const { housing, loading } = useHousingContext();
  const { id } = useParams();
  const house = housing.find((house) => house._id === id);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!house) {
    return <p>House not found</p>;
  }

  const position = [house.address.latitude, house.address.longitude];

  let typeIcon;
  if (house.type === "Casa") {
    typeIcon = <i className="fa-solid fa-house" />;
  } else if (house.type === "Villa") {
    typeIcon = <i className="fa-solid fa-mountain-city" />;
  } else if (house.type === "Apartamento") {
    typeIcon = <i className="fa-solid fa-building" />;
  } else if (house.type === "Cabaña") {
    typeIcon = <i className="fa-solid fa-mountain" />;
  }

  let placeIcon;
  if (house.place === "desierto") {
    placeIcon = <i className="fa-solid fa-sun" />;
  } else if (house.place === "playa") {
    placeIcon = <i className="fa-solid fa-umbrella-beach" />;
  } else if (house.place === "ciudad") {
    placeIcon = <i className="fa-solid fa-city" />;
  } else if (house.place === "montaña") {
    placeIcon = <i className="fa-solid fa-mountain-sun" />;
  } else if (house.place === "villa") {
    placeIcon = <i className="fa-solid fa-mountain" />;
  }

  const renderImages = () => {
    if (house.imgUrl.length === 0) {
      return (
        <div>
          <img
            src={guestImg}
            alt="Imagen de sitio"
            className="housedetails__img-content"
          />
        </div>
      );
    }
    return house.imgUrl.map((url, index) => (
      <div key={index}>
        <img
          src={url}
          alt={`Imagen de sitio ${index + 1}`}
          className="housedetails__img-content"
        />
      </div>
    ));
  };

  return (
    <section className="section__housedetails grid">
      <div className="housedetails__info flex">
        <div className="housedetails__img-wrapper">
          <Carousel showThumbs={false} dynamicHeight={true} infiniteLoop={true}>
            {renderImages()}
          </Carousel>
        </div>
        <div className="housedetails__header flex">
          <div className="housedetails__location">
            <h2 className="housedetails__hotel-name font-3">{house.name}</h2>
            <span className="housedetails__city font-base text-gray">
              {house.address.state}, {house.address.country}
            </span>
          </div>
          <div className="housedetails__pricing">
            <span className="housedetails__price font-3 fw-3">
              $ {house.price}{" "}
            </span>
            <span className="housedetails__price-detail font-sm">
              por noche
            </span>
          </div>
        </div>
        <ul className="housedetails__perks flex text-secondary">
          <li className="housedetails__perk font-1">
            {typeIcon}
            <span className="housedetails__perk-description font-sm">
              {house.type}
            </span>
          </li>
          <li className="housedetails__perk font-1">
            {placeIcon}
            <span className="housedetails__perk-description font-sm capitalize">
              {house.place}
            </span>
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-shower" />
            <span className="housedetails__perk-description font-sm">
              {house.bathrooms} Baños
            </span>
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-bed" />
            <span className="housedetails__perk-description font-sm">
              {house.bedrooms} Personas
            </span>
          </li>
        </ul>
        <div className="housedetails__description grid">
          <div className="housedetails__text flex font-base">
            <p>{house.description}</p>
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
              zoom={10}
              style={{ height: "200px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>{house.name}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <aside className="housedetails__reviews flex">
        <h2 className="housedetails__reviews-title font-2">Reseñas</h2>
        <GuestTestimonial />
        <GuestTestimonial />
        <GuestTestimonial />
        <GuestTestimonial />
      </aside>
    </section>
  );
};

export default HouseDetails;

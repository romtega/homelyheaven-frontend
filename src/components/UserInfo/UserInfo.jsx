import "./userinfo.css";
import UserImg from "@/assets/user.png";
import LoadingSpinner from "@/components/LoadingSpinner";

import { useState } from "react";
import { useUserContext } from "@/hooks/useUserContext";

const UserInfo = ({ loading, user }) => {
  const { updateUser } = useUserContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);

  if (loading) return <LoadingSpinner />;

  const { username, role, firstName, lastName, email, phoneNumber, avatar } =
    user || {};

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload");
      return;
    }

    try {
      await updateUser(user._id, file);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating user avatar", error);
    }
  };

  return (
    <div className="user__details flex font-lg">
      {isModalOpen && (
        <div className="modal">
          <h2>Actualizar Imagen de Perfil</h2>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          <button onClick={handleUpload}>Subir</button>
          <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
        </div>
      )}
      <button className="user__edit-icon" onClick={() => setIsModalOpen(true)}>
        <i className="fa-regular fa-pen-to-square" />
      </button>
      <div className="user__header flex">
        <div className="user__img-wrapper grid">
          <img src={avatar || UserImg} alt="User" />
        </div>
        <div>
          <p className="user__username font-2">{username}</p>
          <span className="user__role font-base fw-4 text-primary">{role}</span>
        </div>
      </div>
      <div className="user__summary grid">
        <div className="user__item">
          <span className="user__label font-sm text-gray">Nombre</span>
          <p className="user__info">{firstName}</p>
        </div>
        <div className="user__item">
          <span className="user__label font-sm text-gray">Apellido</span>
          <p className="user__info">{lastName}</p>
        </div>
        <div className="user__item">
          <span className="user__label font-sm text-gray">Email</span>
          <p className="user__info">{email}</p>
        </div>
        <div className="user__item">
          <span className="user__label font-sm text-gray">Telefono</span>
          <p className="user__info">{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

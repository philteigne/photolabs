import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';


const PhotoDetailsModal = (props) => {

  const {modalControls} = props

  const photo = modalControls.modalDisplayState.photo

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => modalControls.toggleModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img
        src={photo.urls.full}
        alt="Selected photograph"
        className="photo-list__image"
        onClick={() => {
          modalControls.toggleModal(true, photo);
          }
        }
        ></img>
        <div className="photo-list__user-details">
          <img
          src={photo.user.profile}
          alt="Photographer profile image"
          className="photo-list__user-profile"
          ></img>
          <div className="photo-list__user-info">
            <p>{photo.user.name}</p>
            <p className="photo-list__user-location">{photo.location.city}, {photo.location.country}</p>
          </div>
        </div>
    </div>
  )
};

export default PhotoDetailsModal;

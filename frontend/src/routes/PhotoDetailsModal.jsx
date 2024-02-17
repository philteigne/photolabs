import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {

  const {modalControls, photos, favControls} = props

  const photo = modalControls.modalDisplayState.photo

  return (
    <div className="photo-details-modal">
    
      <button className="photo-details-modal__close-button" onClick={() => modalControls.toggleModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div>
          <PhotoFavButton id={photo.id} favControls={favControls}/>
          <img
          src={photo.urls.full}
          alt="Selected photograph"
          className="photo-details-modal__image"
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
        
        <span className="photo-details-modal__header">Similar Photos</span>
        <div className="photo-details-modal__images">
        <PhotoList photos={photos} favControls={favControls} modalControls={modalControls}/> 
        </div>
      </div>
        
    </div>
  )
};

export default PhotoDetailsModal;

import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';


const PhotoDetailsModal = (props) => {

  const {closePhotoDetailsModal, updateFavPhotoList, selectedPhoto} = props

  const similarPhotos = Object.values(selectedPhoto.similar_photos)

  return (
    <div className="photo-details-modal">
    
      <button className="photo-details-modal__close-button" onClick={() => closePhotoDetailsModal.onClosePhotoDetailsModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <div>
          <PhotoFavButton id={selectedPhoto.id} updateFavPhotoList={updateFavPhotoList}/>
          <img
          src={selectedPhoto.urls.full}
          alt="Selected photograph"
          className="photo-details-modal__image"
          ></img> 
          <div className="photo-list__user-details">
            <img
            src={selectedPhoto.user.profile}
            alt="Photographer profile image"
            className="photo-list__user-profile"
            ></img>
            <div className="photo-list__user-info">
              <p>{selectedPhoto.user.name}</p>
              <p className="photo-list__user-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
            </div>
          </div>
        </div>
        
        <span className="photo-details-modal__header">Similar Photos</span>
        <div className="photo-details-modal__images">
        <PhotoList photos={similarPhotos} updateFavPhotoList={updateFavPhotoList}/> 
        </div>
      </div>
        
    </div>
  )
};

export default PhotoDetailsModal;

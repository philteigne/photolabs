import React from "react";
import '../styles/PostPhotoModal.scss'
import closeSymbol from '../assets/closeSymbol.svg'
import closeSymbolDark from '../assets/closeSymbolDark.svg'

const PostPhotoModal = ({dispatch, dark}) => {

  const submitPhotoData = new FormData()

  return(
    <div className={`post-photo-modal post-photo-modal-color${dark}`}>

      <button className={`photo-details-modal__close-button photo-details-modal__close-button-color${dark}`} onClick={() => dispatch({type: "CLOSE_SUBMIT_PHOTO_MODAL"})}>
        <img src={dark ? closeSymbolDark : closeSymbol} alt="close symbol" />
      </button>

      <form>
        <div>
          <h1 className={`post-photo-modal__section-header post-photo-modal__font-color${dark}`}>Currently Logged In As</h1>
          <div className="post-photo-modal__user-details">
            <img
            src='http://localhost:8001/images/profile-1.jpg'
            alt="Photographer profile image"
            className="post-photo-modal__user-profile"
            ></img>
            <div className="post-photo-modal__user-info">
              <p className={`post-photo-modal__font-color${dark}`}>jdoe</p>
              <p className={`post-photo-modal__font-color${dark}`}>John Doe</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className={`post-photo-modal__section-header post-photo-modal__font-color${dark}`}>Location Information</h1>
          <input
            name="cityInput"
            placeholder="City"
            onChange={(e) => submitPhotoData.set('city', e.target.value)}
          />
          <input 
            name="countryInput"
            placeholder="Country"
            onChange={(e) => submitPhotoData.set('country', e.target.value)}
          />
        </div>
        <div>
          <h1 className={`post-photo-modal__section-header post-photo-modal__font-color${dark}`}>Photo Submission</h1>
          <input
            name="photoFile"
            type="file"
            accept="image/png, image/jpeg image/jpg"
            onChange={(e) => {
              submitPhotoData.set('file', e.target.files[0])
              console.log("FileData Object", submitPhotoData.get('file'))
            }
            }
            />
        </div>
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          fetch(`http://localhost:8001/api/submit-photo`, {
            method: 'POST',
            body: submitPhotoData, 
          })
          .then((res) => res.json())
          .then((data) => dispatch({type:'SUBMIT_PHOTO', payload: data}))  
          .catch((err) => console.log("Error: ", err))
          }
        }>Submit</button>
      </form>
    </div>
  )
}

export default PostPhotoModal;
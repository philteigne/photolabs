import React from "react";
import '../styles/PostPhotoModal.scss'
import closeSymbol from '../assets/closeSymbol.svg'
import closeSymbolDark from '../assets/closeSymbolDark.svg'

const reader = new FileReader();

const PostPhotoModal = ({dispatch, dark}) => {

  const submitPhotoData = new FormData()


  return(
    <div className={`post-photo-modal post-photo-modal-color${dark}`}>

      <button className={`photo-details-modal__close-button photo-details-modal__close-button-color${dark}`} onClick={() => dispatch({type: "CLOSE_SUBMIT_PHOTO_MODAL"})}>
        <img src={dark ? closeSymbolDark : closeSymbol} alt="close symbol" />
      </button>

      <form>
        <div>
          <h1 className="post-photo-modal__section-header">Name & User Information</h1>
          <input
            name="nameInput"
            placeholder="Full Name"
            onChange={(e) => submitPhotoData.set('name', e.target.value)}
          />
          <input
            name="usernameInput"
            placeholder="Username"
            onChange={(e) => submitPhotoData.set('username', e.target.value)}
          />
        </div>
        <div>
          <h1 className="post-photo-modal__section-header">Location Information</h1>
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
          <h1 className="post-photo-modal__section-header">Photo Submission</h1>
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
          // dispatch({ type: "SUBMIT_PHOTO", payload: submitPhotoObject})
        }}>Submit</button>
      </form>
    </div>
  )
}

export default PostPhotoModal;
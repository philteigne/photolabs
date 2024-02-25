import React from "react";
import '../styles/PostPhotoModal.scss'
import closeSymbol from '../assets/closeSymbol.svg'
import closeSymbolDark from '../assets/closeSymbolDark.svg'

const PostPhotoModal = ({dispatch, dark}) => {

  const submitPhotoObject = {
    urls: {},
    user: {
      profile: 'http://localhost:8001/images/profile-1.jpg'
    },
    location: {},
    similar_photos: [
      {"id":52, "urls": {"full":"http://localhost:8001/images/fashion-2-full.jpg","regular":"http://localhost:8001/images/fashion-2-regular.jpg"},"user":{"username":"awond","name":"Alice Wonderland","profile":"http://localhost:8001/images/profile-2.jpg"},"location":{"city":"Vancouver","country":"Canada"}},
      {"id":53,"urls":{"full":"http://localhost:8001/images/fashion-3-full.jpg","regular":"http://localhost:8001/images/fashion-3-regular.jpg"},"user":{"username":"sitad","name":"Sita Dennis","profile":"http://localhost:8001/images/profile-3.jpg"},"location":{"city":"Calgary","country":"Canada"}},
      {"id":54,"urls":{"full":"http://localhost:8001/images/fashion-4-full.jpg","regular":"http://localhost:8001/images/fashion-4-regular.jpg"},"user":{"username":"matte","name":"Sasha Mateo","profile":"http://localhost:8001/images/profile-4.jpg"},"location":{"city":"Victoria","country":"Canada"}},
      {"id":55,"urls":{"full":"http://localhost:8001/images/fashion-5-full.jpg","regular":"http://localhost:8001/images/fashion-5-regular.jpg"},"user":{"username":"anita","name":"Anita Austi","profile":"http://localhost:8001/images/profile-5.jpg"},"location":{"city":"Ottawa","country":"Canada"}},
      {"id":56,"urls":{"full":"http://localhost:8001/images/fashion-6-full.jpg","regular":"http://localhost:8001/images/fashion-6-regular.jpg"},"user":{"username":"lsouza","name":"Lukas Souza","profile":"http://localhost:8001/images/profile-6.jpg"},"location":{"city":"Montreal","country":"Canada"}},
      {"id":57,"urls":{"full":"http://localhost:8001/images/fashion-7-full.jpg","regular":"http://localhost:8001/images/fashion-7-regular.jpg"},"user":{"username":"josea","name":"Jose Alejandro","profile":"http://localhost:8001/images/profile-7.jpg"},"location":{"city":"Toronto","country":"Canada"}},
      {"id":58,"urls":{"full":"http://localhost:8001/images/fashion-8-full.jpg","regular":"http://localhost:8001/images/fashion-8-regular.jpg"},"user":{"username":"jdwayne","name":"Dwayne Jacob","profile":"http://localhost:8001/images/profile-8.jpg"},"location":{"city":"Vancouver","country":"Canada"}},
      {"id":59,"urls":{"full":"http://localhost:8001/images/fashion-9-full.jpg","regular":"http://localhost:8001/images/fashion-9-regular.jpg"},"user":{"username":"saeng","name":"Allison Saeng","profile":"http://localhost:8001/images/profile-9.jpg"},"location":{"city":"Calgary","country":"Canada"}}
    ]
  }

  return(
    <div className={`post-photo-modal post-photo-modal-color${dark}`}>

      <button className={`photo-details-modal__close-button photo-details-modal__close-button-color${dark}`} onClick={() => dispatch({type: "CLOSE_MODAL"})}>
        <img src={dark ? closeSymbolDark : closeSymbol} alt="close symbol" />
      </button>

      <form>
        <div>
          <h1 className="post-photo-modal__section-header">Name & User Information</h1>
          <input
            name="nameInput"
            placeholder="Full Name"
            onChange={(e) => submitPhotoObject.user.name = e.target.value}
          />
          <input
            name="usernameInput"
            placeholder="Username"
            onChange={(e) => submitPhotoObject.user.username = e.target.value}
          />
        </div>
        <div>
          <h1 className="post-photo-modal__section-header">Location Information</h1>
          <input
            name="cityInput"
            placeholder="City"
            onChange={(e) => submitPhotoObject.location.city = e.target.value}
          />
          <input 
            name="countryInput"
            placeholder="Country"
            onChange={(e) => submitPhotoObject.location.country = e.target.value}
          />
        </div>
        <div>
          <h1 className="post-photo-modal__section-header">Photo Submission</h1>
          <input
            name="linkToPhoto"
            placeholder="http://..."
            onChange={(e) => submitPhotoObject.urls.full = e.target.value}
            />
        </div>
        <button type="submit" onClick={(e) => {
          e.preventDefault();
          console.log(submitPhotoObject);
          dispatch({ type: "SUBMIT_PHOTO", payload: submitPhotoObject})
        }}>Submit</button>
      </form>
    </div>
  )
}

export default PostPhotoModal;
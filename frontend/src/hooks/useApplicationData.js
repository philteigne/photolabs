import {useEffect} from 'react';

export const INITIAL_STATE = {
  modalDisplayState: false,
  selectedPhoto: {},
  favPhotoList: [],
  photoData: [],
  topicData: []
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
}

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favPhotoList: [...state.favPhotoList, action.payload],
      }
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotoList: state.favPhotoList.filter(photo => photo != action.payload),
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modalDisplayState: true,
        selectedPhoto: action.payload,
      }
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        modalDisplayState: false,
      }
    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  
  }
  
export function fetcher(state, action) {
  useEffect(() => {
    console.log("photos", photos)
  })
}


import {useReducer, useEffect} from 'react';

export const INITIAL_STATE = {
  modalDisplayState: false,
  postPhotoModalDisplayState: false,
  photoSubmissionState: {},
  selectedPhoto: {},
  favPhotoList: [],
  photoData: [],
  topicData: [],
  selectedTopic: "",
  dark: ""
}

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SELECT_PHOTO: "SELECT_PHOTO",
  CLOSE_PHOTO_MODAL: "CLOSE_PHOTO_MODAL",
  CLOSE_SUBMIT_PHOTO_MODAL: "CLOSE_SUBMIT_PHOTO_MODAL",
  OPEN_SUBMIT_PHOTO_MODAL: "OPEN_SUBMIT_PHOTO_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC",
  SET_DARK_MODE_ON: "SET_DARK_MODE_ON",
  SET_DARK_MODE_OFF: "SET_DARK_MODE_OFF",
  SUBMIT_PHOTO: "SUBMIT_PHOTO"
}

export const API_CALL_URL = "http://localhost:8001/api/"

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
        favPhotoList: state.favPhotoList.filter(photo => photo !== action.payload),
      }
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        modalDisplayState: true,
        selectedPhoto: action.payload,
      }
    case ACTIONS.CLOSE_PHOTO_MODAL:
      return {
        ...state,
        modalDisplayState: false,
      }
    case ACTIONS.CLOSE_SUBMIT_PHOTO_MODAL:
      return {
        ...state,
        postPhotoModalDisplayState: false,
      }
    case ACTIONS.OPEN_SUBMIT_PHOTO_MODAL:
      return {
        ...state,
        postPhotoModalDisplayState: true,
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
    case ACTIONS.GET_PHOTOS_BY_TOPIC:
      return {
        ...state,
        photoData: action.payload
      }
    case ACTIONS.SET_DARK_MODE_ON:
      return {
        ...state,
        dark: "-dark"
      }
    case ACTIONS.SET_DARK_MODE_OFF:
      return {
        ...state,
        dark: ""
      }
    case ACTIONS.SUBMIT_PHOTO:
      return{
        ...state,
        postPhotoModalDisplayState: false,
        photoSubmissionState: action.payload
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
  
  }

export function useApplicationData() {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  // state contents:
  // modalDisplayState, selectedPhoto, favPhotoList, photoData, topicData, selectedTopic

  // fetch photos from backend
  useEffect(() => {
    fetch(`${API_CALL_URL}photos`)
    .then((res) => res.json())
    .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
  }, [state.photoSubmissionState]);
  
  // fetch topics from backend
  useEffect(() => {
    fetch(`${API_CALL_URL}topics/`)
    .then((res) => res.json())
    .then(data => dispatch({type:ACTIONS.SET_TOPIC_DATA, payload: data}))
  }, []);

  // scroll to modal
  useEffect(() => {
    window.scrollTo({
      top: 300,
      left: 0,
      behavior: "smooth"
    })

    if (state.modalState) {
      document.querySelector('.photo-details-modal').scrollTop = 0
    }
  }, [state.modalDisplayState])

  return(
    {
      state,
      dispatch
    }
  )
}
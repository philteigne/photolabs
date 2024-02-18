export const INITIAL_STATE = {
  modalDisplayState: false,
  selectedPhoto: {},
  favPhotoList: [],
}

export function reducer(state, action) {
  console.log('action', action)
  switch (action.type) {
    case "FAV_PHOTO_ADDED":
      return {
        ...state,
        favPhotoList: [...state.favPhotoList, action.payload],
      }
    case "FAV_PHOTO_REMOVED":
      return {
        ...state,
        favPhotoList: state.favPhotoList.filter(photo => photo != action.payload),
      }
    case "SELECT_PHOTO":
      return {
        ...state,
        modalDisplayState: true,
        selectedPhoto: action.payload,
      }
    case "CLOSE_MODAL":
      return {
        ...state,
        modalDisplayState: false,
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
    }
}


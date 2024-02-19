import {React, useReducer, useEffect} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { reducer, INITIAL_STATE } from 'hooks/useApplicationData';

const API_CALL_URL = "http://localhost:8001/api/"

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  
  useEffect(() => {
    fetch(`${API_CALL_URL}photos`)
    .then((res) => res.json())
    .then(data => dispatch({type:"SET_PHOTO_DATA", payload: data}))
  }, [])


  useEffect(() => {
    fetch(`${API_CALL_URL}topics/`)
    .then((res) => res.json())
    .then(data => dispatch({type:"SET_TOPIC_DATA", payload: data}))
  }, [])


  return(
  <div className="App">
    <HomeRoute
      state={state}
      dispatch={dispatch}
    />
    {state.modalDisplayState && <PhotoDetailsModal
                            state={state}
                            dispatch={dispatch}
                          />}
  </div>
  )
}

export default App;

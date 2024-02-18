import {React, useReducer} from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import { reducer, INITIAL_STATE } from 'hooks/useApplicationData';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  // console.log(!state.modalDisplayState == false)

  return(
  <div className="App">
    <HomeRoute
      photos={photos}
      topics={topics}
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

import {React} from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { photos, topics, state, dispatch } = props


  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favPhotoList={state.favPhotoList}/>
      <PhotoList
        photos={photos}
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default HomeRoute;

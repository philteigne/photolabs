import {React} from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {

  const { state, dispatch } = props


  return (
    <div className="home-route">
      <TopNavigationBar topics={state.topicData} favPhotoList={state.favPhotoList} dispatch={dispatch}/>
      <PhotoList
        state={state}
        dispatch={dispatch}
      />
    </div>
  );
};

export default HomeRoute;

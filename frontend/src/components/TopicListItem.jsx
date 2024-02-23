import {React} from "react";

import "../styles/TopicListItem.scss";

import { API_CALL_URL } from "App";

const TopicListItem = ({ topic, dispatch, dark }) => {

  return (
    <div className={`topic-list__item topic-list__item-color${dark}`}>
      <span onClick={() => {
          fetch(`${API_CALL_URL}topics/photos/${topic.id}/`)
          .then((res) => res.json())
          .then(data => dispatch({type: "GET_PHOTOS_BY_TOPIC", payload: data}))
      }
      }>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

import {React, useEffect} from "react";

import "../styles/TopicListItem.scss";

import { API_CALL_URL } from "App";

const TopicListItem = ({ topic, dispatch }) => {

  return (
    <div className="topic-list__item">
      <h3 onClick={() => {
          fetch(`${API_CALL_URL}topics/photos/${topic.id}/`)
          .then((res) => res.json())
          .then(data => dispatch({type: "GET_PHOTOS_BY_TOPIC", payload: data}))
      }
      }>{topic.title}</h3>
    </div>
  );
};

export default TopicListItem;

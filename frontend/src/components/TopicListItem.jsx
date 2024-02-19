import {React, useEffect} from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {

  const {topic, dispatch} = props
  const API_CALL_URL = "http://localhost:8001/api/"

  return (
    <div className="topic-list__item">
      <span onClick={() => {
          fetch(`${API_CALL_URL}topics/photos/${topic.id}/`)
          .then((res) => res.json())
          .then(data => dispatch({type:"GET_PHOTOS_BY_TOPIC", payload: data}))
      }
      }>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;

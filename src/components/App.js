import React, { useState } from "react";
import videoData from "../data/video.js";

function App() {
  console.log("Here's your data:", videoData);
  const [video, setVideo] = useState(videoData);
  const [hideComments, setHideComments] = useState(false);

  const handleThumbsUp = () => {
    let videoObj = { ...video };
    ++videoObj.upvotes;
    setVideo(videoObj);
  };

  const handleThumbsDown = () => {
    let videoObj = { ...video };
    --videoObj.downvotes;
    setVideo(videoObj);
  };

  const handleHideComments = () => {
    setHideComments(!hideComments);
  };

  const displayComments = hideComments
    ? ""
    : video.comments.map((comment) => {
        return (
          <div>
            <p className="comment-user">{comment.user}</p>
            <p>{comment.comment}</p>
          </div>
        );
      });

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h2>{video.title}</h2>
      <p>{`${video.views} Views | Uploaded ${video.createdAt}`}</p>
      <button onClick={handleThumbsUp}> 👍 {video.upvotes} </button>
      <button onClick={handleThumbsDown}> 👎 {video.downvotes}</button>
      <br />
      <br />

      <button onClick={handleHideComments}>
        {hideComments ? "Show" : "Hide"} Comments
      </button>
      <hr />
      <p className="comment-total">{`${video.comments.length}`} Comments</p>

      {displayComments}
    </div>
  );
}

export default App;

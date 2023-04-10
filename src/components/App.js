import { useState } from "react";
import videoData from "../data/video.js";
import { Comments } from "./Comments.js";

import { Video } from "./Video.js";
function App() {
  const [video, setVideo] = useState(videoData); // video is an object
  const [hideComments, setHideComments] = useState(false);

  const increaseUpvotes = () => {
    const newVideo = { ...video };
    ++newVideo.upvotes;
    setVideo(newVideo);
  };

  const increaseDownvotes = () => {
    const newVideo = { ...video };
    ++newVideo.downvotes;
    setVideo(newVideo);
  };

  return (
    <div className="App">
      <Video
        video={video}
        handleUpvotes={increaseUpvotes}
        handleDownvotes={increaseDownvotes}
      />
      <button onClick={() => setHideComments(!hideComments)}>
        {hideComments ? "Show" : "Hide"} Comments
      </button>
      <hr></hr>
      {hideComments ? "" : <Comments comments={video.comments} />}
    </div>
  );
}

export default App;

/*
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
*/

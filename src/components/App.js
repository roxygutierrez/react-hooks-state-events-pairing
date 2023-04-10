import { useState } from "react";
import videoData from "../data/video.js";
import VideoContainer from "./VideoContainer.js";
import CommentContainer from "./CommentContainer.js";

function App() {
  const [video, setVideo] = useState(videoData);

  const handleUpVotes = () => {
    const newVideo = { ...video };
    ++newVideo.upvotes;
    setVideo(newVideo);
  };

  const handleDownVotes = () => {
    const newVideo = { ...video };
    ++newVideo.downvotes;
    setVideo(newVideo);
  };

  return (
    <div className="App">
      <VideoContainer
        video={video}
        handleUpVotes={handleUpVotes}
        handleDownVotes={handleDownVotes}
      />
      <br />
      <CommentContainer video={video} />
    </div>
  );
}

export default App;

import React from "react";

const VideoContainer = ({ video, handleUpVotes, handleDownVotes }) => {
  const { id, title, embedUrl, views, createdAt, upvotes, downvotes } = video;

  const handleUpVoteClick = () => {
    handleUpVotes();
  };

  const handleDownVoteClick = () => {
    handleDownVotes();
  };

  return (
    <div>
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{title}</h1>
      <p>
        {views} Views | Uploaded {createdAt}
      </p>
      <div classname="buttons">
        <button onClick={handleUpVoteClick}>{upvotes}👍🏻</button>
        <button onClick={handleDownVoteClick}>{downvotes}👎🏻</button>
      </div>
    </div>
  );
};

export default VideoContainer;

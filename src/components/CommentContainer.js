import React, { useState } from "react";

const CommentContainer = ({ video }) => {
  const [hideComments, setHideComments] = useState(false);

  const renderComments = video.comments.map((comment) => {
    return (
      <div>
        <h4>{comment.user}</h4>
        <p>{comment.comment}</p>
      </div>
    );
  });

  const handleHideClick = () => {
    setHideComments(!hideComments);
  };

  return (
    <div>
      <button onClick={handleHideClick}>Hide Comments</button>
      <hr></hr>
      <h3>{video.comments.length} Comments</h3>

      {hideComments ? (
        ""
      ) : (
        <div className="comment-container">{renderComments}</div>
      )}
    </div>
  );
};

export default CommentContainer;

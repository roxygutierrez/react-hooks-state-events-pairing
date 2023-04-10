export const Video = ({ video, handleUpvotes, handleDownvotes }) => {
  let { title, embedUrl, views, createdAt, upvotes, downvotes } = video;
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
        {views} | Uploaded {createdAt}
      </p>
      <p>
        <button onClick={handleUpvotes}>{upvotes} 👍🏻</button>
        <button onClick={handleDownvotes}>{downvotes} 👎🏻</button>
      </p>
    </div>
  );
};

import "./share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
          <input
            placeholder="What's in your mind Developer?"
            className="shareInput"
          />
        </div>
        <hr className="Hr" />
        <div className="shareButtom">
          <div className="shareOptions">
            <div className="shareOption">
              <span className="shareOptionText">Photo or Video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;

import "./comment.css";
import { useUserContext } from "../../context/userContext";
import { useEffect } from "react";
export default function Comment(post) {
  const { userState, getAllUsers } = useUserContext();
  const { comments, username, likes, content } = post;

  const getAuthorImg = (username) => {
    const author = userState.allUsers.find(
      (user) => user.username === username
    );
    return author.img;
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  if (comments === undefined) {
    return <div></div>;
  }
  return (
    <div className="comment-container">
      <div id="postText">
        <div className="profile-photo">
          <img src={getAuthorImg(username)} alt="profile" />
        </div>
        <div className="post-content">
          <div>
            <b id="username">{username}</b>&nbsp;
            <span id="post-caption">{content}</span>{" "}
          </div>
        </div>
      </div>
      <div className="division">
        <hr></hr>
      </div>
      <div className="comment-section">
        {comments.map(({ comment, username }) => {
          return (
            <div id="postText">
              <div className="profile-photo">
                <img src={getAuthorImg(username)} />
              </div>
              <div className="post-content">
                <div>
                  <b id="username">{username}</b>&nbsp;
                  <span id="post-comment">{comment}</span>{" "}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

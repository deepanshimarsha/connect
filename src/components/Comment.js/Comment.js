import "./comment.css";
import { useUserContext } from "../../context/userContext";
import { useEffect } from "react";
import { usePostContext } from "../../context/postContext";
export default function Comment({ post, edit, setEdit }) {
  const { userState, getAllUsers } = useUserContext();
  const { editPost, postState, postDispatch } = usePostContext();
  const { comments, username, likes, content, _id } = post;

  const getAuthorImg = (username) => {
    const author = userState.allUsers.find(
      (user) => user.username === username
    );
    return author.img;
  };
  const handleEditPost = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      editPost(_id);
      postDispatch({ type: "EDIT_POST", data: "" });
      setEdit(false);
    }
  };
  useEffect(() => {
    getAllUsers();
    postDispatch({ type: "EDIT_POST", data: content });
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
            <span id="post-caption">
              {edit ? (
                <input
                  className="edit-caption"
                  type="text"
                  value={postState.editPost.caption}
                  onChange={(e) => {
                    postDispatch({ type: "EDIT_POST", data: e.target.value });
                  }}
                  onKeyDown={(e) => handleEditPost(e)}
                />
              ) : (
                content
              )}
            </span>{" "}
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

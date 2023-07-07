import "./comment.css";
import { useUserContext } from "../../context/userContext";
import { useEffect } from "react";
import { usePostContext } from "../../context/postContext";
import { NavLink } from "react-router-dom";
export default function Comment({ post, edit, setEdit, commentList }) {
  const { userState, getAllUsers, getUser } = useUserContext();
  const { editPost, postState, postDispatch } = usePostContext();
  const { comments, username, content, _id } = post;

  const getAuthorImg = (username) => {
    const author = userState.allUsers.find(
      (user) => user.username === username
    );
    return author.img;
  };
  const getAuthorId = (username) => {
    const author = userState.allUsers.find(
      (user) => user.username === username
    );
    return author._id;
  };
  const handleEditPost = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      postDispatch({
        type: "EDIT_PROFILE_POST",
        postId: _id,
        caption: e.target.value,
      });
      editPost(_id);
      postDispatch({ type: "EDIT_POST", data: "" });
      setEdit(false);
    }
  };

  useEffect(() => {
    getAllUsers();
    postDispatch({ type: "EDIT_POST", data: content });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
            <span style={{ fontWeight: "600" }} id="username">
              {localStorage.getItem("username") === username ? (
                <NavLink to="/profile" style={{ color: "black" }}>
                  {" "}
                  {username}
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => {
                    getUser(
                      userState.allUsers.find(
                        (user) => user.username === username
                      )._id
                    );
                  }}
                  to={`/profile/${username}`}
                  style={{ color: "black" }}
                >
                  {" "}
                  {username}
                </NavLink>
              )}
            </span>
            &nbsp;
            <span id="post-caption">
              {edit ? (
                <>
                  <input
                    className="edit-caption"
                    type="text"
                    value={postState.editPost.caption}
                    onChange={(e) => {
                      postDispatch({ type: "EDIT_POST", data: e.target.value });
                    }}
                    onKeyDown={(e) => handleEditPost(e)}
                  />
                </>
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
        {commentList.map(({ comment, username }) => {
          return (
            <div id="postText">
              <div className="profile-photo">
                <NavLink
                  onClick={() => {
                    getUser(getAuthorId(username));
                  }}
                  to={`/profile/${username}`}
                >
                  <img src={getAuthorImg(username)} alt="profile" />
                </NavLink>
              </div>
              <div className="post-content">
                <div>
                  <NavLink
                    onClick={() => {
                      getUser(
                        userState.allUsers.find(
                          (user) => user.username === username
                        )._id
                      );
                    }}
                    to={`/profile/${username}`}
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    {" "}
                    {username}
                  </NavLink>
                  &nbsp;
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

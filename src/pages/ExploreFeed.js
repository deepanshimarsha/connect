import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import ModalDetail from "../components/PostDetail/ModalDetail";
import SearchPopup from "../components/SearchPopup/SearchPopup";
import "../styles.css/explore-feed.css";
import { usePostContext } from "../context/postContext";

export default function ExloreFeed() {
  const { postState } = usePostContext();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="explore-main">
        <div className="top-nav">
          <TopNav />
        </div>
        <div className="explore-content">
          <SearchPopup />
          <div className="thumbnail-collection">
            {postState.explorePosts.map((post) => {
              return <ModalDetail {...post} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
import ModalDetail from "../components/PostDetail/ModalDetail";
import ExplorePostCard from "../components/Posts/ExplorePostCard";
import "../styles.css/explore-feed.css";

export default function ExloreFeed() {
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
          <div className="thumbnail-collection">
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            <ModalDetail />
            {/* <ExplorePostCard />
            <ExplorePostCard />
            <ExplorePostCard />
            <ExplorePostCard />
            <ExplorePostCard />
            <ExplorePostCard />
            <ExplorePostCard />
            <ExplorePostCard />
            <ExplorePostCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

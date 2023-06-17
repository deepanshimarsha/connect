import { useNavContext } from "../../context/navContext";

export default function TopNav() {
  const { navState } = useNavContext();
  return (
    <nav class="navbar sticky-top navbar-light bg-light text-center">
      <h4>{navState.topNavHeading}</h4>
    </nav>
  );
}

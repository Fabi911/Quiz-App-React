import "./NavBar.css";

export default function NavBar() {
  return (
    <footer>
      <nav className="nav" aria-label="navigation bar">
        <a className="nav_button active" href="/" aria-label="go to Home">
          <img className="nav_icon" src="/img/home-icon.png" alt="Home" />
        </a>
        <a className="nav_button" href="/" aria-label="go to bookmark">
          <img className="nav_icon" src="/img/bookmark_bk.png" alt="bookmark" />
        </a>
        <a className="nav_button" href="/" aria-label="go to profile">
          <img
            className="nav_icon"
            src="/img/identity-card.png"
            alt="profile"
          />
        </a>
      </nav>
    </footer>
  );
}

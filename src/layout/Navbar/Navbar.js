import { useLocation } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import "./navbar.css";
import logoutImg from "../../visual/main/logout.png";
import logoWhite from "../../visual/main/logoWhite.png";
import letterLogo from "../../images/letter-logo-less.png";
import { appNames, appRoutes } from "../../utils/constants";

const barElements = [
  {
    route: appRoutes.HOME,
    name: appNames.HOME,
  },
  {
    route: appRoutes.GAMES,
    name: appNames.GAMES,
  },
  {
    route: appRoutes.GUIDE,
    name: appNames.GUIDE,
  },
  {
    route: appRoutes.RANKING,
    name: appNames.RANKING,
  },
];

export default function Navbar() {
  const { userLogged, logout } = useLoginContext();

  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={letterLogo} style={{ width: "6%", marginLeft: "1%" }} />
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
          style={{
            paddingLeft: "2%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="navbar-nav">
            {barElements.map((i, index) => (
              <a
                key={index}
                className={`nav-link ${
                  location.pathname === i.route &&
                  "active nav-item lime accent-4 black-text fw-bold"
                } `}
                aria-current="page"
                href={i.route}
              >
                {i.name}
              </a>
            ))}
          </div>
          <img src={logoWhite} style={{ width: "5%", marginLeft: "-19%" }} />
          <a
            onClick={() => logout()}
            style={{
              width: "5%",
              height: "9vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={logoutImg}
              style={{
                width: "40%",
              }}
            />
          </a>
        </div>
      </nav>
      <main className="App"></main>
    </>
  );
}

import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { useLoginContext } from "../../context/LoginContext";
import "./navbar.css";
import logoutImg from "../../visual/main/logout.png";
import logoWhite from "../../visual/main/logoWhite.png";
import letterLogo from "../../images/letter-logo-less.png";
import { appRoutes } from "../../utils/utils";

const navbarLinks = [
  { name: "Home", link: appRoutes.HOME },
  { name: "Guía", link: appRoutes.GUIDE },
  { name: "Rankings", link: appRoutes.RANKING },
  { name: "Juegos", link: appRoutes.GAMES },
];

export default function Navbar() {
  // const [user, setUser] = useState([]);
  const { userLogged, logout } = useLoginContext();

  const location = useLocation();

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(`http://localhost:3001/allusers`, {
  //       mode: "cors",
  //     });
  //     const json = await response.json();
  //     setUser(json);
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <div className="container-fluid"> */}
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
            {/* {navbarLinks.map((i) => (
                <a
                  className={`nav-link ${isActive}`}
                  aria-current="page"
                  href="#"
                >
                  {i.name}
                </a>
              ))} */}
            <a
              className={`nav-link ${
                location.pathname === "/" &&
                "active nav-item lime accent-4 black-text fw-bold"
              } `}
              aria-current="page"
              href="/"
            >
              Home
            </a>
            <a
              className={`nav-link ${
                location.pathname === "/guide" &&
                "active nav-item lime accent-4 black-text fw-bold"
              }`}
              href="/guide"
              aria-current="page"
            >
              Guía
            </a>
            <a
              className={`nav-link ${
                location.pathname === "/rankings" &&
                "active nav-item lime accent-4 black-text fw-bold"
              }`}
              href="/rankings"
              aria-current="page"
            >
              Rankings
            </a>
            <a
              className={`nav-link ${
                location.pathname === "/games" &&
                "active nav-item lime accent-4 black-text fw-bold"
              }`}
              href="/games"
              aria-current="page"
            >
              Juegos
            </a>
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
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }}
            />
          </a>
          {/* </div> */}
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={letterLogo} style={{ width: "6%", marginLeft: "2%" }} />
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ marginLeft: "3%" }}
        >
          <div className="navbar-nav me-auto mb-2 mb-lg-0 purple-text text-lighten-2">
            <div className="nav-item lime accent-4">
              <NavLink className="nav-link black-text" to="/">
                Home
              </NavLink>
            </div>
            <div className="nav-item ">
              <NavLink className="nav-link" to="/guide">
                Guía
              </NavLink>
            </div>
            <div className="nav-item ">
              <NavLink className="nav-link" to="/rankings">
                Ranking
              </NavLink>
            </div>
            {userLogged ? (
              <div className="nav-item posAbsolute">
                <NavLink className="nav-link" to="/games">
                  Juegos
                </NavLink>
              </div>
            ) : (
              ""
            )}
            <div>
              <img src={logoWhite} className="logoCentral" />
            </div>
          </div>
          {userLogged ? (
            <div className="userNav-navbar">
              <Link to={`/profile`} className="name-navbar">
                {userLogged.name} {userLogged.surname}
              </Link>
              <a onClick={() => logout()} className="button-navbar">
                <img src={logoutImg} className="buttonLog-navbar" />
              </a>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav> */}
      <main className="App"></main>
    </>
  );
}

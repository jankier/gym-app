import logo from "../../assets/gym-logo-white.png";
import "./Header.css";
import Link from "./Link/Link";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import { useState } from "react";
import ActionButton from "../../shared/ActionButton/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Header = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarShadow = isTopOfPage ? "header" : "header-not-on-top";

  return (
    <div className={`${navbarShadow}`}>
      <div className="left-side-h">
        <div className="logo">
          <img className="logo-img" src={logo} alt="logo"></img>
          <span className="logo-text">
            GYM
            <span>B</span>
            ROS
          </span>
        </div>
      </div>
      {isAboveMediumScreens ? (
        <div className="right-side-h">
          <div className="header-menu">
            <ul className="header-navbar">
              <Link
                page="HOME"
                selectedPage={selectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="BENEFITS"
                selectedPage={selectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="PLANS"
                selectedPage={selectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="CONTACT US"
                selectedPage={selectedPage}
                isMenuToggled={isMenuToggled}
                setIsMenuToggled={setIsMenuToggled}
                setSelectedPage={setSelectedPage}
              />
            </ul>
          </div>
          <div className="sign-in">
            <span>SIGN IN</span>
            <ActionButton setSelectedPage={setSelectedPage}>
              BECOME MEMBER
            </ActionButton>
          </div>
        </div>
      ) : (
        <div className="right-side-h-navbar">
          <button
            className="menu-button"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      )}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="dropdown-menu">
          <div className="menu-close-button">
            <button
              className="close-button"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <svg
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <ul className="header-navbar-dropdown">
            <Link
              page="HOME"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="BENEFITS"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="PLANS"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="CONTACT US"
              selectedPage={selectedPage}
              isMenuToggled={isMenuToggled}
              setIsMenuToggled={setIsMenuToggled}
              setSelectedPage={setSelectedPage}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;

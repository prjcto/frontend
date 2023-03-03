import React, { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import signout from "../../actions/auth/signout";
import {
  Button,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  useToast,
} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./layout.styles.scss";

const Layout = ({ user }) => {
  const toast = useToast();

  const Navbar = () => {
    const [Mobile, setMobile] = useState(false);

    return (
      <div className="Navbar">
        <div className="Navbar-Container">
          <Link to="/">
            {" "}
            <img src={logo} alt="" className="Navbar-Logo" />
          </Link>

          <ul
            className={Mobile ? "nav-links-mobile" : "nav-links"}
            onClick={() => setMobile(false)}
          >
            <Link to="buy-kamas">
              <li>Buy Kamas</li>
            </Link>
            <Link to="sell-kamas">
              <li>Sell Kamas</li>
            </Link>
            <Link to="exchange-kamas">
              <li>Exchange Kamas</li>
            </Link>
          </ul>

          <Spacer />

          <div className="icon-mn">
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="none"
                variant="link"
                width="30px"
                z-zIndex="2"
              >
                <FaUserAlt className="icon" />
              </MenuButton>
              <MenuList bgColor="#F2CD5C" border="#F2CD5C">
                <MenuGroup>
                  {user ? (
                    <>
                      <MenuItem
                        bgColor="#F2CD5C"
                        color="white"
                        _hover={{ bg: "#f5c533" }}
                      >
                        Profile
                      </MenuItem>
                      <MenuItem
                        bgColor="#F2CD5C"
                        color="white"
                        _hover={{ bg: "#f5c533" }}
                        onClick={() => signout({ toast })}
                      >
                        Logout
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <Link to="register">
                        <MenuItem
                          bgColor="#F2CD5C"
                          color="white"
                          _hover={{ bg: "#f5c533" }}
                        >
                          Register{" "}
                        </MenuItem>
                      </Link>
                      <Link to="login">
                        <MenuItem
                          bgColor="#F2CD5C"
                          color="white"
                          _hover={{ bg: "#f5c533" }}
                        >
                          Login
                        </MenuItem>
                      </Link>
                    </>
                  )}
                </MenuGroup>
              </MenuList>
            </Menu>

            <button
              className="but mobile-menu-icon"
              onClick={() => setMobile(!Mobile)}
            >
              {Mobile ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default Layout;

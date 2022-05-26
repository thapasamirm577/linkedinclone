import React from "react";
import { Link } from "react-router-dom";
import classes from "./homenav.module.css";
import { FaSafari, FaUserFriends, FaNewspaper, FaSuitcase } from 'react-icons/fa';

const NavHome = () => {
  return (
    <>
        <section className={classes.main_home_nav_container}>
            <div className={classes.home_logo_container}>
                <svg
                   version="1.1"
                   id="katman_1"
                   xmlns="http://www.w3.org/2000/svg"
                   xmlnsXlink="http://www.w3.org/1999/xlink"
                   x="0px"
                   y="0px"
                   viewBox="0 0 653.28 479.89"
                   style={{ enableBackground: "new 0 0 653.28 479.89" }}
                   xmlSpace="preserve"
                   className={classes.navhome_logo}
                 >
                    <path
                      className={classes.st0}
                      d="M557.33,179.62H455.28c-4.88,0-9.03,3.86-9.03,8.62v102.51c0,4.76,2.72,8.62,7.6,8.62H555.9
	                  c4.89,0,10.1-3.86,10.1-8.62V188.24C566,183.49,562.21,179.62,557.33,179.62z M491.87,225.24h16.12v8.22h0.18
	                  c2.46-4.43,9.72-8.93,18.69-8.93c17.23,0,22.03,9.15,22.03,26.09v31.65h-17.11v-28.53c0-7.58-3.03-14.24-10.11-14.24
	                  c-8.6,0-12.7,5.82-12.7,15.38v27.39h-17.11V225.24z M463.36,282.27h17.11v-57.02h-17.11V282.27z M482.6,205.29
	                  c0,5.91-4.78,10.69-10.69,10.69s-10.69-4.78-10.69-10.69c0-5.91,4.78-10.69,10.69-10.69S482.6,199.38,482.6,205.29z"
                    />
                    <g>
                        <g>
                            <path
                              className={classes.st1}
                              d="M429.14,282.27h-15.97v-6.79h-0.17c-3.55,4.12-9.72,7.5-20.18,7.5c-14.26,0-26.53-10.73-26.53-29.16
			                  c0-17.56,12.1-29.29,27.07-29.29c9.27,0,15.02,3.3,18.5,7.5h0.17v-35.3h17.11V282.27z M397.66,237.36
			                  c-9.78,0-15.28,6.97-15.28,16.25c0,9.28,5.5,16.54,15.28,16.54c9.79,0,15.52-7.08,15.52-16.54
			                  C413.18,243.88,407.45,237.36,397.66,237.36L397.66,237.36z"
                            />
                            <path
                              className={classes.st1}
                              d="M358.78,273.08c-4.04,5.23-12.35,9.9-25.77,9.9c-17.91,0-29.32-11.86-29.32-30.49
			                  c0-16.55,10.33-27.96,29.82-27.96c16.83,0,27.21,11.05,27.21,30.49c0,1.94-0.31,3.87-0.31,3.87h-40.57l0.1,1.76
			                  c1.12,4.92,4.84,10.93,13.35,10.93c7.44,0,12.53-4,14.84-7.13L358.78,273.08z M344.25,248.05c0.11-6.02-4.3-12.12-11.26-12.12
			                  c-8.28,0-12.7,6.47-13.16,12.12H344.25z"
                            />
                            <polygon
                              className={classes.st1}
                              points="303.69,225.24 283.73,225.24 263.77,248.05 263.77,196.73 246.67,196.73 246.67,282.27 
			                  263.77,282.27 263.77,253.76 284.87,282.27 305.06,282.27 280.88,251.09 		"
                            />
                            <path
                              className={classes.st1}
                              d="M178.24,225.24h16.12v8.22h0.18c2.46-4.43,9.72-8.93,18.69-8.93c17.23,0,22.03,10.93,22.03,26.09v31.65
			                  h-17.11v-28.53c0-8.39-3.03-14.24-10.11-14.24c-8.6,0-12.7,6.81-12.7,15.38v27.39h-17.11V225.24z"
                            />
                            <path
                              className={classes.st1}
                              d="M149.73,282.27h17.11v-57.02h-17.11V282.27z M158.29,215.55c5.67,0,10.26-4.6,10.26-10.26
			                  s-4.59-10.26-10.26-10.26c-5.66,0-10.27,4.6-10.27,10.26S152.62,215.55,158.29,215.55z"
                            />
                            <polygon
                              className={classes.st1}
                              points="104.11,196.73 87,196.73 87,282.27 138.32,282.27 138.32,265.16 104.11,265.16 		"
                            />
                        </g>
                    </g>
                </svg>
            </div>
            <div className={classes.side_nav_}>
                <div className={classes.side_nav_child}>
                    <ul className={classes.side_nav_ul}>
                    <li>
                        <Link to={'/'}>
                            <FaSafari className={classes.home_nav_icon} /> <br />
                            Discover
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <FaUserFriends className={classes.home_nav_icon} /> <br />
                            People
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <FaNewspaper className={classes.home_nav_icon} /><br />
                            Learning
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <FaSuitcase className={classes.home_nav_icon} /> <br />
                            Jobs
                        </Link>
                    </li>
                    </ul>
                    <ul className={classes.side_nav_btn}>
                        <li>
                            <Link to={'/register'}>
                                <button>Join now</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/login'}>
                            <button> Sign in</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
};

export default NavHome;

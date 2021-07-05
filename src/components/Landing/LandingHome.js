import React from "react";
import { general_images } from "../../constants/images";
import styles from "./styles/LandingHome.module.css";
import { NavLink, Link } from "react-router-dom";
import { general_icons } from "../../constants/icons";

const nav_items = [
  {
    title: "Manbalar",
    url: "/",
  },
  {
    title: "Biz haqimizda",
    url: "/",
  },
  {
    title: "Boshlash",
    url: "/",
  },
  {
    title: "Kutubxona",
    url: "/",
  },
];

const LandingHome = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className="container d-flex justify-between align-center">
          <div className="d-flex align-center">
            <img className={`${styles.logo} mr-8`} src={general_images.logo} alt="" />
            <h3>Islom Nuri</h3>
          </div>
          <div className="d-flex">
            <div className={styles.nav_links}>
              {nav_items.map((i) => (
                <NavLink
                  className={styles.nav_link}
                  to={i.url}
                >
                  <span>{i.title}</span>
                </NavLink>
              ))}
            </div>
            <div>
              <Link
                className={`d-flex align-center align-center ${styles.nav_link}`}
              >
                <span className="mr-8">Kirish</span> {general_icons.login}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-32">
        <div className="d-flex justify-between container align-center">
          <div>
            <h1 className={styles.showcase_title}>
              <span className={styles.site_name}>Islom Nuri</span> Platformasiga{" "}
              <br /> Xush Kelibsiz
            </h1>
            <p className="mt-16 mb-32">
            Siz bu sayt orqali islom dini bòyicha bilimlaringizni turli xil testlar yechib hamda hadislar va kitoblardan parchalar o'qish yordamida oshirishingiz mumkin
            </p>
            <button className="btn-primary">Test ishlash</button>
          </div>
          <div>
            <img src={general_images.showcase_image} alt="" width={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;
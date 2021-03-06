import React, { useState } from "react";
import { general_images } from "../../constants/images";
import styles from "./styles/LandingHome.module.css";
import { NavLink, Link } from "react-router-dom";
import { general_icons } from "../../constants/icons";
import Modal from "../Reusable/Modal";
import HomeModalContent from "./HomeModalContent";
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
  const [open, setopen] = useState(false);
  return (
    <div>
      <nav className={styles.navbar}>
        <div className="container d-flex justify-between align-center">
          <div className="d-flex align-center">
            <img
              className={`${styles.logo} mr-8`}
              src={general_images.logo}
              alt=""
            />
            <h3>Islom Nuri</h3>
          </div>
          <div className={styles.navbar_content1}>
            <div className={styles.nav_links}>
              {nav_items.map((i) => (
                <NavLink key={i.title} className={styles.nav_link} to={i.url}>
                  <span>{i.title}</span>
                </NavLink>
              ))}
            </div>
            <div>
              <Link
                to=""
                className={`d-flex align-center align-center ${styles.nav_link}`}
              >
                <span className="mr-8">Kirish</span> {general_icons.login}
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Modal open={open} setopen={setopen}>
        <HomeModalContent />
      </Modal>

      <div className="mt-32">
        <div
          className={`d-flex justify-between container align-center ${styles.showcase}`}
        >
          <div className={`flex-1 ${styles.showcase_content1}`}>
            <h1 className={styles.showcase_title}>
              <span className={styles.site_name}>Islom Nuri</span> Platformasiga{" "}
              <br /> Xush Kelibsiz
            </h1>
            <p className={`mt-16 mb-32 ${styles.site_desc}`}>
              Siz bu sayt orqali islom dini b??yicha bilimlaringizni turli xil
              testlar yechib hamda hadislar va kitoblardan parchalar o'qish
              yordamida oshirishingiz mumkin
            </p>
            <img
              src={general_images.showcase_image}
              className={styles.showcase_image_mobile}
              alt=""
              width={500}
            />

            <button className="btn-primary" onClick={() => setopen(true)}>
              Test ishlash
            </button>
          </div>
          <div className={styles.showcase_image}>
            <img src={general_images.showcase_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHome;

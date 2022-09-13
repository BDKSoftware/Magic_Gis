import React from "react";
import type { NextPage } from "next";
import styles from "../../styles/promobar.module.css";

const PromoBar: NextPage = () => {
  return (
    <div className={styles.barContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.mainText}>Free Shipping!</h1>
        <span className={styles.descText}>On all orders of $200 or more</span>
      </div>
    </div>
  );
};

export default PromoBar;

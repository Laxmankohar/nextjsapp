import Title from "../components/Title";
import React from "react";
import styles from '../styles/Home.module.css'

// import Image from "next/image";

function index() {
  return (
    <>
      <Title title="Home" />
      <div className={styles.index}>
        {/* <h1 className={styles.heading}>This is Homepage...</h1> */}
        <button className={styles.btn}>SignIn</button>
        <button className={styles.btn}>SignUp</button>
      </div>
      {/* <Image src="/images/img.jpg" alt="img" width="1920" height="716"/> */}
    </>
  );
}
export default index;

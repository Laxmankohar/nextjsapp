import Title from "@/components/Title";
import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css"

function about() {
  return (
    <>
      <Title title="About" />
      <div className={styles.about}>
        <div className={styles.left}>
          <h1 className={styles.heading}>about us</h1>
          <p className={styles.para}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur adipisci inventore, neque dolor autem doloribus odio laborum provident vel aut Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto tenetur tempora atque esse. Quam aut odio qui, tenetur provident amet.
          </p>
          <button className={styles.btn}>Learn More</button>

        </div>
        <div className={styles.right}>
          <div className={styles.imgContainer}>
            <Image src="/images/about.jpg" alt="about" width="600" height="500" sizes="(max-width: 400px) 100vw, 400px" className={styles.img} />
          </div>
        </div>
      </div>
    </>
  );
}

export default about;

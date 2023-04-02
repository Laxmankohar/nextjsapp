import Title from "@/components/Title";
import React from "react";
import styles from '../styles/Contact.module.css'

function contact() {
  return (
    <>
      <Title title="Contact" />
      <div className={styles.contact}>
        <h1 className={styles.heading}>Contact us</h1>
        <form action="#" method="post" className={styles.form} >
          <div className={styles.info}>
            <label htmlFor="Name" className={styles.label}>Name:</label><br></br>
            <input type="text" name="name" id="name" className={styles.input} />
          </div>
          <br></br>

          <div className={styles.info}>
            <label htmlFor="Email" className={styles.label}>E-mail:</label><br></br>
            <input type="email" name="email" id="email" className={styles.input} />
          </div>
          <br></br>

          <div className={styles.info}>
            <label htmlFor="Phone" className={styles.label}>Phone No:</label><br></br>
            <input type="number" name="number" id="number" className={styles.input} />
          </div>
          <br></br>

          <div className={styles.info}>
            <label htmlFor="msg" className={styles.label}>Message:</label><br></br>
            <textarea name="msg" id="msg" cols="30" rows="10" className={styles.textarea}></textarea>
          </div>

          <button type="submit" className={styles.btn} >Submit</button>
        </form>
      </div>
    </>
  );
}

export default contact;

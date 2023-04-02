import Title from '@/components/Title'
import React from 'react'
import styles from '../styles/Services.module.css'
import Image from 'next/image'

function service() {
  return (
    <>
      <Title title="Services" />
      <div className={styles.Services}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Our <span className={styles.span}>Services</span></h2>
          <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At hic consectetur eos libero numquam est, saepe iure harum in nulla?</p>
        </div>
        <div className={styles.card}>
          <div className={styles.box}>
            <Image src='/images/gd.png' alt='gd' width={50} height={50} className={styles.img} />
            <h3 className={styles.title}>Graphic Design</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt odit neque accusantium corrupti rerum?
            </p>
          </div>

          <div className={styles.box}>
            <Image src='/images/wd.png' alt='wd' width={50} height={50} className={styles.img} />
            <h3 className={styles.title}>Web Development</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt odit neque accusantium corrupti rerum?
            </p>
          </div>
          <div className={styles.box}>
            <Image src='/images/pd.png' alt='pd' width={50} height={50} className={styles.img} />
            <h3 className={styles.title}>Product Design</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt odit neque accusantium corrupti rerum?
            </p>
          </div>
          <div className={styles.box}>
            <Image src='/images/bw.png' alt='bw' width={50} height={50} className={styles.img} />
            <h3 className={styles.title}>Blog writing</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt odit neque accusantium corrupti rerum?
            </p>
          </div>
          <div className={styles.box}>
            <Image src='/images/sm.png' alt='sw' width={50} height={50} className={styles.img} />
            <h3 className={styles.title}>Social Marketing</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt odit neque accusantium corrupti rerum?
            </p>
          </div>
          <div className={styles.box}>
            <Image src='/images/pg.png' alt='pg' width={50} height={50} className={styles.img} />
            <h3 className={styles.title}>PhotoGraphy</h3>
            <p className={styles.para}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt odit neque accusantium corrupti rerum?
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default service
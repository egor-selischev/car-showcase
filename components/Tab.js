import Link from "next/link";
import React from "react";
import styles from "../styles/Tab.module.css"

const Tab = ({ tabData }) => {
  return (
    <div>
      {tabData &&
        <div className={styles.showcase__container}>
          {tabData.list.map(car =>
            <div className={styles.showcase__car} key={car._id}>
              <div className={styles.showcase__imgBlock}>
                <img className={styles.showcase__img} src={car.photobank.imgs[0].urlThumb} alt="preview"/>
              </div>
              <div className={styles.showcase__title}>
                {car.feedData.brandName} {car.feedData.modelName}
              </div>
              <div className={styles.showcase__engine}>
                {car.feedData.engine.engineName}
              </div>
              <Link className={styles.showcase__link} href={`/${car.feedData.brandName}/${car._id}`}>
                <button>Подробнее</button>
              </Link>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Tab

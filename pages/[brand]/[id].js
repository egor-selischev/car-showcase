import {useRouter} from "next/router"
import MainLayout from "../../components/MainLayout";
import styles from "../../styles/styles.module.css"
import Slider from "../../components/Slider";

export async function getServerSideProps(context) {
  const {brand, id} = context.params
  const carsRes = await fetch(`https://maximum.expert/api/stock-test?brand=${brand}`);
  const carsData = await carsRes.json();

  return {
    props: {
      car: carsData.list.find(car => car._id === id),
    }
  }
}

export default function ({car}) {
  const {query} = useRouter()

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.name}>
          <div className={styles.car__title}>
            {car.feedData.brandName} {car.feedData.modelName} {car.feedData.productionYear} года
          </div>
          {car.feedData.hasVin &&
            <div className={styles.car__vin}>
              VIN {car.feedData.vin}
            </div>
          }
        </div>
        <div className={styles.container__car}>
          <div>
            <div className={`${styles.card} ${styles.car__price}`}>
              {car.feedData.autoPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} Р
            </div>
            <div className={`${styles.card} ${styles.car__guarantee}`}>
              <img src="/car-card/guarantee.svg" alt="guarantee"/>
              Гарантия юр. чистоты
            </div>
            <div className={styles.characteristics}>
              <div className={styles.characteristics__title}>
                Характеристики
              </div>
              <div className={styles.characteristics__card}>
                <div className={styles.characteristics__item}>
                  <img src="/car-card/icons.png" alt="icon"/>
                  {car.feedData.productionYear} год выпуска
                </div>
                <div className={styles.characteristics__item}>
                  <img src="/car-card/icons(1).png" alt="icon"/>
                  {car.feedData.engine.engineName}
                </div>
                <div className={styles.characteristics__item}>
                  <img src="/car-card/icons(2).png" alt="icon"/>
                  КП - {car.feedData.equipmentVariantTransmissionType}
                </div>
              </div>
            </div>
          </div>
          <Slider images={car.photobank.imgs} />
        </div>
        <div className={styles.billboard}>
          <div className={styles.billboard__container}>
            <div className={styles.billboard__title}>
              Кредит на новый {car.feedData.brandName} {car.feedData.modelName}
            </div>
            <div className={styles.billboard__description}>
              Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»
            </div>
            <button>
              Оформить
            </button>
          </div>
          <img src="/billboard/billboard.png" alt="billboard"/>
        </div>
      </div>
    </MainLayout>
  )
}



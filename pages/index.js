import {useState} from "react"
import MainLayout from "../components/MainLayout";
import TabBar from "../components/TabBar";
import styles from "../styles/Index.module.css"

const Index = ({tabData}) => {
  const [activeTab, setActiveTab] = useState('tabChery')

  const handleTabChange = tab => {
    setActiveTab(tab)
  }

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.title}>Автомобили Chery в СПб</div>
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} tabData={tabData} />
      </div>
    </MainLayout>
  );
};

export async function getServerSideProps() {
  const cheryRes = await fetch(`https://maximum.expert/api/stock-test?brand=Chery`);
  const cheryData = await cheryRes.json();

  const havalRes = await fetch(`https://maximum.expert/api/stock-test?brand=Haval`);
  const havalData = await havalRes.json();

  const geelyRes = await fetch(`https://maximum.expert/api/stock-test?brand=Geely`);
  const geelyData = await geelyRes.json();

  const exeedRes = await fetch(`https://maximum.expert/api/stock-test?brand=Exeed`);
  const exeedData = await exeedRes.json();

  const audiRes = await fetch(`https://maximum.expert/api/stock-test?brand=Audi`);
  const audiData = await audiRes.json();

  const kiaRes = await fetch(`https://maximum.expert/api/stock-test?brand=Kia`);
  const kiaData = await kiaRes.json();

  const hyundaiRes = await fetch(`https://maximum.expert/api/stock-test?brand=Hyundai`);
  const hyundaiData = await hyundaiRes.json();

  return {
    props: {
      tabData: {
        tabChery: cheryData,
        tabHaval: havalData,
        tabGeely: geelyData,
        tabExeed: exeedData,
        tabAudi: audiData,
        tabKia: kiaData,
        tabHyundai: hyundaiData
      }
    }
  }
}
export default Index;
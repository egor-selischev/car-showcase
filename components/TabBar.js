import React from 'react';
import Link from "next/link";
import styles from '../styles/TabBar.module.css'
import Tab from "./Tab";

const TabBar = ({ activeTab, onTabChange, tabData }) => {
  return (
    <div className={styles.tab}>
      <div className={styles.brands}>
        <div className={styles.title}>Бренд</div>
        <div className={styles.name}>
          <button
            onClick={() => onTabChange('tabChery')}
            className={activeTab === 'tabChery' ? styles.active : ''}
          >
            Chery
          </button>
          <button
            onClick={() => onTabChange('tabHaval')}
            className={activeTab === 'tabHaval' ? styles.active : ''}
          >
            Haval
          </button>
          <button
            onClick={() => onTabChange('tabGeely')}
            className={activeTab === 'tabGeely' ? styles.active : ''}
          >
            Geely
          </button>
          <button
            onClick={() => onTabChange('tabExeed')}
            className={activeTab === 'tabExeed' ? styles.active : ''}
          >
            Exeed
          </button>
          <button
            onClick={() => onTabChange('tabAudi')}
            className={activeTab === 'tabAudi' ? styles.active : ''}
          >
            Audi
          </button>
          <button
            onClick={() => onTabChange('tabKia')}
            className={activeTab === 'tabKia' ? styles.active : ''}
          >
            Kia
          </button>
          <button
            onClick={() => onTabChange('tabHyundai')}
            className={activeTab === 'tabHyundai' ? styles.active : ''}
          >
            Hyundai
          </button>
        </div>
      </div>

      <div className={styles.showcase}>
      {activeTab === 'tabChery' &&
        <Tab tabData={tabData.tabChery} />
      }
      {activeTab === 'tabHaval' &&
        <Tab tabData={tabData.tabHaval} />
      }
      {activeTab === 'tabGeely' &&
        <Tab tabData={tabData.tabGeely} />
      }
      {activeTab === 'tabExeed' &&
        <Tab tabData={tabData.tabExeed} />
      }
      {activeTab === 'tabAudi' &&
        <Tab tabData={tabData.tabAudi} />
      }
      {activeTab === 'tabKia' &&
        <Tab tabData={tabData.tabKia} />
      }
      {activeTab === 'tabHyundai' &&
        <Tab tabData={tabData.tabHyundai} />
      }
      </div>
    </div>
  )
}

export default TabBar

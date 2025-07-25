
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Header = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate('/MainMenu');
  };

  const handleDefa = () => {
    navigate('/SetDefaults');
  };

  const handleHist = () => {
    navigate('/SearchEmployee/ViewPayrollHistory');
  };

  const handleCalc = () => {
    navigate('/SearchEmployee/CalculatePayroll');
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('userValid');
    navigate('/');
  };

  return (
    <div className={styles.background}>
      <div className={styles.content}>

        <button className={`${styles.iconGroup} ${styles.menuButton}`} onClick={handleMenu}>
          <div className={styles.iconImage}></div>
          <div className={styles.label}><span>MAIN MENU</span></div>
        </button>

        <button className={`${styles.iconGroup} ${styles.defaButton}`} onClick={handleDefa}>
          <div className={styles.iconImage}></div>
          <div className={styles.label}>SET DEFAULT RATES</div>
        </button>

        <button className={`${styles.iconGroup} ${styles.histButton}`} onClick={handleHist}>
          <div className={styles.iconImage}></div>
          <div className={styles.label}>PAYROLL HISTORY</div>
        </button>

        <button className={`${styles.iconGroup} ${styles.calcButton}`} onClick={handleCalc}>
          <div className={styles.iconImage}></div>
          <div className={styles.label}>CALCULATE PAYROLL</div>
        </button>

        <button className={`${styles.iconGroup} ${styles.prevButton}`} onClick={handleBack}>
          <div className={styles.iconImage}></div>
          <div className={styles.label}>BACK</div>
        </button>

        <button className={`${styles.iconGroup} ${styles.logoutButton}`} onClick={handleLogout}>
          <div className={styles.iconImage}></div>
          <div className={styles.label}>LOGOUT</div>
        </button>

      </div>
    </div>
  );
};

export default Header;

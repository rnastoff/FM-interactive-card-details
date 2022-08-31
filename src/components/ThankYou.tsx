import styles from './ThankYou.module.css';

import iconComplete from '../images/icon-complete.svg';

const ThankYou = () => {
  return (
    <div className={styles.thankYou}>
      <img src={iconComplete} alt="Complete" />
      <h1>THANK YOU!</h1>
      <h2>We've added your card details</h2>
      <button>Continue</button>
    </div>
  )
}

export default ThankYou;
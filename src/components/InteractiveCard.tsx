import { useState } from 'react';

import styles from './InteractiveCard.module.css';

import CardForm from './CardForm';
import ThankYou from './ThankYou';

import useForm from '../hooks/useForm';
import validate from './validateInfo';

import cardLogo from '../images/card-logo.svg';



const InteractiveCard = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    setTimeout(() => { console.log(isSubmitted) }, 1000)
  }

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

  let cardExpValue = values.expDateMonth && `${values.expDateMonth} / ${values.expDateYear}`;

  return (
    <div className={styles.wrapper}>

      <div className={styles.center}>

        <div className={styles.card}>
          <div className={styles.cardFront}>
            <img src={cardLogo} alt="logo" className={styles.cardLogo} />
            <input
              className={styles.cardNumber}
              placeholder={"0000 0000 0000 0000"}
              maxLength={19}
              value={values.cardNumber}
              readOnly
            />
            <div className={styles.cardBottom}>
              <input
                className={styles.cardName}
                placeholder={"JANE APPLESEED"}
                value={values.cardName}
                readOnly
              />
              <input
                className={styles.cardExp}
                placeholder={"00/00"}
                value={cardExpValue}
                readOnly
              />
            </div>
          </div>

          <div className={styles.cardBack}>
            <input
              className={styles.cardCVC}
              placeholder={"000"}
              value={values.cvc}
              readOnly
            />
          </div>
        </div>

        {!isSubmitted && <CardForm values={values} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} />}
        {isSubmitted && <ThankYou />}

      </div>

    </div>
  )
}

export default InteractiveCard;
import styles from './CardForm.module.css';

interface cardProps {
  cardName: string;
  cardNumber: string;
  expDateMonth: string;
  expDateYear: string;
  cvc: string
}

interface Errors {
  cardName: string;
  cardNumber: string;
  expDateMonth: string;
  expDateYear: string;
  cvc: string
}

const CardForm: React.FC<{ values: cardProps, handleChange: any, handleSubmit: any, errors: Errors }> = (props) => {

  return (
    <form className={styles.form} onSubmit={props.handleSubmit} >
      <div className={styles.cardName}>
        <label htmlFor="cardName">CARDHOLDER NAME</label>
        <input
          name="cardName"
          type="text"
          id={styles["cardName"]}
          className={props.errors.cardName ? styles.errorBorder : ""}
          placeholder="e.g. Jane Appleseed"
          value={props.values.cardName}
          onChange={props.handleChange}
        />
        <div className={`${styles.cardNameError} ${styles.errorMessage}`}>{props.errors.cardName}</div>
      </div>

      <div className={styles.cardNumber}>
        <label htmlFor="cardNumber">CARD NUMBER</label>
        <input
          name="cardNumber"
          type="text"
          id={styles["cardNumber"]}
          className={props.errors.cardNumber ? styles.errorBorder : ""}
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          value={props.values.cardNumber}
          onChange={props.handleChange}
        />
        {props.errors.cardNumber && <div className={`${styles.cardNumberError} ${styles.errorMessage}`}>{props.errors.cardNumber}</div>}
      </div>

      <div className={styles.cardDetails}>

        <div className="expDate">
          <label htmlFor="expDateMonth">EXP. DATE (MM/YY)</label>
          <input
            name="expDateMonth"
            type="text"
            id={styles["expDateMonth"]}
            className={props.errors.expDateMonth ? styles.errorBorder : ""}
            maxLength={2}
            placeholder="MM"
            value={props.values.expDateMonth}
            onChange={props.handleChange}
          />
          <input
            name="expDateYear"
            type="text"
            id={styles["expDateYear"]}
            className={props.errors.expDateYear ? styles.errorBorder : ""}
            maxLength={2}
            placeholder="YY"
            value={props.values.expDateYear}
            onChange={props.handleChange}
          />
          <div className={`${styles.expDateError} ${styles.errorMessage}`}>{props.errors.expDateMonth || props.errors.expDateYear}</div>
        </div>

        <div className="cvc">
          <label htmlFor="cvc">CVC</label>
          <input
            name="cvc"
            type="text"
            id={styles["cvc"]}
            className={props.errors.cvc ? styles.errorBorder : ""}
            maxLength={3}
            placeholder="e.g. 123"
            value={props.values.cvc}
            onChange={props.handleChange}
          />
          <div className={`${styles.cvcError} ${styles.errorMessage}`}>{props.errors.cvc}</div>
        </div>

      </div>

      <button>Confirm</button>
    </form>
  )
}

export default CardForm;
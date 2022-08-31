
type info = {
  cardName: string;
  cardNumber: string;
  expDateMonth: string;
  expDateYear: string;
  cvc: string
}

export default function validateInfo(values: info) {
  let errors = {
    cardName: "",
    cardNumber: "",
    expDateMonth: "",
    expDateYear: "",
    cvc: ""
  };

  // NAME
  if (!values.cardName.trim()) {
    errors.cardName = "Can't be blank";
  }

  // CARD NUMBER
  if (!values.cardNumber) {
    errors.cardNumber = "Can't be blank";
  }
  else if (!values.cardNumber.match(/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/)) {
    errors.cardNumber = "Wrong format, numbers only";
  }

  // ExpDateMonth
  if (!values.expDateMonth) {
    errors.expDateMonth = "Can't be blank";
  }
  else if (!values.expDateMonth.match(/^(?:0?[1-9]|1?[012])$/)) {
    errors.expDateMonth = "Wrong format, numbers only";
  }

  // ExpDateYear
  if (!values.expDateYear) {
    errors.expDateYear = "Can't be blank";
  }
  else if (!values.expDateYear.match(/^[0-9][0-9]$/)) {
    errors.expDateYear = "Wrong format, numbers only";
  }

  // CVC
  if (!values.cvc) {
    errors.cvc = "Can't be blank";
  }
  else if (!values.cvc.match(/^[0-9]{3,4}$/)) {
    errors.expDateMonth = "Wrong format, numbers only";
  }


  return errors;
}
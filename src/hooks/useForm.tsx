import { useState, useEffect } from 'react';

const useForm = (callback: Function, validate: Function) => {

  interface State {
    cardName: string;
    cardNumber: string;
    expDateMonth: string;
    expDateYear: string;
    cvc: string
  }

  const [values, setValues] = useState<State>({
    cardName: "",
    cardNumber: "",
    expDateMonth: "",
    expDateYear: "",
    cvc: ""
  });

  const [errors, setErrors] = useState({
    cardName: "",
    cardNumber: "",
    expDateMonth: "",
    expDateYear: "",
    cvc: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    let { name, value } = e.target as typeof e.target & {
      name: string
      value: string
    };

    if (name === "cardName") value = value.toUpperCase();
    if (name === "cardNumber") value = value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

    if (name === "expDateMonth") { if (!value.match(/^(?:0?[1-9]|1?[012])$/)) value = ""; }
    if (name === "expDateYear") { if (!value.match(/^[0-9]?[0-9]$/)) value = ""; }

    if (name === "cvc") { if (!value.match(/^[0-9]*$/)) value = ""; }

    setValues({
      ...values,
      [name]: value
    });

  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("submitted");
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  }

  useEffect(() => {

    // if (Object.keys(errors).length === 0 && isSubmitting) {
    //   console.log(errors);
    //   callback();
    // }

    let errorCheck = Object.values(errors).every(value => !value);

    if (errorCheck && isSubmitting) {
      console.log(errors);
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
}


export default useForm;
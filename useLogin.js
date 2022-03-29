import { useState } from "react";

const useLogin = (initialValues) => {
  const [getValues, setValues] = useState(initialValues);

  return [
    getValues,
    (e) => {
      setValues({
        ...getValues,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

export default useLogin;

const regexp = {
  telefone: {
    /*
    '+55 11 98888-8888',
  '+55 11 98888 8888',
  '+55 11 988888888',
  '+55 11988888888',
  '+5511988888888',
  '5511988888888',
  '11 98888-8888',
  '11 98888 8888',
  '(11) 98888 8888',
  '(11) 98888-8888',
  '11-98888-8888',
  '11 98888 8888',
  '11988888888',
  '11988888888',
  '988888888',
  '(11)988888888',
  '98888 8888',
  '8888 8888'
    */
    regexp: /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/,
    message: "Telefone inválido",
  },

  email: {
    regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Preencha um email válido",
  },
};

export default function validateForm(value, type) {
  let message = "";

  const validate = () => {
    if (!type && !value) {
      message = "";
      return true;
    }

    if (!value) {
      message = "Preencha um valor no campo " + type;
      return false;
    } else if (!regexp[type].regexp.test(value)) {
      message = regexp[type].message;
      return false;
    }
  };

  validate();

  return {
    message,
  };
}

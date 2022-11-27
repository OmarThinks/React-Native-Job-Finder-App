const validateLogin = (email, password, data) => {
  let toReturn = null;
  data.forEach((user) => {
    if (user.email === email && user.password === password) {
      toReturn = user;
    }
  });
  return toReturn;
};

export { validateLogin };

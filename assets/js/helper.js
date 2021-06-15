export const regexEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
export const regexPassword = /\S/;
export const validateInput = (value, type) => {
  let regex = null;
  switch(type) {
    case 'email':
      regex = regexEmail;
      break;
    case 'password':
      regex = regexPassword;
      break;
    default:
      regex = null;
      break;
  }

  if (regex && regex.test(value)) {
    return true;
  } else {
    return false;
  }
}
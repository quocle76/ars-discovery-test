
export const login = (email, password) => {
  // fake
  return new Promise((resolve) => {
    resolve({
      email,
      password,
      token: 'test'
    });
  });
}
export default {
  login
}
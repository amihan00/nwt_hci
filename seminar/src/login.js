export default function login(user, validCredentials) {
  if (loginState.isLoggedIn) {
    loginState.user = null;
    loginState.isLoggedIn = false;
  } else {
    loginState.user = user;
    loginState.isLoggedIn = true;
  }

  console.log(loginState);
}

export function logout() {
  loginState.user = null;
  loginState.isLoggedIn = false;
}

export const loginState = {
  isLoggedIn: false,
  user: null,
  loginCallback: null
};

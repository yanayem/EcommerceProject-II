// Session management
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const isSessionValid = () => {
  const loginTime = localStorage.getItem("loginTime");
  if (!loginTime) return false;
  return Date.now() - Number(loginTime) < ONE_DAY;
};

export const forceLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("loginTime");
};

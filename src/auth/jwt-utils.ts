import jwtDecode from "jwt-decode";

const decodeJwt = () => {
  const token = localStorage.getItem('token') ?? ''
  return jwtDecode(token)
}

export {
  decodeJwt
}
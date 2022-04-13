import jwtDecode from "jwt-decode";
import { atom, selector } from "recoil";


export const authState = atom({
  key : 'authState',
  default : localStorage.getItem('auth')
})

export const userState = selector({
  key : 'userSelector', 
  get : ({get}) => {
    const token = get(authState)
    if(token){
      return jwtDecode(token) as {name : string, role : string}
    }
    return null
  }
})
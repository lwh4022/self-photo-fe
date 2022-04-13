import jwtDecode from "jwt-decode"
import { useNavigate } from "react-router"
import { useSetRecoilState } from "recoil"
import { authState } from "../entities/user"
import { getUserToken } from "../services/sign/api"

export { useUserAction }

function useUserAction () {
    const setAuth = useSetRecoilState(authState)
    const navigate = useNavigate()

    const signin = async ({email, password} : {email : string, password: string}) => {
        try {
            const token = await getUserToken(email, password)
            
            const userInfo = jwtDecode(token) as {name : string, role : string}
            
            if(!userInfo.name || !userInfo.role){
                throw new Error('no name or no role')
            }

            setAuth(token)
            localStorage.setItem('auth', token)

        } catch {
            localStorage.removeItem('auth')
        }
    }

    const signout = () => {
        localStorage.removeItem('auth')
        setAuth('')
        navigate('/login')
    }

    return {
        signin,
        signout
    }
}
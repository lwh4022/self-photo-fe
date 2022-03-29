import { useLocation, Navigate } from "react-router";
import { useRecoilValue } from "recoil";
import { authState } from "./auth";

function RequireAuth( { children } : {children : JSX.Element}) {

  const auth = useRecoilValue(authState)
  const location = useLocation()

  return (
    auth 
    ? children
    : <Navigate to="/login" state={{ from :location}} replace />
  )
}

export default RequireAuth
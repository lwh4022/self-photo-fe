import { Route, Routes } from "react-router-dom"
import RequireAuth from "./auth/authProvider"
import Main from "./components/Main"
import SignIn from "./components/SignIn"
import EnhancedTable from "./components/User/Container"

function AdminRouter () {
  return (
      <Routes>
        <Route path="/" element={
            <RequireAuth>
              <Main />
            </RequireAuth>
          }>
          <Route path="users" element={<EnhancedTable />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
      </Routes>
  )
}

export default AdminRouter
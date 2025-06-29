import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import ViewStudent from "./pages/ViewStudent";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAuthenticated, setAuthChecked, logout } from "./store/authSlice";
import axiosInstance from "./hooks/axiosInstance";
import { BaseUrl, Apis } from "./constants/Apis";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { jwtDecode } from "jwt-decode";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const validateToken = async () => {
      try {
        await axiosInstance.get(BaseUrl + Apis.VALIDATE_TOKEN);
        const token = localStorage.getItem("accessToken");
        console.log("token ", token);

        if (token) {
          const decoded = jwtDecode(token);

          const user = {
            username: decoded.username,
            email: decoded.sub,
            roles: decoded.roles,
          };
          console.log(" decoded user ", user);

          dispatch(setUser(user));
        }
        dispatch(setAuthenticated(true));

      } catch (err) {
        dispatch(logout());
      } finally {
        dispatch(setAuthChecked(true));
      }
    };

    validateToken();
  }, [dispatch]);

  return (
    <>
      <Router>
        <div className="p-4">
          <Routes>
            {/* 🔓 Public Route */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* 🔐 Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/student-list" element={<StudentList />} />
              <Route path="/add" element={<AddStudent />} />
              <Route path="/edit/:id" element={<EditStudent />} />
              <Route path="/view/:id" element={<ViewStudent />} />
            </Route>
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </Router>
      <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { useAuth } from "./auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "./Navbar";
import { CaseList } from "./CaseList";

function Dashboard() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        login(res.data.data);
        setUserData(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      <CaseList />
    </>
  );
}

export default Dashboard;

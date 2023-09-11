import React, { useState } from "react";
import { useAuth } from "./auth";
import axios from "axios";
import {
  Container,
  Paper,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@mui/material";

import { Button } from "@/interface/ui/button";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    showPassword: false,
  });
  const { login } = useAuth();

  function handleClickShowPassword() {
    setUser({
      ...user,
      showPassword: !user.showPassword,
    });
  }

  function handleToggleButtonClick(e) {
    e.preventDefault();
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("https://reqres.in/api/login", {
        username: user.username,
        password: user.password,
      })
      .then((res) => {
        localStorage.setItem("ReqRestoken", res.data.token);
        login(user);
        navigate("/dashboard");
      })
      .catch((err) => console.error(err));
    setUser({
      username: "",
      password: "",
      showPassword: false,
    });
  }

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <Navbar />
      <Container maxWidth='lg'>
        <h1>Login into Junior</h1>
        <Paper elevation={4} sx={{ padding: 5 }}>
          <FormControl variant='outlined' fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor='username'>Username</InputLabel>
            <OutlinedInput
              id='username'
              type='username'
              name='username'
              label='Username'
              value={user.username}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl variant='outlined' fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <OutlinedInput
              id='password'
              type={user.showPassword ? "text" : "password"}
              name='password'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleToggleButtonClick}
                    onMouseUp={handleToggleButtonClick}
                    edge='end'
                  >
                    {user.showPassword ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label='Password'
              value={user.password}
              onChange={handleChange}
            />
          </FormControl>

          <Button
            variant='outline'
            className='bg-sky-500 text-white'
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default Login;

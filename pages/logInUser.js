import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      router.push("/registerUser");
    } else {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);

  const onSubmit = (data) => {
    localStorage.setItem("isLoggedIn", true);
    if (
      data.email == "admin123@gmail.com" &&
      data.password == "Test@123" &&
      localStorage.getItem("userData")
    ) {
      router.push("/dashboard");
    } else {
      router.push("/logInUser");
    }
  };
  if (Object.keys(userData).length > 0) {
    return (
      <div>
        <AppBar position="static" alignitems="center" color="primary">
          <Toolbar>
            <Grid container justifyContent="left" wrap="wrap">
              <Grid item>
                <Typography variant="h6">User Login</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0} justifyContent="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item justifyContent="center">
                  <h2 className="textAlignCenter">Sign In</h2>
                </Grid>
                <Grid item className="formGridContainer">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          {...register("email", {
                            required: true,
                            maxLength: 20,
                          })}
                          aria-invalid={errors.name ? "true" : "false"}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          {...register("password", {
                            required: true,
                            maxLength: 20,
                          })}
                          aria-invalid={errors.password ? "true" : "false"}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
};
export default Login;

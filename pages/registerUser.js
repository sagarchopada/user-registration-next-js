import React from "react";
import { useRouter } from "next/router";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAddUserMutation } from "../api/apiSlice";

const RegisterUser = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      phone: null,
      website: "",
    },
  });
  const [addUser] = useAddUserMutation();

  const onSubmit = async (data) => {
    const userData = await addUser(data);
    localStorage.setItem("userData", JSON.stringify(userData));
    router.push("/logInUser");
  };

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justifyContent="left" wrap="wrap">
            <Grid item xs={6}>
              <Typography variant="h6">User Registration</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} justifyContent="center" direction="row">
        <Grid item xs={4}>
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
              <Grid item>
                <h2 className="textAlignCenter">Sign Up</h2>
              </Grid>
              <Grid item className="formGridContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        type="text"
                        placeholder="Enter name"
                        {...register("name", { required: true, maxLength: 20 })}
                        aria-invalid={errors.name ? "true" : "false"}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="username"
                        placeholder="Enter username"
                        {...register("username", {
                          required: true,
                          maxLength: 20,
                        })}
                        aria-invalid={errors.username ? "true" : "false"}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        {...register("email", {
                          required: true,
                          maxLength: 20,
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="password"
                        placeholder="Enter password"
                        {...register("password", {
                          required: true,
                          maxLength: 20,
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                        fullWidth
                        required
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        type="number"
                        placeholder="Enter phone number"
                        {...register("phone", {
                          required: true,
                          maxLength: 10,
                          minLength: 10,
                        })}
                        aria-invalid={errors.phone ? "true" : "false"}
                        fullWidth
                        required
                      />
                    </Grid>

                    <Grid item xs={6}>
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
};
export default RegisterUser;

import { useGetUsersQuery, useAddUserMutation } from "../api/apiSlice";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
} from "@mui/material";

export default function Dashboard() {
  const [userData, setUserData] = useState({});
  const router = useRouter();

  const userDataHeader = [
    "Id",
    "Name",
    "Username",
    "Email",
    "Phone",
    "Website",
    "Company Name",
    "Address",
  ];
  const { data: users } = useGetUsersQuery();
  useEffect(() => {
    if (!localStorage.getItem("userData")) {
      router.push("/registerUser");
    } else if (!localStorage.getItem("isLoggedIn")) {
      router.push("/logInUser");
    } else {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }
  }, []);
  if (users && Object.keys(userData).length > 0) {
    return (
      <div>
        <AppBar position="static" alignitems="center" color="primary">
          <Toolbar>
            <Grid container justifyContent="left" wrap="wrap">
              <Grid item xs={6}>
                <Typography variant="h6">Dashboard</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {userDataHeader.map((userHeaderItem) => (
                  <TableCell>{userHeaderItem}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((userData) => (
                <TableRow
                  key={userData.name}
                  sss
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{userData.id}</TableCell>
                  <TableCell align="left">{userData.name}</TableCell>
                  <TableCell align="left">{userData.username}</TableCell>
                  <TableCell align="left">{userData.email}</TableCell>
                  <TableCell align="left">{userData.phone}</TableCell>
                  <TableCell align="left">{userData.website}</TableCell>
                  <TableCell align="left">{userData.company.name}</TableCell>
                  <TableCell align="left">{userData.address.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

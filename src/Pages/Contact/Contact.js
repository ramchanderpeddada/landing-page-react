import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <Card
      style={{
        maxWidth: 600,
        margin: "0 auto 22rem",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h2" align="center">
          Contact Us
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={24} sm={12}>
            <TextField
              label="First Name"
              placeholder="Enter First Name"
              fullWidth
              required
              color="secondary"
            />
          </Grid>
          <Grid item xs={24} sm={12}>
            <TextField
              label="Last Name"
              placeholder="Enter Last Name"
              fullWidth
              required
              color="secondary"
            />
          </Grid>
          <Grid item xs={24} sm={12}>
            <TextField
              type="email"
              label="Email"
              placeholder="Enter Email"
              fullWidth
              required
              color="secondary"
            />
          </Grid>
          <Grid item xs={24} sm={12}>
            <TextField
              type="number"
              label="Phone "
              placeholder="Enter Phone Number"
              fullWidth
              required
              color="secondary"
            />
          </Grid>
          <Grid item xs={24} sm={12}>
            <TextField
              label="Message "
              placeholder="Type your message Here"
              fullWidth
              required
              color="secondary"
            />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ margin: "10px auto", fontSize: "16px" }}
          >
            Submit
          </Button>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Contact;

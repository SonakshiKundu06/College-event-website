import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Paper,
  Stack
} from "@mui/material";
import './App.css'; 
import { Email, Phone, LocationOn } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";


const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/details">Event Details</Button>
        <Button color="inherit" component={Link} to="/register">Register</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Box>
    </Toolbar>
  </AppBar>
);

const Home = () => (
  <Container className="page-container home" sx={{ mt: 2 }}>
    <Typography variant="h3" gutterBottom>UPES-CSI Hackathon 9.0</Typography>
    <Typography variant="h6" gutterBottom>"Code. Create. Conquer."</Typography>
    <Typography paragraph>
      Join us for an exhilarating 24-hour coding marathon bringing tech enthusiasts together to innovate and solve real-world problems.
    </Typography>
    <Typography>Date: 5th - 6th August, 2025</Typography>
    <Typography>Time: 10:00 AM onwards</Typography>
    <Typography>Venue: University of petroleum and energy studies, Auditorium Hall, bhidholi Campus</Typography>
    <Button variant="contained" color="primary" component={Link} to="/register" sx={{ mt: 2 }}>
      Register Now
    </Button>
    <Box mt={13} mb={2}>
      <Typography variant="body2">
        Copyright © 2024 All rights reserved | <br />
        Designed and Developed by UPES CSI Technical Team
      </Typography>
    </Box>
  </Container>
);

const EventDetails = () => (
  <Container className="page-container" sx={{ mt: 2 }}>
    <Typography variant="h4" gutterBottom>Event Details</Typography>
    <Typography paragraph>
       Hackathon 9.0 is an National event where developers collaborate intensively to solve real-world problems.
    </Typography>
    <Typography variant="h6">Schedule</Typography>
    <ul>
      <li>10:00 AM - Inauguration</li>
      <li>11:00 AM - Present Solution</li>
      <li>12:00 AM - Round 1 Results Announcement</li>
      <li>8:00 PM - Dinner Break</li>
      <li>8:30 AM Next Day - Presentations</li>
      <li>11:00 AM - Final Results Announcement</li>
    </ul>
    <Typography variant="h6">Rules & Guidelines</Typography>
    <ul>
      <li>Teams of up to 2-4 members</li>
      <li>No pre-written code allowed</li>
      <li>Respect timelines and Judges</li>
    </ul>
    <Typography variant="h6">Prizes</Typography>
    <ul>
      <li>1st Prize: ₹50,000</li>
      <li>2nd Prize: ₹30,000</li>
      <li>3rd Prize: ₹20,000</li>
      <li>Exciting Prizes for top 10 teams!</li>
    </ul>
  </Container>
);

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", college: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (form.name && form.email && form.phone && form.college) {
      setSubmitted(true);
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <Container className="page-container" sx={{ mt: 2 }}>
      <Typography variant="h4" gutterBottom>Register</Typography>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <TextField fullWidth className="white-input" margin="normal" label="Name" name="name" onChange={handleChange} />
          <TextField fullWidth className="white-input" margin="normal" label="Email" name="email" onChange={handleChange} />
          <TextField fullWidth className="white-input" margin="normal" label="Phone" name="phone" onChange={handleChange} />
          <TextField fullWidth className="white-input" margin="normal" label="College" name="college" onChange={handleChange} />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Submit</Button>
        </form>
      ) : (
        <Typography variant="h6" color="green">Thank you for registering!</Typography>
      )}
    </Container>
  );
};

const Contact = () => (
  <Container className="page-container" sx={{ mt: 2, textAlign: "center", color: "white" }}>
    <Typography variant="h4" gutterBottom>Contact Us</Typography>

    {/* Original Info */}
    <Typography>Email: support@hackathon.in</Typography>
    <Typography>Phone: +91-9876543210</Typography>
    <Typography>Venue: University of petroleum and energy studies, Mac, bhidholi Campus</Typography>

    {/* Follow Us */}
    <Box mt={5}>
      <Typography variant="h6" gutterBottom>Follow us!</Typography>
      <Stack direction="row" justifyContent="center" spacing={3} mt={1}>
        <Link href="#" color="inherit"><InstagramIcon /></Link>
        <Link href="#" color="inherit"><LinkedInIcon /></Link>
        <Link href="#" color="inherit"><YouTubeIcon /></Link>
        <Link href="#" color="inherit"><FacebookIcon /></Link>
        <Link href="#" color="inherit"><TwitterIcon /></Link>
      </Stack>
    </Box>

    {/* Address Section */}
    <Box mt={4}>
      <Typography variant="body1"><LocationOn sx={{ verticalAlign: "middle" }} /> SOCS, University of Petroleum & Energy Studies, Dehradun</Typography>
    </Box>

    {/* Contact Numbers */}
    <Box mt={2}>
      <Typography variant="body1"><Phone sx={{ verticalAlign: "middle" }} /> +91 98868 48290</Typography>
      <Typography variant="body1"><Phone sx={{ verticalAlign: "middle" }} /> +91 66181 37437</Typography>
    </Box>

    {/* Email */}
    <Box mt={2}>
      <Typography variant="body1"><Email sx={{ verticalAlign: "middle" }} /> support@upescsi.in</Typography>
    </Box>

    {/* Footer */}
    <Box mt={4} mb={2}>
      <Typography variant="body2">
        Copyright © 2024 All rights reserved | <br />
        Designed and Developed by UPES CSI Technical Team
      </Typography>
    </Box>
  </Container>
);


export default function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<EventDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
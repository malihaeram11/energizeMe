import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box width= "400px" sx={{width: {xl: '1488px'}}} m= "auto">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
      
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
};

export default App;

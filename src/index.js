import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import {
  Box,
  Grid,
  Container,
  Paper,
  useMediaQuery,
  Typography,
  Hidden,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Tooltip,
} from "@mui/material";


const Dashboard = () => {

  const matches = useMediaQuery(
    json2mq({
      minWidth: 1600,
    })
  );

  const matches1 = useMediaQuery(
    json2mq({
      minWidth: 500,
    })
  );
  
  return (
    
      <Box
        sx={{
          maxWidth: "1200px",
          py: matches1 ? "40px" : "24px",

          paddingLeft: matches ? 4.2 : "15px",
          paddingRight: matches ? 3.8 : "15px",
          backgroundColor: "#E5E5E5",
        }}
      >
       
        <Grid container spacing={3}>
         
          
         
        </Grid>
        
      </Box>

  )
};

export default Dashboard;

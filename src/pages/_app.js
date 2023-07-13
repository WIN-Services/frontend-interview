import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import {
  Box,
  CssBaseline,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createEmotionCache } from "../utils/create-emotion-cache";
import "../theme/styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

import { theme } from "../theme";
import { useRouter } from "next/router";
import json2mq from "json2mq";
import getConfig from "next/config";
import { ToastContainer, toast } from "react-toastify";
const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { publicRuntimeConfig } = getConfig();

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);



  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    })
  );





  return (
    <CacheProvider value={emotionCache}>
      <Head>
      
       
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
     
      </Head>


      
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer position="top-right" autoClose={700} />
            
              {getLayout(<Component {...pageProps} />)}
            
          </ThemeProvider>
       
      
    </CacheProvider>
  );
};

export default App;

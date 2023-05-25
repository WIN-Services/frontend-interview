import React from 'react';
import "./index.css";
import {ThemeProvider} from "@material-ui/core";
import Screens from "./screens";
import {theme} from "./config/theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Screens/>
        </ThemeProvider>
    );
}
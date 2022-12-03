import { Box } from "@mui/material";
import FormDisplay from "./components/FormDisplay";
import './app.css'
import Footercomponent from "./components/Footercomponent";


function App() {
  return (
    <Box sx={{margin:"90px 150px"}}>
      <FormDisplay/>
      <Footercomponent/>
    </Box>
  );
}

export default App;

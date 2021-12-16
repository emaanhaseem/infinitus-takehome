import GroupCategories from './components/GroupCategories'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



function App() {
  return (
    <div>
       <CssBaseline />
       <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            AI Capabilities
          </Typography>
        </Toolbar>
      </AppBar>
      <GroupCategories />
    </div>
  );
}

export default App;

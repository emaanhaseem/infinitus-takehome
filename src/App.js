import GroupCategories from './components/GroupCategories'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



function App() {
  return (
    <div>
       <CssBaseline />
       <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Infinitus Systems
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Infinitus System's
            </Typography>
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              AI Capabilities
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              
            </Typography>
          </Container>
          <Container maxWidth="md">
            <GroupCategories />
          </Container>
    </div>
  );
}

export default App;

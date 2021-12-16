import GroupCategories from './components/GroupCategories'
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

/*

Includes our Toolbar and Title description

*/

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
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
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
          </Box>
          <Container maxWidth="md">
            <GroupCategories />
          </Container>
    </div>
  );
}

export default App;

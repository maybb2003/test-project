import { useState } from 'react'
import Box from "@mui/material/Box";
import './App.css'
import { Fab } from '@mui/material';
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <h1>Vite + React</h1>
      <Box className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Box>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Box>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
      </Box>
    </Box>
  );
}

export default App

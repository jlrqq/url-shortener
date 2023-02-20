import './App.css';
import { useState, useEffect, useRef } from 'react';
import { Box, Grid, Alert } from '@mui/material';
import TextFields from './components/inputField';
import Buttons from './components/button';
import Typed from 'typed.js';

const backgroundStyles = {
  paperContainer: {
    width: "100%",
    height: "100vh",
    backgroundColor: '#002D70',
    backgroundSize: 'fit',
    backgroundPosition: 'top',
  }
}

const boxStyles = {
  boxContainer: {
    fontSize: 50, 
    color: '#FFF', 
    display: 'flex', 
    justifyContent:'center', 
    py: 10
  },
  gridContainer: {
    width: 500,
    height: 300,
    borderRadius: 5,
    margin: 'auto',
    background: `linear-gradient(to right, #F66E1A, #743EE3)`,
    '&:hover': {
      background: 'primary.main',
      opacity: [0.9, 0.8, 0.7],
    },
  }
}

function App() {

  const el = useRef(null);
  const [url, setURL] = useState(false);
  
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    console.log(text);
  };


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to Cut Link!"], // Strings to display
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div style={backgroundStyles.paperContainer}>
      <Box sx={boxStyles.boxContainer}>
        <span ref={el}></span>
      </Box>
      <Grid container
        sx={boxStyles.gridContainer}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <TextFields value={text} handleChange={handleChange}></TextFields>
        </Grid>
        { url ? <Grid item xs={12}>
          <Alert onClose={() => {}} sx = {{ mx: 5 }}>The cut link is ____ — check it out!</Alert>
        </Grid>  : null }
        <Grid item xs={12}>
          <Buttons text="Submit" handleClick={handleClick}></Buttons>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Box, Grid, Alert, Link } from '@mui/material';
import TextFields from './inputField';
import Buttons from './button';
import Typed from 'typed.js';
import brand from "../assets/brand.png";

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
    imageContainer: {
        width: "150px",
        height: "80px",
        paddingTop: 2,
        marginLeft: 5,
        display: 'flex',
        justifyContent: 'left'
    },
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

function Home() {

  const el = useRef(null);
  const [url, setURL] = useState(false);
  
  const [text, setText] = useState('');
  const [shortCode, setShortcode] = useState(null);
  const [newUrl, setNewUrl] = useState('');
  const [oldUrl, setOldUrl] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    // console.log(text);

    axios.post('http://localhost:5000/shorten', {
      url: text,
    })
    .then(function (response) {
    //   console.log(response);
      if (response.status === 200) {
        setURL(true);
        setShortcode(response.data.shortCode);
        setNewUrl(response.data.shortUrl)
        handleUrl(response.data.shortCode)
      }
    })
    .catch(function (error) {
    //   console.log(error);
    });
  };

  const handleUrl = async (shortCode) => {

    try {
      const response = await axios.get(`http://localhost:5000/${shortCode}`);
    //   console.log(response);
      if (response.status === 200) {
        // console.log(response.data.longUrl);
        setOldUrl(response.data.longUrl);
      }
    } catch (error) {
    //   console.log(error);
    }
  }


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to Cut Link!", "Cut Link helps to shorten your links!", "Try it!"], // Strings to display
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
        <Box sx={boxStyles.imageContainer}>
            <img src={brand} alt="brand icon" sx={{ width: "150px", height: "80px" }}></img>
        </Box>
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
                <Alert onClose={() => { setURL(false) }} sx = {{ mx: 5 }}>The cut link is <Link href={oldUrl} target='_blank' rel="noopener noreferrer">{newUrl}</Link> — check it out!</Alert>
            </Grid>  : null }
            <Grid item xs={12}>
                <Buttons text="Submit" handleClick={handleClick}></Buttons>
            </Grid>
        </Grid>
    </div>
  );
}

export default Home;
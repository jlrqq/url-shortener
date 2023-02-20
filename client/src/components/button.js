import Button from '@mui/material/Button';

const shortenURL = () => {
    
}

export default function Buttons() {
  return (
    <Button variant="contained" onClick={shortenURL} sx={{ mx: 5 }}>Shorten URL</Button>
  );
}
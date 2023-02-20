import Button from '@mui/material/Button';

export default function Buttons(props) {

    return (
        <Button variant="contained" onClick={props.handleClick} sx={{ mx: 5 }}>Shorten URL</Button>
    );
}
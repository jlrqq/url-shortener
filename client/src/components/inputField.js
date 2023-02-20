import { React } from 'react';
import TextField from '@mui/material/TextField';

export default function TextFields(props) {

    return (
        <TextField id="long-url" label="Enter a long URL" variant="outlined" value={props.text} onChange={props.handleChange} sx={{ width: 400, mx: 5 }} />
    );
}
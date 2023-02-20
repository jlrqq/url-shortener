import { React, useState } from 'react';
import TextField from '@mui/material/TextField';

export default function TextFields() {

    const [text, SetText] = useState('')

    return (
        <TextField id="long-url" label="Enter a long URL" variant="outlined" value={text} sx={{ width: 400, mx: 5 }} />
    );
}
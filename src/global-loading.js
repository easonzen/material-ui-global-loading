import * as React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export default function SimpleBackdrop({ open }) {
    return (
        <Backdrop
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    );
}

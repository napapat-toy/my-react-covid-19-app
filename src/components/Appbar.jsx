import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'

function Appbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                    >
                        Covid-19 App
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Appbar
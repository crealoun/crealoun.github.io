// display a button to change the theme
import React from 'react'
import { ColorModeContext } from '../contexts/ThemeContext'
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const HeaderLayout = () => {

    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                position: 'fixed',
                top: 0,
                width: '100%',
                alignItems: 'center',
                bgcolor: 'transparent',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    )
}

export default HeaderLayout
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AppBar from '@mui/material/AppBar'
import MenuIcon from '@mui/icons-material/Menu'
import { useColorMode } from './mui/ThemeProvider'
import ButtonsDemo from './components/ButtonsDemo'
import CardsDemo from './components/CardsDemo'
import AppBarDemo from './components/AppBarDemo'
import FormDemo from './components/FormDemo'
import DialogDemo from './components/DialogDemo'
import TableDemo from './components/TableDemo'
import ProductsDemo from './components/ProductsDemo'

const sections = [
    'AppBar',
    'Buttons',
    'Cards',
    'Table',
    'Form',
    'Dialog',
    'CRUD',
]

export default function Demo() {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState('AppBar')
    const { toggleColorMode } = useColorMode()

    function renderSection() {
        switch (selected) {
            case 'Buttons':
                return <ButtonsDemo />
            case 'Cards':
                return <CardsDemo />
            case 'Table':
                return <TableDemo />
            case 'Form':
                return <FormDemo />
            case 'Dialog':
                return <DialogDemo />
            case 'CRUD':
                return <ProductsDemo />
            default:
                return <AppBarDemo />
        }
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        edge="start"
                        onClick={() => setOpen(true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Demostración de Material Design
                    </Typography>
                    <Box component="span" sx={{ cursor: 'pointer' }} onClick={toggleColorMode}>
                        <Typography variant="body2">Toggle theme</Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box sx={{ width: 240 }} role="presentation" onClick={() => setOpen(false)}>
                    <List>
                        {sections.map((text) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => setSelected(text)}>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container maxWidth="lg">
                    {renderSection()}
                </Container>
            </Box>
        </Box>
    )
}

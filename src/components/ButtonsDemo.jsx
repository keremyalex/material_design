import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Fab from '@mui/material/Fab'
import LoadingButton from '@mui/lab/LoadingButton'
import ButtonGroup from '@mui/material/ButtonGroup'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import SaveIcon from '@mui/icons-material/Save'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'

export default function ButtonsDemo() {
    const [loading, setLoading] = useState(false)
    const [formats, setFormats] = useState(['bold'])

    const handleFormatChange = (event, newFormats) => {
        setFormats(newFormats)
    }

    const handleLoadingClick = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)
    }

    return (
        <Box sx={{ '& > *': { mb: 3 } }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Botones - Material Design
            </Typography>

            {/* Variantes básicas */}
            <Box>
                <Typography variant="h6" gutterBottom>Variantes básicas</Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Button variant="contained">Contained</Button>
                    <Button variant="outlined">Outlined</Button>
                    <Button variant="text">Text</Button>
                </Stack>
            </Box>

            <Divider />

            {/* Colores */}
            <Box>
                <Typography variant="h6" gutterBottom>Colores</Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="contained" color="primary">Primary</Button>
                    <Button variant="contained" color="secondary">Secondary</Button>
                    <Button variant="contained" color="success">Success</Button>
                    <Button variant="contained" color="error">Error</Button>
                    <Button variant="contained" color="warning">Warning</Button>
                    <Button variant="contained" color="info">Info</Button>
                </Stack>
            </Box>

            <Divider />

            {/* Tamaños */}
            <Box>
                <Typography variant="h6" gutterBottom>Tamaños</Typography>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <Button size="small" variant="contained">Small</Button>
                    <Button size="medium" variant="contained">Medium</Button>
                    <Button size="large" variant="contained">Large</Button>
                </Stack>
            </Box>

            <Divider />

            {/* Botones con iconos */}
            <Box>
                <Typography variant="h6" gutterBottom>Botones con iconos</Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="contained" startIcon={<SendIcon />}>Enviar</Button>
                    <Button variant="contained" endIcon={<SaveIcon />}>Guardar</Button>
                    <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
                        Eliminar
                    </Button>
                    <Button variant="text" startIcon={<EditIcon />}>Editar</Button>
                </Stack>
            </Box>

            <Divider />

            {/* Icon Buttons */}
            <Box>
                <Typography variant="h6" gutterBottom>Icon Buttons</Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <IconButton color="primary" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="favorite">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton color="success" aria-label="add">
                        <AddIcon />
                    </IconButton>
                    <IconButton color="error" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                </Stack>
            </Box>

            <Divider />

            {/* Floating Action Buttons */}
            <Box>
                <Typography variant="h6" gutterBottom>Floating Action Buttons (FAB)</Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon />
                    </Fab>
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon />
                    </Fab>
                    <Fab variant="extended">
                        <AddIcon sx={{ mr: 1 }} />
                        Crear nuevo
                    </Fab>
                </Stack>
            </Box>

            <Divider />

            {/* Loading Buttons */}
            <Box>
                <Typography variant="h6" gutterBottom>Loading Buttons</Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <LoadingButton
                        loading={loading}
                        variant="contained"
                        onClick={handleLoadingClick}
                    >
                        Cargar datos
                    </LoadingButton>
                    <LoadingButton
                        loading={loading}
                        loadingIndicator="Cargando..."
                        variant="outlined"
                        onClick={handleLoadingClick}
                    >
                        Procesar
                    </LoadingButton>
                    <LoadingButton
                        loading={loading}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                        onClick={handleLoadingClick}
                    >
                        Guardar
                    </LoadingButton>
                </Stack>
            </Box>

            <Divider />

            {/* Button Groups */}
            <Box>
                <Typography variant="h6" gutterBottom>Button Groups</Typography>
                <Stack spacing={2} sx={{ mb: 2 }}>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>Uno</Button>
                        <Button>Dos</Button>
                        <Button>Tres</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        <Button>Izquierda</Button>
                        <Button>Centro</Button>
                        <Button>Derecha</Button>
                    </ButtonGroup>
                </Stack>
            </Box>

            <Divider />

            {/* Toggle Buttons */}
            <Box>
                <Typography variant="h6" gutterBottom>Toggle Buttons</Typography>
                <ToggleButtonGroup
                    value={formats}
                    onChange={handleFormatChange}
                    aria-label="text formatting"
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Divider />

            {/* Estados especiales */}
            <Box>
                <Typography variant="h6" gutterBottom>Estados especiales</Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
                    <Button variant="contained" disabled>
                        Deshabilitado
                    </Button>
                    <Button variant="outlined" disabled>
                        Deshabilitado
                    </Button>
                    <Button variant="text" disabled>
                        Deshabilitado
                    </Button>
                </Stack>
            </Box>

            <Divider />

            {/* Botón de upload */}
            <Box>
                <Typography variant="h6" gutterBottom>Botón de carga de archivos</Typography>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                >
                    Subir archivo
                    <input type="file" hidden />
                </Button>
            </Box>
        </Box>
    )
}

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Snackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'
import Grow from '@mui/material/Grow'
import Fade from '@mui/material/Fade'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import WarningIcon from '@mui/icons-material/Warning'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import InfoIcon from '@mui/icons-material/Info'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function DialogDemo() {
    const [dialogs, setDialogs] = useState({
        basic: false,
        form: false,
        confirmation: false,
        fullscreen: false,
        custom: false,
        alert: false,
        scrollable: false
    })

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    })

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subscribe: false
    })

    const openDialog = (type) => {
        setDialogs(prev => ({ ...prev, [type]: true }))
    }

    const closeDialog = (type) => {
        setDialogs(prev => ({ ...prev, [type]: false }))
    }

    const showSnackbar = (message, severity = 'success') => {
        setSnackbar({ open: true, message, severity })
    }

    const handleFormSubmit = () => {
        console.log('Form submitted:', formData)
        closeDialog('form')
        showSnackbar('Información guardada correctamente', 'success')
    }

    const handleDelete = () => {
        closeDialog('confirmation')
        showSnackbar('Elemento eliminado', 'info')
    }

    return (
        <Box sx={{ '& > *': { mb: 4 } }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Dialogs y Feedback - Material Design
            </Typography>

            {/* Botones para abrir diferentes tipos de diálogos */}
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => openDialog('basic')}
                    >
                        Diálogo básico
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => openDialog('form')}
                    >
                        Diálogo con formulario
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="outlined"
                        color="error"
                        fullWidth
                        onClick={() => openDialog('confirmation')}
                    >
                        Confirmar eliminación
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => openDialog('fullscreen')}
                    >
                        Pantalla completa
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => openDialog('custom')}
                    >
                        Diálogo personalizado
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => openDialog('alert')}
                    >
                        Diálogo de alerta
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => openDialog('scrollable')}
                    >
                        Contenido largo
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button
                        variant="outlined"
                        fullWidth
                        onClick={() => showSnackbar('¡Notificación de prueba!', 'info')}
                    >
                        Mostrar Snackbar
                    </Button>
                </Grid>
            </Grid>

            <Divider />

            {/* Ejemplos de alerts estáticos */}
            <Box>
                <Typography variant="h6" gutterBottom>Alerts</Typography>
                <Box sx={{ display: 'grid', gap: 2 }}>
                    <Alert severity="success">
                        <AlertTitle>Éxito</AlertTitle>
                        La operación se completó correctamente.
                    </Alert>

                    <Alert severity="info">
                        <AlertTitle>Información</AlertTitle>
                        Aquí tienes información importante.
                    </Alert>

                    <Alert severity="warning">
                        <AlertTitle>Advertencia</AlertTitle>
                        Ten cuidado con esta acción.
                    </Alert>

                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Ocurrió un error durante el proceso.
                    </Alert>

                    <Alert
                        severity="info"
                        action={
                            <Button color="inherit" size="small">
                                Deshacer
                            </Button>
                        }
                    >
                        Alert con acción personalizada.
                    </Alert>
                </Box>
            </Box>

            {/* Diálogo básico */}
            <Dialog open={dialogs.basic} onClose={() => closeDialog('basic')}>
                <DialogTitle>Diálogo básico</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Este es un ejemplo de diálogo básico de Material Design.
                        Puedes usar diálogos para mostrar información importante o
                        solicitar confirmación del usuario.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeDialog('basic')}>Cerrar</Button>
                    <Button onClick={() => closeDialog('basic')} variant="contained" autoFocus>
                        Entendido
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Diálogo con formulario */}
            <Dialog open={dialogs.form} onClose={() => closeDialog('form')} maxWidth="sm" fullWidth>
                <DialogTitle>Registro de usuario</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ mb: 2 }}>
                        Completa la siguiente información para crear tu cuenta.
                    </DialogContentText>
                    <Box sx={{ display: 'grid', gap: 2, pt: 1 }}>
                        <TextField
                            autoFocus
                            label="Nombre completo"
                            fullWidth
                            variant="outlined"
                            value={formData.name}
                            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                        <TextField
                            label="Correo electrónico"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={formData.subscribe}
                                    onChange={(e) => setFormData(prev => ({ ...prev, subscribe: e.target.checked }))}
                                />
                            }
                            label="Deseo recibir notificaciones por email"
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeDialog('form')}>Cancelar</Button>
                    <Button onClick={handleFormSubmit} variant="contained">
                        Crear cuenta
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Diálogo de confirmación */}
            <Dialog open={dialogs.confirmation} onClose={() => closeDialog('confirmation')}>
                <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <WarningIcon color="error" />
                    Confirmar eliminación
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        ¿Estás seguro de que deseas eliminar este elemento?
                        Esta acción no se puede deshacer.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeDialog('confirmation')}>
                        Cancelar
                    </Button>
                    <Button onClick={handleDelete} color="error" variant="contained" autoFocus>
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Diálogo de pantalla completa */}
            <Dialog
                fullScreen
                open={dialogs.fullscreen}
                onClose={() => closeDialog('fullscreen')}
                TransitionComponent={Transition}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Paper elevation={4} sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6">
                            Diálogo de pantalla completa
                        </Typography>
                        <IconButton onClick={() => closeDialog('fullscreen')}>
                            <CloseIcon />
                        </IconButton>
                    </Paper>

                    <Box sx={{ flex: 1, p: 3, overflow: 'auto' }}>
                        <Typography variant="body1" paragraph>
                            Este es un diálogo que ocupa toda la pantalla. Es útil para
                            formularios complejos o contenido que requiere más espacio.
                        </Typography>

                        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                            Contenido del formulario
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <TextField label="Campo 1" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField label="Campo 2" fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Descripción"
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Box>

                    <Paper elevation={4} sx={{ p: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        <Button onClick={() => closeDialog('fullscreen')}>
                            Cancelar
                        </Button>
                        <Button variant="contained" onClick={() => closeDialog('fullscreen')}>
                            Guardar
                        </Button>
                    </Paper>
                </Box>
            </Dialog>

            {/* Diálogo personalizado */}
            <Dialog
                open={dialogs.custom}
                onClose={() => closeDialog('custom')}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        minWidth: 400
                    }
                }}
            >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                    <CheckCircleIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                    <Typography variant="h5" gutterBottom>
                        ¡Proceso completado!
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                        La operación se ha realizado exitosamente.
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => closeDialog('custom')}
                        sx={{ mt: 2, minWidth: 120 }}
                    >
                        Continuar
                    </Button>
                </Box>
            </Dialog>

            {/* Diálogo de alerta */}
            <Dialog open={dialogs.alert} onClose={() => closeDialog('alert')}>
                <DialogContent sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 3 }}>
                    <InfoIcon color="primary" sx={{ fontSize: 40 }} />
                    <Box>
                        <Typography variant="h6" gutterBottom>
                            Nueva actualización disponible
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Hay una nueva versión de la aplicación.
                            ¿Deseas actualizar ahora?
                        </Typography>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeDialog('alert')}>
                        Más tarde
                    </Button>
                    <Button onClick={() => closeDialog('alert')} variant="contained">
                        Actualizar
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Diálogo con contenido largo */}
            <Dialog
                open={dialogs.scrollable}
                onClose={() => closeDialog('scrollable')}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle>Términos y condiciones</DialogTitle>
                <DialogContent dividers>
                    <Typography variant="body2" paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>

                    <List>
                        {Array.from({ length: 20 }, (_, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`Término ${index + 1}`}
                                    secondary="Descripción detallada del término y condiciones de uso."
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Typography variant="body2" paragraph>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeDialog('scrollable')}>
                        Rechazar
                    </Button>
                    <Button onClick={() => closeDialog('scrollable')} variant="contained">
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            >
                <Alert
                    onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}
                    severity={snackbar.severity}
                    variant="filled"
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    )
}

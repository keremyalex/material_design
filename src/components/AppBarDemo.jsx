import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Chip from '@mui/material/Chip'
import LinearProgress from '@mui/material/LinearProgress'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MoreIcon from '@mui/icons-material/MoreVert'
import CodeExample from './CodeExample'

export default function AppBarDemo() {
    const [progress, setProgress] = useState(75)

    return (
        <Box sx={{ '& > *': { mb: 4 } }}>
            <Typography variant="h4" component="h2" gutterBottom>
                AppBar y Surfaces - Material Design
            </Typography>

            {/* AppBar ejemplos */}
            <Box>
                <Typography variant="h6" gutterBottom>Ejemplos de AppBar</Typography>

                {/* AppBar básica */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>AppBar básica</Typography>
                    <CodeExample
                        title="AppBar básica"
                        orientation="side"
                        defaultShow={false}
                        code={`<AppBar position="static" sx={{ mb: 2 }}>
  <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Aplicación Demo
      </Typography>
      <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>`}
                    >
                        <AppBar position="static" sx={{ mb: 2 }}>
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Aplicación Demo
                                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </CodeExample>
                </Box>

                {/* AppBar con iconos y badges */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>AppBar con iconos y notificaciones</Typography>
                    <CodeExample
                        title="AppBar con badges"
                        orientation="side"
                        defaultShow={false}
                        code={`<AppBar position="static" sx={{ mb: 2 }}>
  <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
      </Typography>
      <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
              <MailIcon />
          </Badge>
      </IconButton>
      <IconButton color="inherit">
          <Badge badgeContent={17} color="error">
              <NotificationsIcon />
          </Badge>
      </IconButton>
      <IconButton edge="end" color="inherit">
          <AccountCircle />
      </IconButton>
  </Toolbar>
</AppBar>`}
                    >
                        <AppBar position="static" sx={{ mb: 2 }}>
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Dashboard
                                </Typography>
                                <IconButton color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton color="inherit">
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton edge="end" color="inherit">
                                    <AccountCircle />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </CodeExample>
                </Box>

                {/* AppBar con barra de búsqueda */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>AppBar con búsqueda</Typography>
                    <CodeExample
                        title="AppBar con búsqueda"
                        orientation="side"
                        defaultShow={false}
                        code={`<AppBar position="static" sx={{ mb: 2 }}>
  <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          Buscar
      </Typography>
      <Box sx={{
          position: 'relative',
          borderRadius: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
          marginLeft: 0,
          width: '100%',
          maxWidth: '400px'
      }}>
          <Box sx={{
              padding: '0 16px',
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
          }}>
              <SearchIcon />
          </Box>
          <input
              placeholder="Buscar..."
              style={{
                  color: 'inherit',
                  width: '100%',
                  padding: '8px 8px 8px 48px',
                  border: 'none',
                  background: 'transparent',
                  outline: 'none'
              }}
          />
      </Box>
      <IconButton color="inherit" sx={{ ml: 'auto' }}>
          <MoreIcon />
      </IconButton>
  </Toolbar>
</AppBar>`}
                    >
                        <AppBar position="static" sx={{ mb: 2 }}>
                            <Toolbar>
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                                    Buscar
                                </Typography>
                                <Box sx={{
                                    position: 'relative',
                                    borderRadius: 1,
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.25)' },
                                    marginLeft: 0,
                                    width: '100%',
                                    maxWidth: '400px'
                                }}>
                                    <Box sx={{
                                        padding: '0 16px',
                                        height: '100%',
                                        position: 'absolute',
                                        pointerEvents: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <SearchIcon />
                                    </Box>
                                    <input
                                        placeholder="Buscar..."
                                        style={{
                                            color: 'inherit',
                                            width: '100%',
                                            padding: '8px 8px 8px 48px',
                                            border: 'none',
                                            background: 'transparent',
                                            outline: 'none'
                                        }}
                                    />
                                </Box>
                                <IconButton color="inherit" sx={{ ml: 'auto' }}>
                                    <MoreIcon />
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </CodeExample>
                </Box>

                {/* AppBar con progress */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" gutterBottom>AppBar con indicador de progreso</Typography>
                    <CodeExample
                        title="AppBar con progreso"
                        orientation="side"
                        defaultShow={false}
                        code={`<AppBar position="static" sx={{ mb: 2 }}>
  <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Cargando contenido...
      </Typography>
      <Typography variant="body2" sx={{ mr: 2 }}>
          {progress}%
      </Typography>
  </Toolbar>
  <LinearProgress variant="determinate" value={progress} />
</AppBar>`}
                    >
                        <AppBar position="static" sx={{ mb: 2 }}>
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Cargando contenido...
                                </Typography>
                                <Typography variant="body2" sx={{ mr: 2 }}>
                                    {progress}%
                                </Typography>
                            </Toolbar>
                            <LinearProgress variant="determinate" value={progress} />
                        </AppBar>
                    </CodeExample>
                </Box>
            </Box>

            <Divider />

            {/* Diferentes elevaciones */}
            <Box>
                <Typography variant="h6" gutterBottom>Elevaciones de superficie</Typography>
                <Grid container spacing={3}>
                    {[0, 1, 3, 6, 12, 24].map((elevation) => (
                        <Grid item xs={6} sm={4} md={2} key={elevation}>
                            <Paper
                                elevation={elevation}
                                sx={{
                                    p: 3,
                                    textAlign: 'center',
                                    height: '120px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center'
                                }}
                            >
                                <Typography variant="h6" gutterBottom>
                                    {elevation}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Elevation
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider />

            {/* Surfaces con contenido */}
            <Box>
                <Typography variant="h6" gutterBottom>Surfaces con contenido</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper elevation={2} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Surface interactiva
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Las surfaces de Material Design proporcionan una base visual clara
                                para organizar el contenido y crear jerarquía visual.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                <Chip label="Material Design" color="primary" variant="outlined" />
                                <Chip label="Elevation" color="secondary" variant="outlined" />
                                <Chip label="Surface" color="default" variant="outlined" />
                            </Box>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper elevation={4} sx={{ p: 3 }}>
                            <Typography variant="h6" gutterBottom>
                                Surface elevada
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Mayor elevación sugiere mayor importancia o interactividad del elemento.
                            </Typography>
                            <Button variant="contained" fullWidth>
                                Acción principal
                            </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            {/* Variantes de color */}
            <Box>
                <Typography variant="h6" gutterBottom>AppBar con diferentes colores</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    {['default', 'primary', 'secondary', 'inherit'].map((color) => (
                        <AppBar key={color} position="static" color={color} sx={{ mb: 1 }}>
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    AppBar color="{color}"
                                </Typography>
                                <Button color="inherit">Acción</Button>
                            </Toolbar>
                        </AppBar>
                    ))}
                </Box>
            </Box>

            <Divider />

            {/* Cards como surfaces */}
            <Box>
                <Typography variant="h6" gutterBottom>Cards como surfaces organizacionales</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Métricas
                                </Typography>
                                <Typography variant="h4" color="primary">
                                    1,234
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Usuarios activos
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Rendimiento
                                </Typography>
                                <Typography variant="h4" color="success.main">
                                    98.5%
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Uptime del sistema
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Ingresos
                                </Typography>
                                <Typography variant="h4" color="warning.main">
                                    $45.2K
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Este mes
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

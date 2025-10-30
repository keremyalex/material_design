import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import CardHeader from '@mui/material/CardHeader'
import CardActionArea from '@mui/material/CardActionArea'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Rating from '@mui/material/Rating'
import Divider from '@mui/material/Divider'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Collapse from '@mui/material/Collapse'

export default function CardsDemo() {
    const [expanded, setExpanded] = useState({})
    const [liked, setLiked] = useState({})

    const handleExpandClick = (cardId) => {
        setExpanded(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }))
    }

    const handleLikeClick = (cardId) => {
        setLiked(prev => ({
            ...prev,
            [cardId]: !prev[cardId]
        }))
    }

    return (
        <Box sx={{ '& > *': { mb: 4 } }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Cards - Material Design
            </Typography>

            {/* Cards básicas */}
            <Box>
                <Typography variant="h6" gutterBottom>Cards básicas con media</Typography>
                <Grid container spacing={3}>
                    {[1, 2, 3].map((n) => (
                        <Grid item xs={12} sm={6} md={4} key={n}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={`https://picsum.photos/seed/${n}/400/200`}
                                    alt={`Imagen ${n}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card {n}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ejemplo de tarjeta con imagen, contenido y acciones interactivas.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton
                                        aria-label="add to favorites"
                                        onClick={() => handleLikeClick(`basic-${n}`)}
                                        color={liked[`basic-${n}`] ? 'error' : 'default'}
                                    >
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <ShareIcon />
                                    </IconButton>
                                    <Button size="small">Leer más</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider />

            {/* Cards con header y avatar */}
            <Box>
                <Typography variant="h6" gutterBottom>Cards con header y avatar</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: 'primary.main' }} aria-label="usuario">
                                        U
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="opciones">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title="Usuario Demo"
                                subheader="Hace 2 horas"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://picsum.photos/seed/user1/400/250"
                                alt="Contenido del usuario"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Esta es una publicación de ejemplo con header, avatar y timestamp.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="me gusta">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="compartir">
                                    <ShareIcon />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            {/* Cards expandibles */}
            <Box>
                <Typography variant="h6" gutterBottom>Cards expandibles</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                title="Receta especial"
                                subheader="Dificultad: Media"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://picsum.photos/seed/recipe/400/250"
                                alt="Receta"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    Una deliciosa receta que puedes preparar en casa.
                                </Typography>
                                <Box sx={{ mt: 1 }}>
                                    <Rating value={4.5} precision={0.5} readOnly size="small" />
                                </Box>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="me gusta">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="compartir">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleExpandClick('recipe')}
                                    aria-expanded={expanded.recipe}
                                    aria-label="mostrar más"
                                    sx={{
                                        marginLeft: 'auto',
                                        transform: expanded.recipe ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.3s'
                                    }}
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded.recipe} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph variant="h6">Ingredientes:</Typography>
                                    <Typography paragraph>
                                        • 2 tazas de harina<br />
                                        • 1 taza de azúcar<br />
                                        • 3 huevos<br />
                                        • 1 taza de leche
                                    </Typography>
                                    <Typography paragraph variant="h6">Preparación:</Typography>
                                    <Typography paragraph>
                                        Mezclar todos los ingredientes en un bowl grande.
                                        Hornear a 180°C por 30 minutos hasta que esté dorado.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            {/* Cards con diferentes elevaciones */}
            <Box>
                <Typography variant="h6" gutterBottom>Elevaciones</Typography>
                <Grid container spacing={3}>
                    {[0, 1, 3, 8, 16, 24].map((elevation) => (
                        <Grid item xs={6} sm={4} md={2} key={elevation}>
                            <Card elevation={elevation} sx={{ p: 2, textAlign: 'center' }}>
                                <Typography variant="h6">{elevation}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Elevation
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Divider />

            {/* Cards con acciones clickeables */}
            <Box>
                <Typography variant="h6" gutterBottom>Cards con área clickeable</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://picsum.photos/seed/clickable/400/200"
                                    alt="Card clickeable"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Card Clickeable
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Toda el área de esta card es clickeable gracias a CardActionArea.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Compartir
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

            <Divider />

            {/* Cards con chips y badges */}
            <Box>
                <Typography variant="h6" gutterBottom>Cards con chips y etiquetas</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Producto
                                    </Typography>
                                    <Chip label="Nuevo" color="success" size="small" />
                                </Box>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                    Descripción del producto con etiquetas y categorías.
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                    <Chip label="React" variant="outlined" size="small" />
                                    <Chip label="Material-UI" variant="outlined" size="small" />
                                    <Chip label="JavaScript" variant="outlined" size="small" />
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Ver detalles</Button>
                                <Button size="small">Comprar</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import Switch from '@mui/material/Switch'
import Checkbox from '@mui/material/Checkbox'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Slider from '@mui/material/Slider'
import Rating from '@mui/material/Rating'
import Autocomplete from '@mui/material/Autocomplete'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Email from '@mui/icons-material/Email'
import Phone from '@mui/icons-material/Phone'
import AttachMoney from '@mui/icons-material/AttachMoney'

const countries = [
    { code: 'BO', label: 'Bolivia' },
    { code: 'ES', label: 'España' },
    { code: 'US', label: 'Estados Unidos' },
    { code: 'CA', label: 'Canadá' },
    { code: 'AR', label: 'Argentina' },
]

const skills = ['React', 'Vue', 'Angular', 'Node.js', 'Python', 'Java', 'C#', 'Go']

export default function FormDemo() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        country: 'BO',
        age: 25,
        rating: 3,
        gender: 'other',
        notifications: true,
        newsletter: false,
        terms: false,
        selectedSkills: [],
        salary: 50000,
        priceRange: [20, 80]
    })
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState({})

    const handleInputChange = (field) => (event) => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Form submitted:', formData)
    }

    return (
        <Box sx={{ '& > *': { mb: 4 } }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Form Controls - Material Design
            </Typography>

            <Grid container spacing={4}>
                {/* Columna izquierda */}
                <Grid item xs={12} md={6}>
                    {/* Text Fields básicos */}
                    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Text Fields</Typography>
                        <Box sx={{ display: 'grid', gap: 2 }}>
                            <TextField
                                label="Nombre completo"
                                variant="outlined"
                                value={formData.name}
                                onChange={handleInputChange('name')}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Email"
                                variant="filled"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Contraseña</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={formData.password}
                                    onChange={handleInputChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Contraseña"
                                />
                            </FormControl>
                            <TextField
                                label="Teléfono"
                                variant="standard"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Phone />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Paper>

                    {/* Selects y Autocomplete */}
                    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Selects y Autocomplete</Typography>
                        <Box sx={{ display: 'grid', gap: 2 }}>
                            <FormControl fullWidth>
                                <InputLabel>País</InputLabel>
                                <Select
                                    value={formData.country}
                                    label="País"
                                    onChange={handleInputChange('country')}
                                >
                                    {countries.map((country) => (
                                        <MenuItem key={country.code} value={country.code}>
                                            {country.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <Autocomplete
                                multiple
                                options={skills}
                                value={formData.selectedSkills}
                                onChange={(event, newValue) => {
                                    setFormData(prev => ({ ...prev, selectedSkills: newValue }))
                                }}
                                renderTags={(value, getTagProps) =>
                                    value.map((option, index) => (
                                        <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                    ))
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="outlined"
                                        label="Habilidades"
                                        placeholder="Selecciona habilidades"
                                    />
                                )}
                            />
                        </Box>
                    </Paper>

                    {/* Input con formato monetario */}
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Input especializados</Typography>
                        <Box sx={{ display: 'grid', gap: 2 }}>
                            <TextField
                                label="Salario esperado"
                                type="number"
                                value={formData.salary}
                                onChange={handleInputChange('salary')}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AttachMoney />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <TextField
                                label="Comentarios"
                                multiline
                                rows={4}
                                placeholder="Escribe tus comentarios aquí..."
                            />
                        </Box>
                    </Paper>
                </Grid>

                {/* Columna derecha */}
                <Grid item xs={12} md={6}>
                    {/* Checkboxes y Switches */}
                    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Checkboxes y Switches</Typography>

                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={formData.notifications}
                                        onChange={handleInputChange('notifications')}
                                    />
                                }
                                label="Recibir notificaciones"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.newsletter}
                                        onChange={handleInputChange('newsletter')}
                                    />
                                }
                                label="Suscribirse al newsletter"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.terms}
                                        onChange={handleInputChange('terms')}
                                        color="primary"
                                    />
                                }
                                label="Acepto los términos y condiciones"
                            />
                        </FormGroup>
                    </Paper>

                    {/* Radio Buttons */}
                    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Radio Buttons</Typography>
                        <FormControl>
                            <FormLabel id="gender-radio-buttons-group-label">Género</FormLabel>
                            <RadioGroup
                                aria-labelledby="gender-radio-buttons-group-label"
                                value={formData.gender}
                                onChange={handleInputChange('gender')}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                                <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                                <FormControlLabel value="other" control={<Radio />} label="Otro" />
                                <FormControlLabel value="not-say" control={<Radio />} label="Prefiero no decir" />
                            </RadioGroup>
                        </FormControl>
                    </Paper>

                    {/* Sliders y Rating */}
                    <Paper elevation={2} sx={{ p: 3, mb: 3 }}>
                        <Typography variant="h6" gutterBottom>Sliders y Rating</Typography>
                        <Box sx={{ display: 'grid', gap: 3 }}>
                            <Box>
                                <Typography gutterBottom>Edad: {formData.age}</Typography>
                                <Slider
                                    value={formData.age}
                                    onChange={(event, newValue) => setFormData(prev => ({ ...prev, age: newValue }))}
                                    aria-labelledby="age-slider"
                                    valueLabelDisplay="auto"
                                    step={1}
                                    min={18}
                                    max={65}
                                    marks={[
                                        { value: 18, label: '18' },
                                        { value: 30, label: '30' },
                                        { value: 50, label: '50' },
                                        { value: 65, label: '65' }
                                    ]}
                                />
                            </Box>

                            <Box>
                                <Typography component="legend">Califica nuestra aplicación</Typography>
                                <Rating
                                    name="app-rating"
                                    value={formData.rating}
                                    onChange={(event, newValue) => {
                                        setFormData(prev => ({ ...prev, rating: newValue }))
                                    }}
                                />
                            </Box>

                            <Box>
                                <Typography gutterBottom>Rango de precios</Typography>
                                <Slider
                                    value={formData.priceRange}
                                    onChange={(event, newValue) => setFormData(prev => ({ ...prev, priceRange: newValue }))}
                                    valueLabelDisplay="auto"
                                    aria-labelledby="range-slider"
                                    getAriaValueText={(value) => `$${value}`}
                                />
                            </Box>
                        </Box>
                    </Paper>

                    {/* Estados de error */}
                    <Paper elevation={2} sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>Estados de validación</Typography>
                        <Box sx={{ display: 'grid', gap: 2 }}>
                            <TextField
                                error
                                label="Campo con error"
                                defaultValue="Valor inválido"
                                helperText="Este campo contiene un error."
                            />
                            <TextField
                                label="Campo normal"
                                helperText="Texto de ayuda informativo."
                            />
                            <TextField
                                label="Campo requerido"
                                required
                                helperText="Este campo es obligatorio."
                            />
                            <TextField
                                disabled
                                label="Campo deshabilitado"
                                defaultValue="No editable"
                            />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            {/* Botones de acción */}
            <Divider />
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end', mt: 3 }}>
                <Button variant="outlined" size="large">
                    Cancelar
                </Button>
                <Button variant="contained" size="large" onClick={handleSubmit}>
                    Guardar información
                </Button>
            </Box>
        </Box>
    )
}

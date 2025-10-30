import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import DialogContentText from '@mui/material/DialogContentText'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import Typography from '@mui/material/Typography'

let nextId = 100

const initialProducts = [
    { id: 1, name: 'Camisa', price: 29.99, stock: 12, category: 'Ropa' },
    { id: 2, name: 'Pantalón', price: 49.5, stock: 8, category: 'Ropa' },
    { id: 3, name: 'Zapatos', price: 89.0, stock: 5, category: 'Calzado' },
]
const categories = ['Ropa', 'Calzado', 'Accesorios', 'Electrónica']

export default function ProductsDemo() {
    const [products, setProducts] = useState(initialProducts)
    const [openDialog, setOpenDialog] = useState(false)
    const [editing, setEditing] = useState(null)
    const [form, setForm] = useState({ name: '', price: '', stock: '', category: 'Ropa' })
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' })
    const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false)
    const [deletingId, setDeletingId] = useState(null)

    function openNew() {
        setEditing(null)
        setForm({ name: '', price: '', stock: '', category: 'Ropa' })
        setOpenDialog(true)
    }

    function openEdit(product) {
        setEditing(product.id)
        setForm({ name: product.name, price: product.price, stock: product.stock, category: product.category })
        setOpenDialog(true)
    }

    function handleCloseDialog() {
        setOpenDialog(false)
    }

    function handleSave() {
        // basic validation
        if (!form.name || form.price === '' || form.stock === '') {
            setSnackbar({ open: true, message: 'Nombre, precio y stock son obligatorios', severity: 'error' })
            return
        }

        if (editing) {
            setProducts((prev) => prev.map((p) => (p.id === editing ? { ...p, ...form, price: Number(form.price), stock: Number(form.stock) } : p)))
            setSnackbar({ open: true, message: 'Producto actualizado', severity: 'success' })
        } else {
            const newProduct = { id: nextId++, ...form, price: Number(form.price), stock: Number(form.stock) }
            setProducts((prev) => [newProduct, ...prev])
            setSnackbar({ open: true, message: 'Producto creado', severity: 'success' })
        }

        setOpenDialog(false)
    }

    function handleDeleteRequest(id) {
        setDeletingId(id)
        setDeleteConfirmOpen(true)
    }

    function handleConfirmDelete() {
        if (deletingId == null) return
        setProducts((prev) => prev.filter((p) => p.id !== deletingId))
        setSnackbar({ open: true, message: 'Producto eliminado', severity: 'info' })
        setDeletingId(null)
        setDeleteConfirmOpen(false)
    }

    function handleCancelDelete() {
        setDeletingId(null)
        setDeleteConfirmOpen(false)
    }

    function handleCloseSnackbar() {
        setSnackbar((prev) => ({ ...prev, open: false }))
    }

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', px: 2, py: 2 }}>
            <Box sx={{ width: '100%', maxWidth: 900, '& > *': { mb: 4 } }}>
                <Typography variant="h4" component="h2">CRUD: Productos</Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="subtitle1">Administración simple de productos (estado local)</Typography>
                    <Button variant="contained" startIcon={<AddIcon />} onClick={openNew}>Nuevo producto</Button>
                </Box>

                <Paper>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre</TableCell>
                                    <TableCell align="right">Precio</TableCell>
                                    <TableCell align="right">Stock</TableCell>
                                    <TableCell>Categoría</TableCell>
                                    <TableCell align="right">Acciones</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((p) => (
                                    <TableRow key={p.id}>
                                        <TableCell>{p.name}</TableCell>
                                        <TableCell align="right">${p.price.toFixed(2)}</TableCell>
                                        <TableCell align="right">{p.stock}</TableCell>
                                        <TableCell>{p.category}</TableCell>
                                        <TableCell align="right">
                                            <Tooltip title="Editar">
                                                <IconButton size="small" onClick={() => openEdit(p)}>
                                                    <EditIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Eliminar">
                                                <IconButton size="small" onClick={() => handleDeleteRequest(p.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>

                <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
                    <DialogTitle>{editing ? 'Editar producto' : 'Nuevo producto'}</DialogTitle>
                    <DialogContent sx={{ display: 'grid', gap: 2, pt: 1 }}>
                        <TextField label="Nombre" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} fullWidth />
                        <TextField label="Precio" type="number" value={form.price} onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))} fullWidth />
                        <TextField label="Stock" type="number" value={form.stock} onChange={(e) => setForm((prev) => ({ ...prev, stock: e.target.value }))} fullWidth />
                        <FormControl fullWidth>
                            <InputLabel id="product-category-label">Categoría</InputLabel>
                            <Select
                                labelId="product-category-label"
                                label="Categoría"
                                value={form.category}
                                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                            >
                                {categories.map((c) => (
                                    <MenuItem key={c} value={c}>{c}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog}>Cancelar</Button>
                        <Button variant="contained" onClick={handleSave}>{editing ? 'Actualizar' : 'Crear'}</Button>
                    </DialogActions>
                </Dialog>

                <Dialog open={deleteConfirmOpen} onClose={handleCancelDelete}>
                    <DialogTitle>Confirmar eliminación</DialogTitle>
                    <DialogContent>
                        <DialogContentText>¿Estás seguro que deseas eliminar este producto?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCancelDelete}>Cancelar</Button>
                        <Button variant="contained" color="error" onClick={handleConfirmDelete}>Eliminar</Button>
                    </DialogActions>
                </Dialog>

                <Snackbar open={snackbar.open} autoHideDuration={3000} onClose={handleCloseSnackbar}>
                    <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
                        {snackbar.message}
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    )
}

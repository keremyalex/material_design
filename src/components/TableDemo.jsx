import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableSortLabel from '@mui/material/TableSortLabel'
import TablePagination from '@mui/material/TablePagination'
import Checkbox from '@mui/material/Checkbox'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import Icon from '@mui/material/Icon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein }
}

const initialRows = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
]

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) return -1
    if (b[orderBy] > a[orderBy]) return 1
    return 0
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

function BasicTable({ rows }) {
    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Calorías</TableCell>
                            <TableCell align="right">Grasas</TableCell>
                            <TableCell align="right">Carbs</TableCell>
                            <TableCell align="right">Proteína</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

function DenseTable({ rows }) {
    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Calorías</TableCell>
                            <TableCell align="right">Grasas</TableCell>
                            <TableCell align="right">Carbs</TableCell>
                            <TableCell align="right">Proteína</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">{row.name}</TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

function StickyHeaderTable({ rows }) {
    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TableContainer sx={{ maxHeight: 300 }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell align="right">Calorías</TableCell>
                            <TableCell align="right">Grasas</TableCell>
                            <TableCell align="right">Carbs</TableCell>
                            <TableCell align="right">Proteína</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.from({ length: 50 }).map((_, i) => {
                            const row = rows[i % rows.length]
                            return (
                                <TableRow key={`${row.name}-${i}`}>
                                    <TableCell component="th" scope="row">{row.name} #{i + 1}</TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

function CollapsibleRow({ row }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="subtitle1">Detalles</Typography>
                            <Typography variant="body2">Más información sobre {row.name} y su descripción extendida.</Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export default function TableDemo() {
    const [order, setOrder] = useState('asc')
    const [orderBy, setOrderBy] = useState('calories')
    const [selected, setSelected] = useState([])
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [rows, setRows] = useState(initialRows)

    const handleRequestSort = (property) => (event) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name)
            setSelected(newSelecteds)
            return
        }
        setSelected([])
    }

    const handleClick = (name) => (event) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            )
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const isSelected = (name) => selected.indexOf(name) !== -1

    const emptyRows = Math.max(0, (1 + page) * rowsPerPage - rows.length)

    const handleDeleteSelected = () => {
        setRows((prev) => prev.filter((r) => !selected.includes(r.name)))
        setSelected([])
    }

    const sortedRows = rows.slice().sort(getComparator(order, orderBy))

    return (
        <Box sx={{ '& > *': { mb: 4 } }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Tables - Material Design
            </Typography>

            <Typography variant="h6" gutterBottom>1) Tabla básica</Typography>
            <BasicTable rows={rows} />

            <Divider />

            <Typography variant="h6" gutterBottom>2) Tabla densa (dense)</Typography>
            <DenseTable rows={rows} />

            <Divider />

            <Typography variant="h6" gutterBottom>3) Sticky header (scroll)</Typography>
            <StickyHeaderTable rows={rows} />

            <Divider />

            <Typography variant="h6" gutterBottom>4) Collapsible rows</Typography>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Nombre</TableCell>
                                <TableCell align="right">Calorías</TableCell>
                                <TableCell align="right">Grasas</TableCell>
                                <TableCell align="right">Carbs</TableCell>
                                <TableCell align="right">Proteína</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <CollapsibleRow key={row.name} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>

            <Divider />

            <Typography variant="h6" gutterBottom>5) Tabla avanzada (ordenable, seleccionable y paginada)</Typography>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <Toolbar
                    sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 },
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h6">Postres</Typography>
                    <Box>
                        {selected.length > 0 ? (
                            <Tooltip title="Eliminar">
                                <IconButton onClick={handleDeleteSelected}>
                                    <DeleteIcon />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Typography variant="body2" color="text.secondary">
                                {rows.length} items
                            </Typography>
                        )}
                    </Box>
                </Toolbar>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} size="medium">
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        indeterminate={selected.length > 0 && selected.length < rows.length}
                                        checked={rows.length > 0 && selected.length === rows.length}
                                        onChange={handleSelectAllClick}
                                        inputProps={{ 'aria-label': 'select all desserts' }}
                                    />
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={orderBy === 'name'}
                                        direction={orderBy === 'name' ? order : 'asc'}
                                        onClick={handleRequestSort('name')}
                                    >
                                        Nombre
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="right">
                                    <TableSortLabel
                                        active={orderBy === 'calories'}
                                        direction={orderBy === 'calories' ? order : 'asc'}
                                        onClick={handleRequestSort('calories')}
                                    >
                                        Calorías
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell align="right">Grasas (g)</TableCell>
                                <TableCell align="right">Carbs (g)</TableCell>
                                <TableCell align="right">Proteína (g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                const isItemSelected = isSelected(row.name)
                                return (
                                    <TableRow
                                        hover
                                        onClick={handleClick(row.name)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={row.name}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox checked={isItemSelected} />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                )
                            })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 53 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    )
}

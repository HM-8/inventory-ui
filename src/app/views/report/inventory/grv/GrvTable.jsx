import React from 'react'
import { makeStyles } from '@mui/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const useStyles = makeStyles({
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
})

function createData(name, calories, fat, carbs, protein, detail, moredits) {
    return { name, calories, fat, carbs, protein, detail,moredits }
}

const rows = [
    createData(
        'Frozen yoghurt',
        159,
        6.0,
        24,
        4.0,
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        "moredits"
    ),
    createData(
        'Ice cream sandwich',
        237,
        9.0,
        37,
        4.3,
        'Maecenas rutrum urna vel lacus viverra, id ultrices dui rutrum',
        "moredits"
    ),
    createData(
        'Eclair',
        262,
        16.0,
        24,
        6.0,
        'Morbi congue gravida nunc, eu cursus felis vulputate id',
        "moredits"
    ),
    createData(
        'Cupcake',
        305,
        3.7,
        67,
        4.3,
        'Vestibulum efficitur, ipsum consectetur finibus maximus, ligula dolor vehicula ex, sed viverra nulla mauris id purus',
        "moredits"
    ),
    createData(
        'Gingerbread',
        356,
        16.0,
        49,
        3.9,
        ' Suspendisse vehicula eu libero eget viverra',
        "moredits"
    ),
]

const ExpandableTableRow = ({ children, expandComponent, ...otherProps }) => {
    const [isExpanded, setIsExpanded] = React.useState(false)

    return (
        <>
            <TableRow {...otherProps}>
                <TableCell padding="checkbox">
                    <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                {children}
            </TableRow>
            {isExpanded && (
                <TableRow>
                    <TableCell padding="checkbox" />
                    {expandComponent}
                </TableRow>
            )}
        </>
    )
}

export default function SimpleTable() {
    const classes = useStyles()

    return (
        <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell padding="checkbox" />
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <ExpandableTableRow
                            key={row.name}
                            expandComponent={<>
                                <TableCell >{row.detail}</TableCell>
                                </>
                            }
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                        </ExpandableTableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    )
}

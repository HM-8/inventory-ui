// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Box from '@mui/material/Box';
// import Collapse from '@mui/material/Collapse';
// import IconButton from '@mui/material/IconButton';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Typography from '@mui/material/Typography';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     price,
//     history: [
//       // {
//       //   name: 'T-shirt',
//       //   Barcode: '11091700',
//       //   description:'This is a valuable sthn sthn',
//       //   amount: 3,
//       //   variant:'Medium Reds and pins',
//       //   category:'Shirt',
//       //   subCategory:'Consumable',
//       //   price:'2,000'
//       // },
//       // {
//       //   name: 'T-shirt',
//       //   Barcode: '11091700',
//       //   description:'This is a valuable sthn sthn',
//       //   amount: 5,
//       //   variant:'Large blue',
//       //   category:'Shirt',
//       //   subCategory:'Consumable',
//       //   price:'2,000'
//       // },
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.calories}</TableCell>
//         <TableCell align="right">{row.fat}</TableCell>
//         <TableCell align="right">{row.carbs}</TableCell>
//         <TableCell align="right">{row.protein}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 Item
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Item name </TableCell>
//                     <TableCell>Barcode</TableCell>
//                     <TableCell align="right">Description</TableCell>
//                     <TableCell align="right">Quantity</TableCell>
//                     <TableCell align="right">Variant </TableCell>
//                     <TableCell align="right">Category </TableCell>
//                     <TableCell align="right">SubCategory</TableCell>
//                     <TableCell align="right">Selling Price</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.name}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.name}
//                       </TableCell>
//                       <TableCell>{historyRow.Barcode}</TableCell>
//                       <TableCell align="right">{historyRow.description}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">{historyRow.variant}</TableCell>
//                       <TableCell align="right">{historyRow.category}</TableCell>
//                       <TableCell align="right">{historyRow.subCategory}</TableCell>
//                       <TableCell align="right">
//                         {historyRow.price}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Piassa', 159, "Tom", "supplier LLC", "2020-01-05"),
//   createData('Semmit', 237, "Abebe", "Truckter PLC", "2020-09-05"),
//   createData('4 Kilo', 237, "Abebe", "John PLC", "2021-09-05"),
//   createData('6 Kilp', 305, "Abebe", "Trim PLC", "2019-09-05"),
// ];

// export default function CollapsibleTable() {
//   return (
//     <TableContainer>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Branch</TableCell>
//             <TableCell align="right">GRV No</TableCell>
//             <TableCell align="right">Approver</TableCell>
//             <TableCell align="right">Supplier</TableCell>
//             <TableCell align="right">Date</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { makeStyles } from '@mui/material'

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
                    {/* {rows.map(row => (
            <React.Fragment key={row.name}>
              <TableRow>
                <TableCell padding="checkbox">
                  <IconButton>
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            </React.Fragment>
          ))} */}
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

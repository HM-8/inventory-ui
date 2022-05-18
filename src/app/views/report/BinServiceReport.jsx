// // import {TextField,  } from '@mui/material'
// import React from 'react'
// // import Form from '../material-kit/forms/Form'
// // import DropDown from '../material-kit/drop-down/DropDown'
// import { Formik, Form } from 'formik'
// import * as Yup from 'yup'

// // import { makeStyles } from '@mui/styles';
// import {
//     //   Container,
//     Grid,
//     Typography,
// } from '@mui/material'

// import Textfield from '../../components/FormsUI/Textfield'
// import Select from '../../components/FormsUI/Select'
// import DateTimePicker from '../../components/FormsUI/DataTimePicker'
// import Checkbox from '../../components/FormsUI/Checkbox'
// import Button from '../../components/FormsUI/Button/index'
// // import countries from './data/countries.json';
// import countries from '../../utils/data/countries.json'

// import { Breadcrumb, SimpleCard } from 'app/components'
// import styled from '@emotion/styled'

// // import dropDownData from '../../../utils/data/dropDownData.json'
// import dropDownData from '../../utils/data/dropDownData.json'
// import { DatePicker, LocalizationProvider } from '@mui/lab'
// import AdapterDateFns from '@mui/lab/AdapterDateFns'

// const buttonText = 'Save'

// const Container = styled('div')(({ theme }) => ({
//     margin: '30px',
//     [theme.breakpoints.down('sm')]: {
//         margin: '16px',
//     },
//     '& .breadcrumb': {
//         marginBottom: '30px',
//         [theme.breakpoints.down('sm')]: {
//             marginBottom: '16px',
//         },
//     },
// }))

// const INITIAL_FORM_STATE = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     addressLine1: '',
//     addressLine2: '',
//     city: '',
//     state: '',
//     country: '',
//     arrivealDate: '',
//     departureDate: '',
//     message: '',
//     termsOfService: false,
// }

// const FORM_VALIDATION = Yup.object().shape({
//     firstName: Yup.string().required('Required'),
//     lastName: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email.').required('Required'),
//     phone: Yup.number()
//         .integer()
//         .typeError('Please enter a valid phone number')
//         .required('Required'),
//     addressLine1: Yup.string().required('Required'),
//     addressLine2: Yup.string(),
//     city: Yup.string().required('Required'),
//     state: Yup.string().required('Required'),
//     country: Yup.string().required('Required'),
//     arrivealDate: Yup.date().required('Required'),
//     departureDate: Yup.date().required('Required'),
//     message: Yup.string(),
//     termsOfService: Yup.boolean()
//         .oneOf([true], 'The terms and conditions must be accepted.')
//         .required('The terms and conditions must be accepted.'),
// })

// function Monthly() {
//     // const classes = useStyles();

//     return (
//         <Container>
//             <div className="breadcrumb">
//                 <Breadcrumb
//                     routeSegments={[
//                         { name: 'Report', path: '/dashboard' },
//                         { name: 'Monthly Report' },
//                     ]}
//                 />
//             </div>
//             <SimpleCard title="Monthly Report">
//                 <Grid container>
//                     Table
//                 </Grid>
//             </SimpleCard>
//         </Container>
//     )
// }

// export default Monthly
import React, { useState } from 'react'
import PaginationTable from '../material-kit/tables/PaginationTable'
import { Breadcrumb, SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Grid,Button } from '@mui/material'
// import NewProducts from './NewProducts'
import data from '../../utils/data/employmentType.json'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'


const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const columns = [
    { id: 'Binno', label: 'Bin No',minWidth: 10  },
    { id: 'MinimumQuantity  ', label: 'Quantity produced',minWidth: 10  },
    { id: 'Balance ', label: 'Balance ',minWidth: 10  },
    { id: 'Remarks   ', label: 'Remarks    ',minWidth: 10  },
    { id: 'Shelflife ', label: 'End of life ',minWidth: 10  },
]

function createData(BinLocation ,Binno, MinimumQuantity  , MaximumQuantity,Date,QuantityReceived ,QuantityIssued,Balance,Remarks    ,Shelflife,Financial) {
    return {
        BinLocation : BinLocation ,
        Binno: Binno,
        MinimumQuantity  :MinimumQuantity  ,
        Financial:Financial,
        Shelflife:Shelflife,
        Remarks :Remarks ,
        Balance:Balance,
        QuantityIssued:QuantityIssued,
        QuantityReceived :QuantityReceived ,
        Date:Date,
        MaximumQuantity:MaximumQuantity     
    }
}

const rows = data.map((item, index) => {
    const container = {}
    createData(
        (container.BinLocation  = item.BinLocation ),
        (container.Binno = item.Binno),
        (container.MinimumQuantity   = item.MinimumQuantity  ),
        (container.Financial = item.Financial),
        (container.Shelflife = item.Shelflife),
        (container.Remarks   = item.Remarks   ),
        (container.Balance = item.Balance),
        (container.QuantityIssued = item.QuantityIssued),
        (container.QuantityReceived  = item.QuantityReceived ),
        (container.Date = item.Date),
        (container.MaximumQuantity = item.MaximumQuantity),
    )
    return container
})

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

const BinService = () => {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Report', path: '/dashboard' },
                        { name: 'Bin Service card Report  ' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <SimpleCard title="Pagination Table">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default BinService

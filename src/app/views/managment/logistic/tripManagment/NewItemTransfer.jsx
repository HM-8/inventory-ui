// import { Grid, TextField, Typography } from '@mui/material'
// import React from 'react'
// import Form from '../../../material-kit/forms/Form'
// import DropDown from '../../../material-kit/drop-down/DropDown'
// import { Breadcrumb, SimpleCard } from 'app/components'
// import styled from '@emotion/styled'
// import dropDownData from '../../../../utils/data/dropDownData.json'
// import { DatePicker, LocalizationProvider } from '@mui/lab'
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import vehicleNameDD from '../../../../utils/data/vehicleNameDD.json'

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
// // Issue No.
// // Service place
// // Completed services
// // Guage Reading
// // Before service
// // After service
// // Vendor - Dropdown
// // Technical Description of the issue
// // Technical Inspector
// // Name
// // Signature
// function AddServiceDetail() {
//     return (
//         <Container>
//             <div className="breadcrumb">
//                 <Breadcrumb
//                     routeSegments={[
//                         { name: 'Dashboard', path: '/dashboard' },
//                         { name: 'Employee Transport', path: '/trip/employee' },
//                         { name: 'Employee Transport Approval' },
//                     ]}
//                 />
//             </div>
//             <SimpleCard title="Item Transport Approval">
//                 <Form buttonText={buttonText}>
//                     <Grid container spacing={6}>
//                         <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//                             <DropDown
//                                 label="Fuel"
//                                 name="driverName"
//                                 validators={['required']}
//                                 options={vehicleNameDD}
//                                 errorMessages={['this field is required']}
//                             />
//                             <br />
//                             <br />
//                             <DropDown
//                                 label="Car"
//                                 name="driverName"
//                                 validators={['required']}
//                                 options={vehicleNameDD}
//                                 errorMessages={['this field is required']}
//                             />
//                             <br />
//                             <br />
//                             <TextField
//                                 fullWidth
//                                 label="Pocket Money"
//                                 type="number"
//                                 name="plate"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />
//                             <br />
//                             <br />
//                             <LocalizationProvider dateAdapter={AdapterDateFns}>
//                                 <DatePicker
//                                     renderInput={(props) => (
//                                         <TextField
//                                             {...props}
//                                             // variant="Outlined"
//                                             id="mui-pickers-date"
//                                             label="Service Date"
//                                             sx={{ mb: 2, width: '100%' }}
//                                         />
//                                     )}
//                                 />
//                             </LocalizationProvider>
//                             <div>
//                                 <br />
//                                 <h4>Address</h4>
//                             </div>
//                             <TextField
//                                 fullWidth
//                                 label="City"
//                                 type="text"
//                                 name="city"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />{' '}
//                             <br />
//                             <br />
//                             <TextField
//                                 fullWidth
//                                 label="Sub City"
//                                 type="text"
//                                 name="subCity"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />{' '}
//                             <br />
//                             <br />
//                             <TextField
//                                 fullWidth
//                                 label="Wereda"
//                                 type="text"
//                                 name="wereda"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />{' '}
//                             <br />
//                             <br />
//                             <TextField
//                                 fullWidth
//                                 label="House Number"
//                                 type="text"
//                                 name="housenum"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />{' '}
//                             <br />
//                             <br />
//                             <TextField
//                                 fullWidth
//                                 label="Area Code"
//                                 type="text"
//                                 name="areaCode"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />
//                             <br />
//                             <br />
//                         </Grid>
//                         <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//                             <div>
//                                 <h4>Starting</h4>
//                             </div>
//                             <TextField
//                                 fullWidth
//                                 label="Starting Kilometer"
//                                 type="number"
//                                 name="startKM"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />

//                             <br />
//                             <br />

//                             <TextField
//                                 fullWidth
//                                 label="Starting Time"
//                                 type="number"
//                                 name="startKM"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />
//                             <br />
//                             <br />
//                             <TextField
//                                 fullWidth
//                                 label="Returning Kilometer"
//                                 type="number"
//                                 name="returnKM"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />

//                             <br />
//                             <br />
//                             <div>
//                                 <h4>Returning</h4>
//                             </div>
//                             <TextField
//                                 fullWidth
//                                 label="Returning Time"
//                                 type="number"
//                                 name="returnKM"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />
//                             <br />
//                             <br />
//                             <TextField
//                                 fullWidth
//                                 label="KM Difference"
//                                 type="number"
//                                 name="empID"
//                                 validators={['required']}
//                                 errorMessages={['this field is required']}
//                             />
//                         </Grid>
//                     </Grid>
//                 </Form>
//             </SimpleCard>
//         </Container>
//     )
// }

// export default AddServiceDetail

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Textfield from '../../../../components/FormsUI/Textfield'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button/index'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Vehicle from '../../../../utils/data/vehicleNameDD.json'

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
    '& .font': {
        fontWeight: 'bold',
        fontSize: '16px',
    },
}))

const INITIAL_FORM_STATE = {
    platenumber: '',
    Car: '',
    PocketMoney: '',
    ServiceDate:'',
    city: '',
    subcity:'',
    kebele:'',
    wereda:'',
    houseNo: '',
    areaCode: '',
    skm: '',
    stm: '',
    rkm: '',
    kmd: '',
}

const FORM_VALIDATION = Yup.object().shape({
    PocketMoney: Yup.string().required('Required'),
    Car: Yup.string().required('Required'),
    platenumber: Yup.number()
        .integer()
        .typeError('Please enter a valid Bin number')
        .required('Required'),
        city: Yup.string(),
    driver: Yup.string().required('Required'),
    subcity: Yup.string().required('Required'),
    kebele: Yup.string().required('Required'),
    date: Yup.date().required('Required'),
    departureDate: Yup.date().required('Required'),
    wereda: Yup.string(),
    houseNo: Yup.string(),
    areaCode: Yup.string(),
    skm: Yup.string(),
    stm: Yup.string(),
    rkm: Yup.string(),
    kmd: Yup.string(),
})

function NewEmployeeItem() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'New Item Transfer',
                            path: '/logistic/trips/item',
                        },
                        { name: 'Item Transfer' },
                    ]}
                />
            </div>
            <SimpleCard title="New Item Transfer">
                <Grid container>
                    <Grid item xs={12}>
                        <Container maxWidth="md">
                            <Formik
                                initialValues={{
                                    ...INITIAL_FORM_STATE,
                                }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={(values) => {
                                    console.log(values)
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Textfield
                                                name="Fuel"
                                                label="Fuel"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="Car"
                                                label="Car"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Select
                                                name="PocketMoney"
                                                label="Pocket Money"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Textfield
                                                name="ServiceDate"
                                                label="Service Date"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Address</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="city"
                                                label="City"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="subcity"
                                                label="Subcity"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="kebele"
                                                label="Kebele"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="wereda"
                                                label="Wereda"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="houseNo"
                                                label="House No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="areaCode"
                                                label="Area Code "
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Starting</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Textfield
                                                name="skm"
                                                label="Starting Kilometer"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Textfield
                                                name="stm"
                                                label="Starting Time"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="rkm"
                                                label="Returning Kilometer"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Textfield
                                                name="kmd"
                                                label="KM Difference"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button>ADD</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>

                            {/* </div> */}
                        </Container>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default NewEmployeeItem


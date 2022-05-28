// import {
//     Button,
//     Icon,
//     Grid,
//     Radio,
//     RadioGroup,
//     FormControlLabel,
//     Checkbox,
// } from '@mui/material'
// import { styled } from '@mui/system'
// import { Span } from 'app/components/Typography'
// import React, { useState, useEffect } from 'react'
// import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
// import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import LocalizationProvider from '@mui/lab/LocalizationProvider'
// import { DatePicker, TimePicker } from '@mui/lab'

// const TextField = styled(TextValidator)(() => ({
//     width: '100%',
//     marginBottom: '16px',
// }))

// const RoadFunds = () => {
//     const [state, setState] = useState({
//         date: new Date(),
//     })

//     useEffect(() => {
//         ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
//             console.log(value)

//             if (value !== state.password) {
//                 return false
//             }
//             return true
//         })
//         return () => ValidatorForm.removeValidationRule('isPasswordMatch')
//     }, [state.password])

//     const handleSubmit = (event) => {
//         // console.log("submitted");
//         // console.log(event);
//     }

//     const handleChange = (event) => {
//         event.persist()
//         setState({
//             ...state,
//             [event.target.name]: event.target.value,
//         })
//     }

//     const handleDateChange = (date) => {
//         setState({ ...state, date })
//     }

//     const {
//         roadFundNo,
//         dateofIssuance,
//         timeofIssuance,
//         expiryDate,
//         recievedFrom,
//         city,
//         subcity,
//         wereda,
//         kebele,
//         houseNo,
//         areaCode,
//         mobileNo,
//         totAmtRecievedInWords,
//         totAmtRecievedInNum,
//         collectionMode,
//         preparedByName,
//         preparedBySign

//     } = state

//     return (
//         <div>
//             <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
//                 <Grid container spacing={6}>
//                     <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//                     <TextField
//                             type="text"
//                             name="roadfundno"
//                             id="standard-basic"
//                             onChange={handleChange}
//                             value={roadFundNo || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="Road Fund Number"
//                             errorMessages={['this field is required']}
//                         />
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                             <DatePicker
//                                 value={dateofIssuance}
//                                 onChange={handleDateChange}
//                                 renderInput={(props) => (
//                                     <TextField
//                                         {...props}
//                                         // variant="Outlined"
//                                         id="mui-pickers-date"
//                                         label="Date of Issurance"
//                                         sx={{ mb: 2, width: '100%' }}
//                                     />
//                                 )}
//                             />
//                         </LocalizationProvider>
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                             <TimePicker
//                                 value={timeofIssuance}
//                                 onChange={handleDateChange}
//                                 renderInput={(props) => (
//                                     <TextField
//                                         {...props}
//                                         // variant="Outlined"
//                                         id="mui-pickers-date"
//                                         label="Time of Issurance"
//                                         sx={{ mb: 2, width: '100%' }}
//                                     />
//                                 )}
//                             />
//                         </LocalizationProvider>
//                         <LocalizationProvider dateAdapter={AdapterDateFns}>
//                             <DatePicker
//                                 value={expiryDate}
//                                 onChange={handleDateChange}
//                                 renderInput={(props) => (
//                                     <TextField
//                                         {...props}
//                                         // variant="Outlined"
//                                         id="mui-pickers-date"
//                                         label="Expiry Date"
//                                         sx={{ mb: 2, width: '100%' }}
//                                     />
//                                 )}
//                             />
//                         </LocalizationProvider>
//                         <TextField
//                             type="text"
//                             name="recievedFrom"
//                             id="standard-basic"
//                             onChange={handleChange}
//                             value={recievedFrom || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="Recieved From"
//                             errorMessages={['this field is required']}
//                         />
//                         <div>{'Telephone Number '}</div>

//                         <TextField
//                             type="text"
//                             name="mobileNumber"
//                             id="standard-basic"
//                             onChange={handleChange}
//                             value={mobileNo || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="Mobile Number"
//                             errorMessages={['this field is required']}
//                         />

//                     </Grid>

//                     <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
//                     <div>{'Address '}</div>

//                         <TextField
//                             type="text"
//                             name="houseNumber"
//                             id="standard-basic"
//                             onChange={handleChange}
//                             value={houseNo || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="House Number"
//                             errorMessages={['this field is required']}
//                         />
//                         <TextField
//                             type="text"
//                             name="kebele"
//                             id="standard-basic"
//                             onChange={handleChange}
//                             value={kebele || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="Kebele"
//                             errorMessages={['this field is required']}
//                         />
//                         <TextField
//                             type="text"
//                             name="wereda"
//                             id="Wereda"
//                             onChange={handleChange}
//                             value={wereda || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="Wereda"
//                             errorMessages={['this field is required']}
//                         />

//                         <TextField
//                             type="text"
//                             name="city"
//                             id="standard-basic"
//                             onChange={handleChange}
//                             value={city || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="City"
//                             errorMessages={['this field is required']}
//                         />
//                         <TextField
//                             type="text"
//                             name="subCity"
//                             id="standard-basic"
//                             onChange={handleChange}
//                             value={subcity || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="Sub City"
//                             errorMessages={['this field is required']}
//                         />
//                         <TextField
//                             type="text"
//                             name="areaName"
//                             id="standard-basic"
//                             onChange={handleChange}
//                             value={areaCode || ''}
//                             validators={[
//                                 'required',
//                                 'minStringLength: 4',
//                                 'maxStringLength: 9',
//                             ]}
//                             label="Area Code"
//                             errorMessages={['this field is required']}
//                         />
//                     </Grid>

//                 </Grid>
//                 <div>{'Total Amount Recieved '}</div>

// <TextField
//     type="money"
//     name="totamtrecievednum"
//     id="standard-basic"
//     onChange={handleChange}
//     value={totAmtRecievedInNum || ''}
//     validators={[
//         'required'
//     ]}
//     label="In Number"
//     errorMessages={['this field is required']}
// />
// <TextField
//     type="text"
//     name="totamtrecievedinWords"
//     id="standard-basic"
//     onChange={handleChange}
//     value={totAmtRecievedInWords || ''}
//     validators={[
//         'required'
//     ]}
//     label="In Words"
//     errorMessages={['this field is required']}
// />
// <div>{'Prepared By'}</div>

// <TextField
//     type="money"
//     name="Name"
//     id="standard-basic"
//     onChange={handleChange}
//     value={preparedByName || ''}
//     validators={[
//         'required'
//     ]}
//     label="Name"
//     errorMessages={['this field is required']}
// />
// <TextField
//     type="text"
//     name="sign"
//     id="standard-basic"
//     onChange={handleChange}
//     value={preparedBySign || ''}
//     validators={[
//         'required'
//     ]}
//     label="Signature"
//     errorMessages={['this field is required']}
// />
//             </ValidatorForm>
//         </div>
//     )
// }

// export default RoadFunds

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button/index'
import itemlist from '../../../../utils/data/BranchList.json'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'

const buttonText = 'Save'

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

const INITIAL_FORM_STATE = {
    roadFundNo: '',
    dateofIssuance: '',
    timeofIssuance: '',
    expiryDate: '',
    recievedFrom: '',
    city: '',
    subcity: '',
    wereda: '',
    kebele: '',
    houseNo: '',
    areaCode: '',
    mobileNo: '',
    totAmtRecievedInWords: '',
    totAmtRecievedInNum: '',
    collectionMode: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vehicleName: Yup.string().required('Required'),
    model: Yup.string().required('Required'),
    numberOfCylinders: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    horsepower: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),

    cubic_capacity: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    AssignmentStatus: Yup.string().required('Required'),
    yearManufactured: Yup.string(),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
})

function RoadFunds() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}></Grid>
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
                                    <Grid item xs={6}>
                                        <Select
                                            name="roadfundno"
                                            label="Road Fund Number"
                                            options={itemlist}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="dateofIssuance"
                                            label="Date of Issurance "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="timeofIssuance"
                                            label="Time of Issurance "
                                        />
                                    </Grid>
                                    {/* 
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <TimePicker
                                            value={timeofIssuance}
                                            onChange={handleDateChange}
                                            renderInput={(props) => (
                                                <TextField
                                                    {...props}
                                                    // variant="Outlined"
                                                    id="mui-pickers-date"
                                                    label="Time of Issurance"
                                                    sx={{
                                                        mb: 2,
                                                        width: '100%',
                                                    }}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider> */}

                                    <Grid item xs={6}>
                                        <DateTimePicker
                                            name="expiryDate"
                                            label="Expiry Date "
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="recievedFrom"
                                            label="Recieved From "
                                        />
                                    </Grid>

                                    
                                    <Grid item xs={12}>
                                        <Typography>Address</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="city" label="City" />
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
                                        <Typography>Telephone Number</Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="mobileNumber"
                                            label="Mobile Number"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Total Amount Recieved</Typography>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="totAmtRecievedInNum" label="In Number" />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="totamtrecievedinWords"
                                            label="In Words "
                                        />
                                    </Grid>
                                </Grid>
                            </Form>
                        </Formik>
                    </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RoadFunds

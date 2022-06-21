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

// const INITIAL_FORM_STATE = {
//     roadFundNo: '',
//     dateofIssuance: '',
//     timeofIssuance: '',
//     expiryDate: '',
//     recievedFrom: '',
//     city: '',
//     subcity: '',
//     wereda: '',
//     kebele: '',
//     houseNo: '',
//     areaCode: '',
//     mobileNo: '',
//     totAmtRecievedInWords: '',
//     totAmtRecievedInNum: '',
//     collectionMode: '',
// }

// const FORM_VALIDATION = Yup.object().shape({
//     vehicleName: Yup.string().required('Required'),
//     model: Yup.string().required('Required'),
//     numberOfCylinders: Yup.number()
//         .integer()
//         .typeError('Please enter a valid phone number')
//         .required('Required'),
//     horsepower: Yup.number()
//         .integer()
//         .typeError('Please enter a valid phone number')
//         .required('Required'),

//     cubic_capacity: Yup.number()
//         .integer()
//         .typeError('Please enter a valid phone number')
//         .required('Required'),
//     AssignmentStatus: Yup.string().required('Required'),
//     yearManufactured: Yup.string(),
//     StartDate: Yup.date().required('Required'),
//     EndDate: Yup.date().required('Required'),
// })

function ContactsDetails(props) {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    
                                <Grid container spacing={2}>
                                <Grid item xs={12}>
                                        <Typography>Telephone</Typography>
                                    </Grid>
                                <Grid item xs={6}>
                                        <Textfield
                                            name="houseno"
                                            label="House No"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="mobile"
                                            label="Mobile No"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Address</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography></Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="firstName"
                                            label="First Name"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="lastName"
                                            label="last Name"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="email"
                                            label="Email"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield name="city" label="City" />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Textfield
                                            name="Subcity"
                                            label="Subcity"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography>Email</Typography>
                                    </Grid>
                                <Grid item xs={6}>
                                        <Textfield
                                            name="p_email"
                                            label="Personal Email"
                                        />
                                    </Grid>

                                    <Grid item xs={6}>
                                        <Textfield
                                            name="c_email"
                                            label="Company Email"
                                        />
                                    </Grid>
                                </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
ContactsDetails.label = 'Contacts Details';
ContactsDetails.initialValues = {
    firstName: '',
    lastName: ''
};
export default ContactsDetails

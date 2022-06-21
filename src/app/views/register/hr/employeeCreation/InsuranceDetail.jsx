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
import InsurnaceType from '../../../../utils/data/InsurnaceType.json'
import Upload from '../../../../components/FormsUI/fileupload'
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

const InsuranceDetail = (props) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Select
                        name="insurance_type"
                        label="Insurance Type"
                        options={InsurnaceType}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Textfield
                        name="insuranceprovider "
                        label="insurance provider  "
                    />
                </Grid>
                <Grid item xs={12}>
                    <Typography>Insurance Agents</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Textfield name="first_name" label="First Name " />
                </Grid>

                <Grid item xs={4}>
                    <Textfield name="middle_name" label="Middle Name " />
                </Grid>
                <Grid item xs={4}>
                    <Textfield name="last_name" label="Last Name " />
                </Grid>

                <Grid item xs={12}>
                    <Typography>Telephone</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="MobileNumber" label="Mobile No " />
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="OfficeNumber" label="Office No " />
                </Grid>

                <Grid item xs={6}>
                    <Textfield
                        name="insuranceNo"
                        label="Health insurance No "
                    />
                </Grid>

                <Grid item xs={6}>
                    <Upload name="upload" label="Upload Document " />
                </Grid>
                <Grid item xs={12}>
                    <Typography>Other</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}
InsuranceDetail.label = 'Insurance Detail';
InsuranceDetail.initialValues = {
    insurance_type: '',
    insuranceprovider: '',
    nameofInsured: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    MobileNumber: '',
    OfficeNumber: '',
    insuranceNo: '',
    upload: '',
};
InsuranceDetail.validationSchema =Yup.object().shape({
    insurance_type: Yup.string().required('Required'),
    insuranceprovider: Yup.string().required('Required'),
    nameofInsured: Yup.number()
        .integer()
        .typeError('Please enter a valid number')
        .required('Required'),
    // cubic_capacity: Yup.number()
    //     .integer()
    //     .typeError('Please enter a valid phone number')
    //     .required('Required'),
    first_name: Yup.string().required('Required'),
    middle_name: Yup.string(),
    last_name: Yup.string(),
    MobileNumber: Yup.string(),
    insuranceNo: Yup.date().required('Required'),
    OfficeNumber: Yup.date().required('Required'),
});
export default InsuranceDetail

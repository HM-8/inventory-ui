import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import styled from '@emotion/styled'

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
            <Grid container>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Textfield
                            name="insuranceCertificateNumber"
                            label="Insurance Certificate Number "
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DateTimePicker
                            name="dateofIssuance"
                            label="Date of Issurance "
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield
                            name="nameofInsured"
                            label="Name of Insured "
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield
                            name="insurance_Policy_No"
                            label="Insurance Policy Number"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Insurer Details</Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Textfield
                            name="nameofInsurer"
                            label="Name of Insurer "
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield name="PersonalTel" label="personalTel " />
                    </Grid>
                    <Grid item xs={6}>
                        <Textfield name="companyTel" label="Company's Tel " />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

InsuranceDetail.label = 'Insurance Detail';
InsuranceDetail.initialValues = {
    insuranceCertificateNumber: '',
    dateofIssuance: '',
    nameofInsured: '',
    insurance_Policy_No: '',
    nameofInsurer: '',
    PersonalTel: '',
    companyTel: '',
};

InsuranceDetail.validationSchema = Yup.object().shape({
    insuranceCertificateNumber: Yup.string().required('Required'),
    dateofIssuance: Yup.string().required('Required'),
    nameofInsured: Yup.string().required('Required'),

    PersonalTel: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    nameofInsurer: Yup.string().required('Required'),
    companyTel: Yup.string().required('Required'),
    insurance_Policy_No: Yup.string().required('Required'),
})
export default InsuranceDetail

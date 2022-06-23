import React from 'react'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Textfield from '../../../../components/FormsUI/Textfield'
import Select from '../../../../components/FormsUI/Select'
import styled from '@emotion/styled'
import InsurnaceType from '../../../../utils/data/InsurnaceType.json'
import Upload from '../../../../components/FormsUI/fileupload'

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
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const InsuranceDetail = (props) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Select
                        name="insuranceType"
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
                    <Textfield name="agentName" label="First Name " />
                </Grid>
                <Grid item xs={12}>
                    <Typography>Telephone</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Textfield name="agentPhonenumber" label="Mobile No " />
                </Grid>
                <Grid item xs={6}>
                    <Upload name="insuranceDocument" />
                </Grid>
            </Grid>
        </Container>
    )
}
InsuranceDetail.label = 'Insurance Detail'
InsuranceDetail.initialValues = {
    insuranceType: '',
    insuranceprovider: '',
    agentName: '',
    agentPhonenumber: '',
    insuranceDocument: '',
}
InsuranceDetail.validationSchema = Yup.object().shape({
    insuranceType: Yup.string(),
    insuranceprovider: Yup.string(),
    agentName: Yup.string(),
    agentPhonenumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    insuranceDocument: Yup.string(),
})
export default InsuranceDetail

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import styled from '@emotion/styled'
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

const EducationalQuliafication = (props) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Textfield name="school" label="School/University Name " />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="degree" label="Degree Type" />
                </Grid>

                <Grid item xs={6}>
                    <DateTimePicker
                        name="completed_year"
                        label="Year Started "
                    />
                </Grid>
                <Grid item xs={6}>
                    <DateTimePicker
                        name="timeofIssuance"
                        label="Year Completed "
                    />
                </Grid>
                <Grid item xs={6}>
                    <Upload name="upload" label="Upload Certification" />
                </Grid>
            </Grid>
        </Container>
    )
}
EducationalQuliafication.label = 'Educational Quliafication'
EducationalQuliafication.initialValues = {
    school: '',
    degree: '',
    completed_year: '',
    timeofIssuance: '',
    upload: '',
}
EducationalQuliafication.validationSchema = Yup.object().shape({
    school: Yup.string().required('Required'),
    degree: Yup.string().required('Required'),
    completed_year: Yup.string().required('Required'),
    timeofIssuance: Yup.string().required('Required'),
})
export default EducationalQuliafication

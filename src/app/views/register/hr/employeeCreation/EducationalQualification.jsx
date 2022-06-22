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
                    <Textfield
                        name="schoolName"
                        label="School/University Name "
                    />
                </Grid>

                <Grid item xs={6}>
                    <Textfield name="degreeType" label="Degree Type" />
                </Grid>

                <Grid item xs={6}>
                    <DateTimePicker name="yearStarted" label="Year Started " />
                </Grid>
                <Grid item xs={6}>
                    <DateTimePicker
                        name="yearCompleted"
                        label="Year Completed "
                    />
                </Grid>
                <Grid item xs={6}>
                    <Upload name="certification" label="Upload Certification" />
                </Grid>
            </Grid>
        </Container>
    )
}
EducationalQuliafication.label = 'Educational Quliafication'
EducationalQuliafication.initialValues = {
    yearCompleted: '',
    yearStarted: '',
    degreeType: '',
    schoolName: '',
    certification: '',
}
EducationalQuliafication.validationSchema = Yup.object().shape({
    yearCompleted: Yup.date().required(),
    yearStarted: Yup.date().required(),
    degreeType: Yup.string(),
    schoolName: Yup.string(),
    certification: Yup.string(),
})
export default EducationalQuliafication

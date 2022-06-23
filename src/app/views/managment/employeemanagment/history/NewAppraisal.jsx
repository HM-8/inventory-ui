import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid} from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Button from '../../../../components/FormsUI/Button'
import { Breadcrumb, SimpleCard } from 'app/components'
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

const INITIAL_FORM_STATE = {
    vehicleName: '',
    driverName: '',
    FuelMeasurment: '',
    AssignmentStatus: '',
    TrackUsage: '',
    StartDate: '',
    EndDate: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vehicleName: Yup.string().required('Required'),
    driverName: Yup.string().required('Required'),
    FuelMeasurment: Yup.string().required('Required'),
    AssignmentStatus: Yup.string().required('Required'),
    TrackUsage: Yup.string(),
    StartDate: Yup.date().required('Required'),
    EndDate: Yup.date().required('Required'),
})

function NewAppraisal() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Appraisal', path: '/history/appraisal' },
                        { name: 'New Appraisal' },
                    ]}
                />
            </div>
            <SimpleCard title="LeavePolicy">
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
                                            <Upload
                                                name="upload"
                                                label="Upload Peer Review Questions "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="reviews"
                                                label="No of Reviews "
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="value"
                                                label="Average value earned  "
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={12}>
                                            <Button>Submit Form</Button>
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>
                        </Container>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default NewAppraisal

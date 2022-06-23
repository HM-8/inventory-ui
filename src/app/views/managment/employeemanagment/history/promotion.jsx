import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Paymentmode from '../../../../utils/data/paymentmode.json'
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
    currentDesignation: '',
    newDesignation: '',
    SuggestedDate: '',
    ApprovedDate: '',
    TrackUsage: '',
    StartDate: '',
    EndDate: '',
}

const FORM_VALIDATION = Yup.object().shape({
    currentDesignation: Yup.string().required('Required'),
    newDesignation: Yup.string().required('Required'),
    SuggestedDate: Yup.string().required('Required'),
    ApprovedDate: Yup.string().required('Required'),
})

function NewPromotion() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Promotion', path: 'dashboard' },
                    ]}
                />
            </div>
            <SimpleCard title="Employee Promotion">
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
                                        {/* <Grid item xs={6}>
                                            <Upload
                                                name="upload"
                                                label="Upload Peer Review Questions "
                                            />
                                        </Grid> */}

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="currentDesignation"
                                                label="Current Designation "
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="newDesignation"
                                                label="New changed designation  "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="SuggestedDate"
                                                label="Suggested Date "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="ApprovedDate"
                                                label="Approved Date "
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={12}>
                                            <Button>Submit Form</Button>
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

export default NewPromotion

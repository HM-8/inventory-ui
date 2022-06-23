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
import itemlist from '../../../../utils/data/itemlist.json'

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
    employeeid: '',
    CurrentBranch: '',
    NewBranch: '',
    SuggestedDate: '',
}

const FORM_VALIDATION = Yup.object().shape({
    employeeid: Yup.string().required('Required'),
    CurrentBranch: Yup.string().required('Required'),
    NewBranch: Yup.string().required('Required'),
    SuggestedDate: Yup.date().required('Required'),
})

function NewTransfer() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Transfer', path: '/history/appraisal' },
                        { name: 'New Transfer' },
                    ]}
                />
            </div>
            <SimpleCard title="Transfer">
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
                                        <Grid item xs={6}>
                                            <Select
                                                name="employeeid"
                                                label="Employee"
                                                options={itemlist}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="CurrentBranch"
                                                label="Current Branch "
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="NewBranch"
                                                label="New Branch  "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="SuggestedDate"
                                                label="Suggested Date "
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

export default NewTransfer

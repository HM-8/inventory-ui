import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Select from '../../../../components/FormsUI/Select'
import genderList from '../../../../utils/data/GenderList.json'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'

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
    department: '',
    designation: '',
    branch: '',
}

const FORM_VALIDATION = Yup.object().shape({
    department: Yup.string().required('Required'),
    designation: Yup.string().required('Required'),
    branch: Yup.string().required('Required'),
})

function EmployeeSetup() {
    const dispatch = useDispatch()

    return (
        <Container>
            <Grid container>
                <Grid item xs={12}>
                    <Container maxWidth="md">
                        <Formik
                            initialValues={{
                                ...INITIAL_FORM_STATE,
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={(values) => {
                                //dispatch(addBranchInfo(values))
                                console.log('personal details', values)
                            }}
                        >
                            <Form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography>Position</Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Select
                                            name="department"
                                            label="Department"
                                            options={genderList}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Select
                                            name="designation"
                                            label="Designation"
                                            options={genderList}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Select
                                            name="branch"
                                            label="Branch"
                                            options={genderList}
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

export default EmployeeSetup

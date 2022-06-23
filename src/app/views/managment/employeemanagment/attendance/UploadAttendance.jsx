import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Grid,
} from '@mui/material'

import Button from '../../../../components/FormsUI/Button/index'
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
    CompanyName: '',
    Abbreviation: '',
    Website: '',
    CompanyTel: '',
    Fax: '',
    email: '',
    DateofIncorporation: '',
    upload:''
}

const FORM_VALIDATION = Yup.object().shape({
    CompanyName: Yup.string().required('Required'),
    Abbreviation: Yup.string().required('Required'),
    Website: Yup.string().required('Required'),
    CompanyTel: Yup.string().required('Required'),
    Fax: Yup.string(),
    email: Yup.string().email('Invalid Email').required('Required'),
    DateofIncorporation: Yup.date().required('Required'),
    upload: Yup.string().required('Required'),    
})

function UploadAttendance() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Company', path: '/dashbaord' },
                        { name: 'Company' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Vehicle Assignment">
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
                                            <Upload
                                                name="upload"
                                                label="Upload Attendance Document "
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

export default UploadAttendance
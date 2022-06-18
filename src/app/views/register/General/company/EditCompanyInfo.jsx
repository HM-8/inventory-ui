import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Grid,
    Typography,
} from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Button from '../../../../components/FormsUI/Button/index'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useDispatch,useSelector } from 'react-redux'

import {
    updateCompanyInfo,
} from 'app/redux/actions/CompanyAction.js'


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
}

const FORM_VALIDATION = Yup.object().shape({
    CompanyName: Yup.string().required('Required'),
    Abbreviation: Yup.string().required('Required'),
    Website: Yup.string().required('Required'),
    CompanyTel: Yup.string().required('Required'),
    Fax: Yup.string(),
    email: Yup.string().email('Invalid Email').required('Required'),  
})

function Company() {
    const dispatch = useDispatch(); 
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Company', path: '/dashbaord' },
                        {name: 'Edit Company Info'}
                    ]}
                />
            </div>
            <SimpleCard title="Edit Company Info">
                <Grid container>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="md">
                            <Formik
                                initialValues={{
                                    ...INITIAL_FORM_STATE,
                                }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={(values) => 
                                    dispatch(
                                        updateCompanyInfo(
                                            values
                                        )
                                    )
                                    // console.log(values)
                                }
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="CompanyName"
                                                label="Company Name "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Abbreviation"
                                                label="Abbreviation "
                                            />
                                        </Grid>
                                        
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Website"
                                                label="Website "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="CompanyTel"
                                                label="Company Telephone Number "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Fax"
                                                label="Fax "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="email"
                                                label="Email"
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

export default Company

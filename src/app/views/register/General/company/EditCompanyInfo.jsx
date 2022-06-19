import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Button from '../../../../components/FormsUI/Button/index'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { updateCompanyInfo } from 'app/redux/actions/CompanyAction.js'
import DateTimePicker from 'app/components/FormsUI/DataTimePicker'

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

function Company() {
    const dispatch = useDispatch()
    const companyId = '62adcb6e495011c76f401a1e'

    const data = JSON.parse(window.localStorage.getItem('COMPANY_INFO'))
    // const state= JSON.parse(data);
    const INITIAL_FORM_STATE = {...data }

    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string().required('Required'),
        abbreviation: Yup.string().required('Required'),
        website: Yup.string().required('Required'),
        telephone: Yup.string().required('Required'),
        fax: Yup.string(),
        email:Yup.string().required('Required'),
        date: Yup.string(),
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Company', path: '/dashbaord' },
                        { name: 'Edit Company Info' },
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
                                    dispatch(updateCompanyInfo(values))
                                    // console.log(values)
                                }
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="name"
                                                label="Company Name "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="abbreviation"
                                                label="Abbreviation "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="website"
                                                label="Website "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="telephone"
                                                label="Company Telephone Number "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="fax"
                                                label="Fax "
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="email"
                                                label="Email"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="date"
                                                label="date"
                                            />
                                            {/* <Textfield
                                                name="date"
                                                label="date"
                                            /> */}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button>Submit</Button>
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

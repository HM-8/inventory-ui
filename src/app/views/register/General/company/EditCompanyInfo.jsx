import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Button from '../../../../components/FormsUI/Button/index'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { getCompanyInfo } from 'app/redux/actions/CompanyAction.js'

import { updateCompanyInfo } from 'app/redux/actions/CompanyAction.js'
import { useRef } from 'react'

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
    const INITIAL_FORM_STATE = useRef({
        name: '',
        abbreviation: '',
        website: '',
        telephone: '',
        fax: '',
        email: '',
    })
    const companyInfo = useSelector((state) => state.company.companyInfo)

    useEffect(() => {
        console.log('use effect', INITIAL_FORM_STATE)
        if (INITIAL_FORM_STATE.current.name === '') {
            dispatch(getCompanyInfo())
            INITIAL_FORM_STATE.current = { ...companyInfo }
        }
    }, [])

    console.log('initial', INITIAL_FORM_STATE.current)
    console.log('company', companyInfo)

    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string().required('Required'),
        abbreviation: Yup.string().required('Required'),
        website: Yup.string().required('Required'),
        telephone: Yup.string().required('Required'),
        fax: Yup.string(),
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Company', path: '/general/company' },
                        { name: 'Edit Company Info' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Company Info">
                <Grid container>
                    <Grid item xs={12}>
                        <Container maxWidth="md">
                            <Formik
                                initialValues={{
                                    ...INITIAL_FORM_STATE.current,
                                }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={(values) =>
                                    // dispatch(
                                    //     updateCompanyInfo(
                                    //         values
                                    //     )
                                    // )
                                    console.log(values)
                                }
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="name"
                                                label="Company Name"
                                                // value={companyInfo.name}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="abbreviation"
                                                label="Abbreviation "
                                                // value={companyInfo.Abbreviation}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="website"
                                                label="Website "
                                                // value={companyInfo.Website}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="telephone"
                                                label="Company Telephone Number "
                                                // value={companyInfo.CompanyTel}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="fax"
                                                label="Fax "
                                                // value={companyInfo.Fax}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="email"
                                                label="Email"
                                                // value={companyInfo.email}
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

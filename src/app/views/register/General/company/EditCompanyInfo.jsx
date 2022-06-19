import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Button from '../../../../components/FormsUI/Button/index'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import { updateCompanyInfo } from 'app/redux/actions/CompanyAction.js'
import DateTimePicker from 'app/components/FormsUI/DataTimePicker'
import { useLocation } from 'react-router-dom'
import FormButton from 'app/views/material-kit/buttons/FormButton'

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

// var INITIAL_FORM_STATE = {
//   name: '',
//   abbreviation: '',
//   website: '',
//   telephone: '',
//   fax: '',
//   email: '',
//   date: ''
// }

function Company() {
    const location = useLocation()
    const [buttonText, setButtonText] = useState('Submit')
    const [titleText, setTitleText] = useState('Add Company')
    const [data, setData] = useState('');
    const url = '/general/company'
    const INITIAL_FORM_STATE = {...data};

    useEffect(() => {
        if (location.state === 'edit') {
            setButtonText('Update')
            setTitleText('Edit Company')
            setData(JSON.parse(window.localStorage.getItem('COMPANY_INFO')))
            

        }
    }, [])


    const dispatch = useDispatch()
    console.log('data', data)
    console.log('initial', INITIAL_FORM_STATE)

    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string().required('Required'),
        abbreviation: Yup.string().required('Required'),
        website: Yup.string().required('Required'),
        telephone: Yup.string().required('Required'),
        fax: Yup.string(),
        email: Yup.string().required('Required'),
        date: Yup.string(),
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Company', path: '/general/company' },
                        { name: titleText },
                    ]}
                />
            </div>
            <SimpleCard title={titleText}>
                <Grid container>
                    <Grid item xs={12}></Grid>
                    <Grid item xs={12}>
                        <Container maxWidth="md">
                            <Formik
                                initialValues={{
                                    ...INITIAL_FORM_STATE,
                                }}
                                validationSchema={FORM_VALIDATION}
                                onSubmit={
                                    (values) =>
                                        dispatch(
                                            updateCompanyInfo(data.id, values)
                                        )
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
                                            <FormButton
                                                title={buttonText}
                                                url={url}
                                            ></FormButton>
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

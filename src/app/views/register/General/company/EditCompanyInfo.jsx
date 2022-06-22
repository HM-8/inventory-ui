import { Grid } from '@mui/material'
import { Form, Formik } from 'formik'
import { useEffect } from 'react'
import * as Yup from 'yup'

import styled from '@emotion/styled'
import { Breadcrumb, SimpleCard } from 'app/components'
import DateTimePicker from 'app/components/FormsUI/DataTimePicker'
import { addCompanyInfo, updateCompanyInfo } from 'app/redux/actions/CompanyAction.js'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Textfield from '../../../../components/FormsUI/Textfield'
import Button from '../../../../components/FormsUI/Button'
import { useNavigate } from 'react-router-dom'

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
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    var buttonText = 'Submit'
    var titleText = 'Add Company'
    var data = ''
    const url = '/general/company'
    console.log('location state', location.search)

    if (location.state === 'edit') {
        buttonText = 'Update'
        titleText = 'Edit Company'
        data = JSON.parse(window.localStorage.getItem('COMPANY_INFO'))
    }

    const INITIAL_FORM_STATE = { ...data }
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

    useEffect(() => {}, [])

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
                                onSubmit={(values) =>{
                                    if (location.state === 'edit') {
                                        dispatch(updateCompanyInfo(data.id, values))
                                    } else {
                                        dispatch(addCompanyInfo(values))
                                    }
                                    if(values){
                                        navigate(url)
                                    }
                                }}
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
                                            <Button>{buttonText}</Button>
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

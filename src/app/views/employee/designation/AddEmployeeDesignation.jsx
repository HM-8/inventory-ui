import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import { useDispatch } from 'react-redux'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'
import FormButton from 'app/views/material-kit/buttons/FormButton'

import {
    addDesignationInfo,
    updateDesignationInfo,
} from 'app/redux/actions/DesignationAction'
import Textfield from 'app/components/FormsUI/Textfield'
import Select from 'app/components/FormsUI/Select'

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

function Designation() {
    const location = useLocation()
    const dispatch = useDispatch()
    var buttonText = 'Submit'
    var titleText = 'Add Designation'
    var data = ''
    var id = ''
    const url = null
    console.log('location state', location.search)

    if (location.state === 'edit') {
        buttonText = 'Update'
        titleText = 'Edit Designation'
        const object = JSON.parse(
            window.localStorage.getItem('DESIGNATIONS_INFO')
        )
        const index = Number(location.search.charAt(1))
        id = object[index].id
        data = {
            name: object[index].name,
            description: object[index].description,
            requiredSkills: object[index].requiredSkills,
        }
    }

    const INITIAL_FORM_STATE = { ...data }
    console.log('data', data)
    console.log('initial', INITIAL_FORM_STATE)

    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        requiredSkills: Yup.string().required('Required'),
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Designation', path: '/hr/designation' },
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
                                onSubmit={(values) => {
                                    if (location.state === 'edit') {
                                        dispatch(
                                            updateDesignationInfo(id, values)
                                        )
                                    } else {
                                        dispatch(addDesignationInfo(values))
                                    }
                                    console.log(values)
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="name"
                                                label="Name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="description"
                                                label="Description"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                multiline
                                                maxRows={4}
                                                name="requiredSkills"
                                                label="Required Skills"
                                            />
                                        </Grid>
                                        <Grid item xs={6}></Grid>
                                        <Grid item>
                                            <FormButton
                                                url={url}
                                                title={buttonText}
                                            ></FormButton>
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

export default Designation

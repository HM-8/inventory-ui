import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Select from '../../../../components/FormsUI/Select'
import DropDownData from '../../../../utils/data/dropDownData.json'
import { useDispatch } from 'react-redux'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'
import FormButton from 'app/views/material-kit/buttons/FormButton'

import { updateDepartmentInfo } from 'app/redux/actions/DepartmentAction'

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

function Branch() {
    const location = useLocation()
    const dispatch = useDispatch()
    const url = null
    console.log('location state', location.search)

    const object = JSON.parse(window.localStorage.getItem('DEPARTMENTS_INFO'))
    const index = Number(location.search.charAt(1))
    const id = object[index].id
    const data = {
        name: object[index].name,
        head: object[index].head,
        description: object[index].description,
    }

    const INITIAL_FORM_STATE = { ...data }
    console.log('data', data)
    console.log('initial', INITIAL_FORM_STATE)

    const FORM_VALIDATION = Yup.object().shape({
        name: Yup.string().required('Required'),
        head: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Department', path: '/hr/department' },
                        { name: 'Edit Department' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Department">
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
                                    dispatch(updateDepartmentInfo(id, values))

                                    console.log(values)
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography>Location</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="name"
                                                label="Name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="head"
                                                label="Head"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="description"
                                                label="Description"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <FormButton
                                                url={url}
                                                title="Update"
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

export default Branch

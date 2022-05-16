import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Grid,
    IconButton,
    Icon
} from '@mui/material'

import Textfield from '../../../components/FormsUI/Textfield'
import Button from '../../../components/FormsUI/Button/index'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'

import { useTheme } from '@emotion/react'
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    arrivealDate: '',
    departureDate: '',
    message: '',
    termsOfService: false,
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email.').required('Required'),
    phone: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    addressLine1: Yup.string().required('Required'),
    addressLine2: Yup.string(),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    arrivealDate: Yup.date().required('Required'),
    departureDate: Yup.date().required('Required'),
    message: Yup.string(),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
})

function NewUOM() {
    // const classes = useStyles();
    const { palette } = useTheme()
    const textColor = palette.text.primary
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'UOM', path: '/item/uom' },
                        { name: 'New UOM' },
                    ]}
                />
            </div>
            <SimpleCard title="New UOM">
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
                                        <Grid item xs={4}>
                                            <Textfield
                                                name="firstName"
                                                label="measurement unit"
                                            />
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Textfield
                                                name="lastName"
                                                label="Abbreviation "
                                            />
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Textfield
                                                name="email"
                                                label="Description"
                                            />
                                        </Grid>

                                        <Grid item xs={2}>
                                            <IconButton
                                                sx={{ mt: 0.5 }}
                                                // onClick={addComponent}
                                            >
                                                <Icon sx={{ color: textColor }}>
                                                    add_circle
                                                </Icon>
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton
                                                sx={{ mt: 0.5, ml: -8 }}
                                                // onClick={removeComponent}
                                            >
                                                <Icon sx={{ color: textColor }}>
                                                    remove_circle
                                                </Icon>
                                            </IconButton>
                                        </Grid>                                          
                                        <Grid item xs={12}>
                                            <Button>Add</Button>
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

export default NewUOM

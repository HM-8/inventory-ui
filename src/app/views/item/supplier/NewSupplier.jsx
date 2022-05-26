import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../components/FormsUI/Textfield'
import Button from '../../../components/FormsUI/Button/index'
import Select from '../../../components/FormsUI/Select'
import Suppliers from '../../../utils/data/Supplierlist.json'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'

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
    houseNo: '',
    kebele: '',
    Wereda: '',
    City: '',
    Subcity: '',
    AreaName: '',
    MobileNo: '',
    HomeNo: '',
    Personalemail: '',
    CompanyEmail: '',
}

const FORM_VALIDATION = Yup.object().shape({
    CompanyName: Yup.string().required('Required'),
    houseNo: Yup.string().required('Required'),
    kebele: Yup.string().required('Required'),
    Wereda: Yup.number()
        .typeError('Please enter a valid Wereda number')
        .required('Required'),
    MobileNo: Yup.number()
        .integer()
        .typeError('Please enter a valid Mobile number')
        .required('Required'),
    Subcity: Yup.string().required('Required'),
    AreaName: Yup.string(),
    city: Yup.string().required('Required'),
    HomeNo: Yup.string().required('Required'),
    Personalemail: Yup.string().email('Invalid email.').required('Required'),
    CompanyEmail: Yup.string().email('Invalid email.').required('Required'),
})
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

function NewSupplier() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Supplier', path: '/item/supplier' },
                        { name: 'New Supplier ' },
                    ]}
                />
            </div>
            <SimpleCard title="New Supplier">
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
                                        <Grid item xs={12}>
                                            <Select
                                                name="CompanyName"
                                                label="Supplier Company "
                                                options={Suppliers}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Location</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="houseNo"
                                                label="House No"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="kebele"
                                                label="Kebele"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="wereda"
                                                label="Wereda"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="City"
                                                label="City"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Subcity"
                                                label="Subcity"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="AreaName"
                                                label="Area name "
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Telephone</Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="MobileNo"
                                                label="Mobile No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="HomeNo"
                                                label="Home No"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Email</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Personalemail"
                                                label="Personal Email"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="CompanyEmail"
                                                label="Company Email"
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

export default NewSupplier

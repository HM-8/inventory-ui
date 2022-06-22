import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Textfield from '../../../components/FormsUI/Textfield'
import Button from '../../../components/FormsUI/Button/index'

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
    '& .font':{
        fontWeight:'bold',
        fontSize:'16px'
    }

}))

const INITIAL_FORM_STATE = {
    vendorname: '',
    vendortype: '',
    binNo: '',
    firstName:'',
    subcategory: '',
    variant: '',
    uom: '',
    qty: '',
    discount: '',
}

const FORM_VALIDATION = Yup.object().shape({
    vendorname: Yup.string().required('Required'),
    vendortype: Yup.string().required('Required'),
    binNo: Yup.number()
        .integer()
        .typeError('Please enter a valid Bin number')
        .required('Required'),
        firstName: Yup.string().required('Required'),
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

function NewVendor() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Vendor list', path: '/logistic/vendor' },
                        { name: 'New Vendor Info' },
                    ]}
                />
            </div>
            <SimpleCard title="New Vendor">
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
                                            <Textfield
                                                name="vendorname"
                                                label="Vendor Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="vendortype"
                                                label="Vendor Type"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography className='font'>
                                                Contact Person
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Textfield
                                                name="firstName"
                                                label="First Name"
                                            />
                                        </Grid>
                                
                                        <Grid item xs={4}>
                                            <Textfield
                                                name="MiddleName"
                                                label="Middle Name"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Textfield
                                                name="binNo"
                                                label="Last Name"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Telephone</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="qty"
                                                label="Mobile No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Company Tel No"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Email</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Company Email"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Company Email"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Company Tel No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Address</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="city"
                                                label="City"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="subcity"
                                                label="Subcity"
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
                                                name="houseNo"
                                                label="House No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="areaCode"
                                                label="Area Code "
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Button>ADD</Button>
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

export default NewVendor

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import DropDownData from '../../../utils/data/subcategory.json'
import uom from '../../../utils/data/uomlist.json'
import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import Button from '../../../components/FormsUI/Button/index'
import Uploader from '../../../components/FormsUI/fileupload'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Variant from '../../../utils/data/variants.json'

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
    firstName: '',
    barcode: '',
    binNo: '',
    subcategory: '',
    variant: '',
    uom: '',
    qty: '',
    discount: '',
}

const FORM_VALIDATION = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    barcode: Yup.string().required('Required'),
    binNo: Yup.number()
        .integer()
        .typeError('Please enter a valid Bin number')
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

function MaintenanceDetails
() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Managment', path: '/dashboard' },
                        { name: 'Record Maintenance Details' },
                    ]}
                />
            </div>
            <SimpleCard >
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
                                      <h3>Maintenance Details</h3>
                                      </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="vendorname"
                                                label="Issue Number"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="vendortype"
                                                label="Vendor"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="vendortype"
                                                label="Complete Service"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography className='font'>
                                            Guage Reading
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="firstName"
                                                label="Before service"
                                            />
                                        </Grid>
                                
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="binNo"
                                                label="After service"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="binNo"
                                                label="Technical Description of the issue "
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Technical Inspector </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="qty"
                                                label="Name"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Mobile No"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Invoice Details</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Labor cost"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Parts cost"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Total Cost"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Invoice No"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                        Invoice Upload
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Uploader name="discount"
                                                label=""/>
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

export default MaintenanceDetails


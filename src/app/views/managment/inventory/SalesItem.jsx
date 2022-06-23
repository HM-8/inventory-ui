import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Grid
} from '@mui/material'
import DropDownData from '../../../utils/data/subcategory.json'
import uom from '../../../utils/data/uomlist.json'
import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import Button from '../../../components/FormsUI/Button/index'

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
}))

const INITIAL_FORM_STATE = {
    firstName: '',
    barcode:'',
    binNo:'',
    subcategory:'',
    variant:'',
    uom:'',
    qty:'',
    discount:'',
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

function SalesItem() {

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Inventory managment', path: '/dashboard' },
                        { name: 'Item Sales' },
                    ]}
                />
            </div>
            <SimpleCard title="Item Sales">
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
                                                name="barcode"
                                                label="Barcode"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="lastName"
                                                label="Item Name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="binNo"
                                                label="Bin No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="subcategory"
                                                label="Subcategory"
                                                options={DropDownData}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="variant"
                                                label="Item Variant "
                                                options={Variant}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="uom"
                                                label="UMO"
                                                options={uom}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="qty"
                                                label="Quantity"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discount"
                                                label="Discount"
                                            />
                                        </Grid>                                          
                                        <Grid item xs={12}>
                                            <Button>ADD</Button>
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

export default SalesItem

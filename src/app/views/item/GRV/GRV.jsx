import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, TextField, Typography } from '@mui/material'

import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import DateTimePicker from '../../../components/FormsUI/DataTimePicker'
import Button from '../../../components/FormsUI/Button/index'
import Branches from '../../../utils/data/BranchList.json'
import Suppliers from '../../../utils/data/Supplierlist.json'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import attribute from '../../../utils/data/AttributeLIst.json'
import category from '../../../utils/data/categorylist.json'
import subcategory from '../../../utils/data/subcategory.json'

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
    code: '',
    invoiceno: '',
    itemname: '',
    description: '',
    branch: '',
    supplier: '',
    variant: '',
    optiones: '',
    category: '',
    subcategory: '',
    contactno:'',
    date: '',
}

const FORM_VALIDATION = Yup.object().shape({
    code: Yup.string().required('Required'),
    itemname: Yup.string().required('Required'),
    invoiceno: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    description: Yup.string().required('Required'),
    branch: Yup.string().required('Required'),
    supplier: Yup.string().required('Required'),
    variant: Yup.string().required('Required'),
    optiones: Yup.string().required('Required'),
    category: Yup.string().required('Required'),
    contactno: Yup.string().required('Required'),
    date: Yup.date().required('Required'),
    description: Yup.string(),
})

function Products() {
    const [state, setstate] = useState({
        date: new Date(),
    })
    const { quantity, date } = state
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Item', path: '/dashboard' },
                        { name: 'GRV' },
                    ]}
                />
            </div>
            <SimpleCard title="GRV Form">
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
                                            <Select
                                                name="branch"
                                                label="Branch "
                                                options={Branches}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="code"
                                                label="Item code"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="supplier"
                                                label="Suppliers "
                                                options={Suppliers}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="date"
                                                label="date"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="contactno"
                                                label="Contact No"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="invoiceno"
                                                label="Invoice No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Item Details
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="itemname"
                                                label="Item name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="description"
                                                label="Description"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Item Variant
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="variant"
                                                label="Item Attribute"
                                                options={attribute}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="optiones"
                                                label="Options"
                                                options={category}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="category"
                                                label="Category"
                                                options={category}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="subcategory"
                                                label="SubCategory "
                                                options={subcategory}
                                            />
                                        </Grid>1

                                        <Grid item xs={12}>
                                            <Button>Send</Button>
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

export default Products

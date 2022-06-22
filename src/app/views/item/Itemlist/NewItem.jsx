import { Grid, Typography } from '@mui/material'
import { Form, Formik } from 'formik'
import { useEffect } from 'react'
import * as Yup from 'yup'

import styled from '@emotion/styled'
import { Breadcrumb, SimpleCard } from 'app/components'
import DateTimePicker from 'app/components/FormsUI/DataTimePicker'
import {
    addCompanyInfo,
    updateCompanyInfo,
} from 'app/redux/actions/CompanyAction.js'
// import FormButton from 'app/views/material-kit/buttons/FormButton'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import BracodeReader from 'app/views/item/Itemlist/BracodeReader'
import Select from '../../../components/FormsUI/Select'
import Textfield from '../../../components/FormsUI/Textfield'
import Checkbox from 'app/components/FormsUI/Checkbox'
import genderList from '../../../utils/data/GenderList.json'
import Button from '../../../components/FormsUI/Button'

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
        itemName: '',
        itemCode: '',
        itemGroup: '',
        defaultMesurment: '',
        brand: '',
        description: '',
        shelfLife: '',
        warrentyPeriod: '',
        weight: '',
        endOfLife: '',
        defaultMaterialRequest: '',
        weightUOM: '',
        checkIN: '',
        requestFor: '',
        reorderLevel: '',
        reorderQty: '',
        materialRequest: '',
    }
    // console.log('data', data)
    // console.log('initial', INITIAL_FORM_STATE)

    const FORM_VALIDATION = Yup.object().shape({
        itemName: Yup.string().required('Required'),
        itemCode: Yup.string().required('Required'),
        itemGroup: Yup.string().required('Required'),
        defaultMesurment: Yup.string().required('Required'),
        brand: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        shelfLife: Yup.string().required('Required'),
        warrentyPeriod: Yup.string().required('Required'),
        weight: Yup.string().required('Required'),
        endOfLife: Yup.date().required('Required'),
        defaultMaterialRequest: Yup.string().required('Required'),
        weightUOM: Yup.string().required('Required'),
        checkIN: Yup.string().required('Required'),
        requestFor: Yup.string().required('Required'),
        reorderLevel: Yup.string().required('Required'),
        reorderQty: Yup.string().required('Required'),
        materialRequest: Yup.string().required('Required'),
    })

function NewItem() {
    const location = useLocation()
    const dispatch = useDispatch()
    var buttonText = 'Submit'
    var titleText = 'Add Item'
    var data = ''
    const url = '/general/company'
    console.log('location state', location.search)

    // if (location.state === 'edit') {
    //     buttonText = 'Update'
    //     titleText = 'Edit Item'
    //     data = JSON.parse(window.localStorage.getItem('ITEMS_INFO'))
    // }

    // useEffect(() => {}, [])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Items List',
                            path: '/inventory/item/itemlist',
                        },
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
                                    // if (location.state === 'edit') {
                                    //     dispatch(
                                    //         updateCompanyInfo(data.id, values)
                                    //     )
                                    // } else {
                                    //     dispatch(addCompanyInfo(values))
                                    // }
                                    console.log(values)
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Typography>
                                                Item details
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="itemName"
                                                label="Item Name"
                                            />
                                        </Grid>
                                        {/* 
                                        <Grid item xs={3}>
                                            <Checkbox name="disabled" label="Disabled" />
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Checkbox name="maintainStock" label="Maintain Stock" />
                                        </Grid> */}

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="itemCode"
                                                label="Item Code"
                                            />
                                        </Grid>

                                        {/* <Grid item xs={3}>
                                            <Checkbox name="alternativeItem" label="Allow Alternative Item" />
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Checkbox name="fixedAsset" label="Is Fixed Asset" />
                                        </Grid> */}

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="itemGroup"
                                                label="Item Group"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="defaultMesurment"
                                                label="Default Unit of Measurment"
                                                options={genderList}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Brand description
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="brand"
                                                label="Brand"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="description"
                                                label="Description"
                                                multiline={true}
                                                rows={4}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Inventory</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="shelfLife"
                                                label="Shelf Life in Days"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="warrentyPeriod"
                                                label="Warrenty Period(in days)"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="endOfLife"
                                                label="End of Life"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="weight"
                                                label="Weights Per Unit"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="defaultMaterialRequest"
                                                label="Default Material Request Type"
                                                options={genderList}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="weightUOM"
                                                label="Weight UOM"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Automatic Re-ordering
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="checkIN"
                                                label="Check in(group)"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="requestFor"
                                                label="Request for"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="reorderLevel"
                                                label="Re-order Level"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="reorderQty"
                                                label="Re-order Qty"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Select
                                                name="materialRequest"
                                                label="Material Request Type"
                                                options={genderList}
                                            />
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <Typography>
                                                Scan Barcode or Generate
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <BracodeReader />
                                        </Grid> */}
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

export default NewItem

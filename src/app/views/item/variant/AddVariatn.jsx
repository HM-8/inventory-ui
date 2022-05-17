// import {TextField,  } from '@mui/material'
import React from 'react'
// import Form from '../material-kit/forms/Form'
// import DropDown from '../material-kit/drop-down/DropDown'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

// import { makeStyles } from '@mui/styles';
import {
    //   Container,
    Grid,
    IconButton,
    Icon
} from '@mui/material'

import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import DateTimePicker from '../../../components/FormsUI/DataTimePicker'
import Checkbox from '../../../components/FormsUI/Checkbox'
import Button from '../../../components/FormsUI/Button/index'
// import countries from './data/countries.json';
// import countries from '../../utils/data/countries.json'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'

// import dropDownData from '../../../utils/data/dropDownData.json'
import dropDownData from '../../../utils/data/dropDownData.json'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import Form1 from '../GRV/Form1'
import Form2 from '../Form2'
import Form3 from '../Form3'
import Form4 from '../Form4'
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

function Variants() {
    const { palette } = useTheme()
    const textColor = palette.text.primary
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Varaint', path: '/item/variant' },
                        { name: 'New Variants' },
                    ]}
                />
            </div>
            <SimpleCard title="New Variant">
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
                                                label="Attribute Name"
                                            />
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Textfield
                                                name="lastName"
                                                label="Options"
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
                                            <Button>Submit Form</Button>
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

export default Variants

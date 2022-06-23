// import React from 'react'

// function CompanySetting() {
//   return (
//     <div>CompanySetting</div>
//   )
// }

// export default CompanySetting

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../components/FormsUI/Textfield'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Button from '../../components/FormsUI/Button/index'

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
    discountAmount: '',
    taxAmount: '',
    payment: '',
    phone: '',
    currency: '',
    minStock: '',
    expiredItems: '',
    shelfLifeEnd: '',
}

const FORM_VALIDATION = Yup.object().shape({
    discountAmount: Yup.string().required('Required'),
    taxAmount: Yup.string().required('Required'),
    payment: Yup.string().email('Invalid email.').required('Required'),
    currency: Yup.string().required('Required'),
    minStock: Yup.string(),
    expiredItems: Yup.string().required('Required'),
    shelfLifeEnd: Yup.string().required('Required'),
})
const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

function Settings() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Settings', path: '/dashboard' },
                        { name: 'Campany Defaults' },
                    ]}
                />
            </div>
            <SimpleCard title="Settings">
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
                                    console.log(values)
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="discountAmount"
                                                label="Default discount amount"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="taxAmount"
                                                label="Default Tax amount"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="payment"
                                                label="Default Payment Method"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <StyledButton
                                                variant="contained"
                                                color="primary"
                                            >
                                                Default Safety Stock
                                            </StyledButton>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="currency"
                                                label="Default Currency"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>
                                                Default Notification
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="minStock"
                                                label="Minimum stock level"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="expiredItems"
                                                label="Expired items"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="shelfLifeEnd"
                                                label="Shelf life ended items"
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

export default Settings

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
    Typography,
} from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import DateTimePicker from '../../../../components/FormsUI/DataTimePicker'
import Button from '../../../../components/FormsUI/Button'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'

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
    BranchName: '',
    Itemcode: '',
    IssueDate: '',
    ReqDate: '',
    Previous: '',
}

const FORM_VALIDATION = Yup.object().shape({
    BranchName: Yup.string().required('Required'),
    Itemcode: Yup.string().required('Required'),
    IssueDate: Yup.date().required('Required'),
    ReqDate: Yup.date().required('Required'),
    Previous: Yup.string(),
    new: Yup.string().required('Required'),

})

function ItemTransfer() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Transaction', path: '/dashboard' },
                        { name: 'Item Transfer' },
                    ]}
                />
            </div>
            <SimpleCard title="SIV Form">
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
                                                name="BranchName"
                                                label="Branch name"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Itemcode"
                                                label="Item code"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DateTimePicker
                                                name="IssueDate"
                                                label="Issue Date "
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DateTimePicker
                                                name="ReqDate"
                                                label="Req Date"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>
                                                Bin Location
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Previous"
                                                label="Previous"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="new"
                                                label="New"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
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

export default ItemTransfer

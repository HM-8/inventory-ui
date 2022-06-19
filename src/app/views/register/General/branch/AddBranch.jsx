import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'

import Textfield from '../../../../components/FormsUI/Textfield'
import Select from '../../../../components/FormsUI/Select'
import Button from '../../../../components/FormsUI/Button/index'
import DropDownData from '../../../../utils/data/dropDownData.json'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'
import FormButton from 'app/views/material-kit/buttons/FormButton'

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
    city: '',
    subCity: '',
    wereda: '',
    kebele: '',
    houseNo: '',
    branchManager: '',
    mobTel: '',
    officeTel: '',
    personalEmail: '',
    officeEmail: '',
    type: '',
}

const FORM_VALIDATION = Yup.object().shape({
    city: Yup.string().required('Required'),
    subCity: Yup.string().required('Required'),
    wereda: Yup.string().required('Required'),
    kebele: Yup.string().required('Required'),
    houseNo: Yup.string().required('Required'),
    branchManager: Yup.string().required('Required'),
    mobTel: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    officeTel: Yup.number()
        .integer()
        .typeError('Please enter a valid phone number')
        .required('Required'),
    personalEmail: Yup.string().email('Invalid email.').required('Required'),
    officeEmail: Yup.string().email('Invalid email.').required('Required'),
    type: Yup.string().required('Required'),
})

function Branch() {
    const location = useLocation();
    const [buttonText, setButtonText] = useState('Submit');
    const [titleText, setTitleText] = useState('Add Branch');
    const url = '/general/branch';

    useEffect(() => {
        if (location.state !== null) {
            var button = { ...buttonText };
            var title = { ...titleText };
            button = 'Update';
            title = 'Edit Branch';
            setButtonText(button);
            setTitleText(title);
        }
    }, []);

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Branch', path: '/general/branch' },
                        { name: 'New Branch' },
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
                                    console.log(values)
                                }}
                            >
                                <Form>
                                    <Grid container spacing={2}>
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
                                                name="city"
                                                label="City"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="subCity"
                                                label="Subcity"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Typography>Telephone</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="mobTel"
                                                label="Mobile No"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="officeTel"
                                                label="Office No"
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Textfield
                                                name="branchManager"
                                                label="Branch Manager"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Email</Typography>
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="personalEmail"
                                                label="Personal Email"
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <Textfield
                                                name="officeEmail"
                                                label="Office Email"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography>Type </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Select
                                                name="type"
                                                label="Inventory Type"
                                                options={DropDownData}
                                            />
                                        </Grid>

                                        <Grid item xs={12}>
                                        <FormButton title={buttonText} url={url}></FormButton>
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

export default Branch

import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Textfield from '../../../components/FormsUI/Textfield'
import Select from '../../../components/FormsUI/Select'
import Button from '../../../components/FormsUI/Button/index'
import DateTimePicker from '../../../components/FormsUI/DataTimePicker'

import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import Vehicle from '../../../utils/data/vehicleNameDD.json'

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
    issueno: '',
    carrying_cap: '',
    Idescription: '',
    priority: '',
    plate: '',
    uom: '',
    qty: '',
    discount: '',
}

const FORM_VALIDATION = Yup.object().shape({
    issueno: Yup.string().required('Required'),
    carrying_cap: Yup.string().required('Required'),
    Idescription: Yup.number()
        .integer()
        .typeError('Please enter a valid Bin number')
        .required('Required'),
        priority: Yup.string().required('Required'),
    duedate: Yup.date().required('Required'),
})

function NewIssues() {
    // const classes = useStyles();

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Issue List', path: '/logistic/issues' },
                        { name: 'New Issue' },
                    ]}
                />
            </div>
            <SimpleCard title="New Issue">
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
                                                name="issueno"
                                                label="Issue No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Select
                                                name="carrying_cap"
                                                label="Carrying Capacity"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="Idescription"
                                                label="Issue Description"
                                            />
                                        </Grid>
                                
                                        <Grid item xs={6}>
                                            <Select
                                                name="priority"
                                                label="Priority"
                                                options={Vehicle}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Textfield
                                                name="plate"
                                                label="Vehicle Plate No"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DateTimePicker
                                                name="duedate"
                                                label="Due Date"
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

export default NewIssues

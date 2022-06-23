import React from 'react'
import * as Yup from 'yup'
import { Grid, Typography } from '@mui/material'
import Select from '../../../../components/FormsUI/Select'
import genderList from '../../../../utils/data/GenderList.json'
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
}))

const EmployeeSetup = (props) => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography>Position</Typography>
                </Grid>

                <Grid item xs={12}>
                    <Select
                        name="department"
                        label="Department"
                        options={genderList}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Select
                        name="designation"
                        label="Designation"
                        options={genderList}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Select name="branch" label="Branch" options={genderList} />
                </Grid>
            </Grid>
        </Container>
    )
}
EmployeeSetup.label = 'Employee Setup'
EmployeeSetup.initialValues = {
    department: '',
    designation: '',
    branch: '',
}
EmployeeSetup.validationSchema =Yup.object().shape({
    department: Yup.string().required('Required'),
    designation: Yup.string().required('Required'),
    branch: Yup.string().required('Required'),
})
export default EmployeeSetup

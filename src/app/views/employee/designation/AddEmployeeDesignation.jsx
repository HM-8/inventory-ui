import { Grid, Icon, IconButton, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Form from '../../material-kit/forms/Form'
import DropDown from '../../material-kit/drop-down/DropDown'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import dropDownData from '../../../utils/data/dropDownData.json'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
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

function AddEmployeeDesignation() {
    const { palette } = useTheme()
    const textColor = palette.text.primary
    const [components, setComponents] = useState(['required-skill'])

    function addComponent() {
        setComponents([...components, 'required-skill'])
        console.log(components)
    }
    function removeComponent() {
        components.pop();
        setComponents([...components, 'required-skill'])
        console.log(components)
    }

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        {
                            name: 'Employee Designation',
                            path: '/employee/employee-designation',
                        },
                        { name: 'Add Employee Designation' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Employee Designation">
                <Form buttonText={buttonText}>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                type="text"
                                id="standard-basic"
                                name="name"
                                fullWidth
                                sx={{ mb: 3 }}
                                label="Designation Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    {components.map((item, i) => (
                                        <TextField
                                            required
                                            type="text"
                                            id="standard-basic"
                                            name="required-skill"
                                            fullWidth
                                            sx={{ mb: 3 }}
                                            label="Required Skill"
                                        />
                                    ))}
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton
                                        sx={{ mt: 0.5}}
                                        onClick={addComponent}
                                    >
                                        <Icon sx={{ color: textColor }}>
                                            add_circle
                                        </Icon>
                                    </IconButton>
                                </Grid>
                                <Grid item xs={2}>
                                    <IconButton
                                        sx={{ mt: 0.5, ml: -8 }}
                                        onClick={removeComponent}
                                    >
                                        <Icon sx={{ color: textColor }}>
                                            remove_circle
                                        </Icon>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Description"
                                multiline
                                rows={4}
                                fullWidth
                                type="text"
                                name="description"
                                sx={{ mb: 3 }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}></Grid>
                </Form>
            </SimpleCard>
        </Container>
    )
}

export default AddEmployeeDesignation

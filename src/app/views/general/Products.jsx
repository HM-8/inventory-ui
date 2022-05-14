import { Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import Form from '../material-kit/forms/Form'
import DropDown from '../material-kit/drop-down/DropDown'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
// import dropDownData from '../../../utils/data/dropDownData.json'
import dropDownData from '../../utils/data/dropDownData.json'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

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

function Products() {
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'General', path: '/dashboard' },
                        { name: 'products' },
                    ]}
                />
            </div>
            <SimpleCard title="product">
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
                                label="Name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <DropDown
                                label="Employment Type"
                                options={dropDownData}
                            />
                        </Grid>
                    </Grid>
                    <Typography sx={{ mb: 2 }}> If Intern/Contract</Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    renderInput={(props) => (
                                        <TextField
                                            {...props}
                                            // variant="Outlined"
                                            id="mui-pickers-date"
                                            label="Joining Date"
                                            sx={{ mb: 3, width: '100%' }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    renderInput={(props) => (
                                        <TextField
                                            {...props}
                                            // variant="Outlined"
                                            id="mui-pickers-date"
                                            label="End Date"
                                            sx={{ mb: 3, width: '100%' }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Typography sx={{ mb: 2 }}>
                        {' '}
                        If Part-Time/Full-Time
                    </Typography>
                    <Grid container spacing={4}>
                        <Grid item xs={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    renderInput={(props) => (
                                        <TextField
                                            {...props}
                                            // variant="Outlined"
                                            id="mui-pickers-date"
                                            label="Joining Date"
                                            sx={{ mb: 3, width: '100%' }}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
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

export default Products

import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import {
    getItems,
} from 'app/redux/actions/AuthenticationAction'

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))
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

function Company() {
    const dispatch = useDispatch()
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[{ name: 'Company', path: '/dashbaord' }]}
                />
            </div>
            <SimpleCard title="Company ">
                <Grid container>
                    <Grid item xs={6}>
                        Company Name
                    </Grid>
                    <Grid item xs={6}>
                        Abbreviation
                    </Grid>
                    <Grid item xs={6}>
                        Website Link
                    </Grid>
                    <Grid item xs={6}>
                        Company Telephone
                    </Grid>
                    <Grid item xs={6}>
                        Fax
                    </Grid>
                    <Grid item xs={6}>
                        Offical Email
                    </Grid>
                    <Grid item xs={12}>
                        <StyledButton variant="contained" color="secondary" onClick={() =>
                                                dispatch(
                                                    getItems()
                                                )
                                            }> 
                            Edit
                        </StyledButton>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default Company

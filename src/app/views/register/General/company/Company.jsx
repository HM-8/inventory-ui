import React, { useEffect, useState } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getCompanyInfo } from 'app/redux/actions/CompanyAction.js'
// import { intlFormat } from 'date-fns/esm'

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
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCompanyInfo())
    }, [])

    const companyInfo = useSelector((state) => state.company.companyInfo)
    console.log('Company state' + companyInfo)

    useEffect(() => {
        localStorage.setItem('COMPANY_INFO',JSON.stringify(companyInfo))
    }, [companyInfo])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[{ name: 'Company', path: '/dashboard' }]}
                />
            </div>
            <SimpleCard title="Company ">
                <Grid container>
                    <Grid item xs={6}>
                        Company Name
                    </Grid>
                    <Grid item xs={6}>
                        <strong>{companyInfo.name}</strong>
                    </Grid>
                    <Grid item xs={6}>
                        Abbreviation
                    </Grid>
                    <Grid item xs={6}>
                        <strong>{companyInfo.abbreviation}</strong>
                    </Grid>
                    <Grid item xs={6}>
                        Website Link
                    </Grid>
                    <Grid item xs={6}>
                        <strong>{companyInfo.website}</strong>
                    </Grid>
                    <Grid item xs={6}>
                        Company Telephone
                    </Grid>
                    <Grid item xs={6}>
                        <strong>{companyInfo.telephone}</strong>
                    </Grid>
                    <Grid item xs={6}>
                        Fax
                    </Grid>
                    <Grid item xs={6}>
                        <strong>{companyInfo.fax}</strong>
                    </Grid>
                    <Grid item xs={12}>
                        <StyledButton
                            variant="contained"
                            color="secondary"
                            onClick={() => navigate('/general/edit-company')}
                        >
                            Edit
                        </StyledButton>
                    </Grid>
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default Company

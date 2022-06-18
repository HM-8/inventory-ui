import React, { useEffect } from 'react'
import { Grid, Typography, Button } from '@mui/material'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { getCompanyInfo } from 'app/redux/actions/CompanyAction.js'

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
    const dispatch = useDispatch();

    useEffect(() => {
        
        return () => {
            dispatch(getCompanyInfo())
        }
    }, [])

    const { company } = useSelector((state) => state.company.companyInfo[0])
    console.log('company ' + company)

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[{ name: 'Company', path: '/dashbaord' }]}
                />
            </div>
            <SimpleCard title="Company ">
                <Grid container>
                    {/* {
                        company.map((info,index)=>{
                            
                        })
                    } */}
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

import React, { useEffect } from 'react'
import { Grid, Button } from '@mui/material'
import { Breadcrumb, SimpleCard } from 'app/components'
import styled from '@emotion/styled'
import { useSelector, useDispatch } from 'react-redux'
import { getCompanyInfo } from 'app/redux/actions/CompanyAction.js'
import TableButton from 'app/views/material-kit/buttons/LinkButton'
const url = '/general/edit-company'

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

    useEffect(() => {
        dispatch(getCompanyInfo())
    }, [])

    const companyInfo = useSelector((state) => state.company.companyInfo)
    console.log('Company state', companyInfo)

    useEffect(() => {
        localStorage.setItem('COMPANY_INFO', JSON.stringify(companyInfo))
    }, [companyInfo])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[{ name: 'Company', path: '/dashboard' }]}
                />
            </div>

            {companyInfo ? (
                ''
            ) : (
                <div>
                    <Grid
                        container
                        direction="row"
                        spacing={2}
                        justifyContent="flex-end"
                    >
                        <Grid item>
                            <Grid item>
                                <Grid item>
                                    <TableButton
                                        buttonText="Add Company"
                                        url={url}
                                        state="add"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            )}

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
                    {companyInfo === [] ? (
                        <Grid item xs={6}>
                        <TableButton
                            buttonText="Edit"
                            url={url}
                            state="edit"
                        />
                    </Grid>
                    ) : (
                        ''
                    )}
                </Grid>
            </SimpleCard>
        </Container>
    )
}

export default Company

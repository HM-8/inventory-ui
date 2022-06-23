import React, { Fragment } from 'react'
import StatCards from './shared/StatCards'
//import Campaigns from './shared/Campaigns'
import { Grid, Card, Box, Container } from '@mui/material'
import { styled, useTheme } from '@mui/system'
import { SimpleCard } from 'app/components'
import LineChart from '../cards/echarts/LineChart'

const ContentBox = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
}))

const H4 = styled('h4')(({ theme }) => ({
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '16px',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
}))

const Analytics = () => {
    const { palette } = useTheme()

    return (
        <Fragment>
            <ContentBox className="analytics">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={8} sm={12} xs={12}>
                        <StatCards />
                        <Container>
                           
                            <SimpleCard title="Revenue Stats">
                                <LineChart
                                    height="350px"
                                    color={[
                                        palette.primary.main,
                                        palette.primary.light,
                                    ]}
                                />
                            </SimpleCard>
                        </Container>
                    </Grid>
                </Grid>
            </ContentBox>
        </Fragment>
    )
}

export default Analytics

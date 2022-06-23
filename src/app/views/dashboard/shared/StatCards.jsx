import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Small } from 'app/components/Typography'

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px !important',
    background: theme.palette.background.paper,
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))

const ContentBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    '& small': {
        color: theme.palette.text.secondary,
    },
    '& .icon': {
        opacity: 0.6,
        fontSize: '44px',
        color: theme.palette.primary.main,
    },
}))

const Heading = styled('h6')(({ theme }) => ({
    margin: 0,
    marginTop: '4px',
    fontWeight: '500',
    fontSize: '14px',
    color: theme.palette.primary.main,
}))

const StatCards = () => {
    return (
        <Grid container spacing={3} sx={{ mb: '24px' }}>
            <Grid item xs={12} md={6}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        {/* <Icon className="icon">group</Icon> */}
                        <Box ml="12px">
                            <Small>New Employees joined in a month</Small>
                            <Heading>30</Heading>
                        </Box>
                    </ContentBox>
                    {/* <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip> */}
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        {/* <Icon className="icon">timeline</Icon> */}
                        <Box ml="12px">
                            <Small sx={{ lineHeight: 1 }}>
                                Total Employees Promoted in this month
                            </Small>
                            <Heading>80</Heading>
                        </Box>
                    </ContentBox>
                    {/* <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip> */}
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        {/* <Icon className="icon">store</Icon> */}
                        <Box ml="12px">
                            <Small>Total Employees Transfered in this month</Small>
                            <Heading>8</Heading>
                        </Box>
                    </ContentBox>
                    {/* <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip> */}
                </StyledCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <StyledCard elevation={6}>
                    <ContentBox>
                        {/* <Icon className="icon">shopping_cart</Icon> */}
                        <Box ml="12px">
                            <Small>Total Employees Terminated in this month</Small>
                            <Heading>31</Heading>
                        </Box>
                    </ContentBox>
                    {/* <Tooltip title="View Details" placement="top">
                        <IconButton>
                            <Icon>arrow_right_alt</Icon>
                        </IconButton>
                    </Tooltip> */}
                </StyledCard>
            </Grid>
        </Grid>
    )
}

export default StatCards

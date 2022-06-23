import React from 'react'
import { Small } from 'app/components/Typography'
import { Box, useTheme } from '@mui/system'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <div>
            <SimpleCard title="My Appraisal Status">
                <Small sx={{ color: secondary }}>Peer Review</Small>
                <Box sx={{ pt: 1 }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Last Review"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Current Review"
                />
                {/* <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                /> */}

                <Box sx={{ py: '12px' }} />
                <Small sx={{ color: secondary }}>Customer Review</Small>
                <Box sx={{ py: 1 }} />
                <MatxProgressBar
                    value={45}
                    color="primary"
                    text="Last Review"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={65}
                    color="secondary"
                    text="Current Review"
                />
                {/* <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                /> */}

                <Box sx={{ py: '12px' }} />
                <Small sx={{ color: secondary }}>Departement Review</Small>
                <Box sx={{ py: '8px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Last Review"
                />
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={85}
                    color="secondary"
                    text="Current Review"
                />
                {/* <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text="Tensor (80k)"
                /> */}
            </SimpleCard>
            <br />
        </div>
    )
}

export default Campaigns

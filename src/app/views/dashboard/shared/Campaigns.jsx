import React from 'react'
import { Small } from 'app/components/Typography'
import { Box, useTheme } from '@mui/system'
import { SimpleCard, MatxProgressBar } from 'app/components'

const Campaigns = () => {
    const theme = useTheme()
    const secondary = theme.palette.text.secondary

    return (
        <div>
            <SimpleCard title="Last Yesr Revenue">
                <Small sx={{ color: secondary }}>Jan</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                    text=""
                />
                <Small sx={{ color: secondary }}>Fab</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                    text="Twitter (40k)"
                />
                <Small sx={{ color: secondary }}>Mar</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={65}
                    color="primary"
                    text="Tensor (80k)"
                />

                <Small sx={{ color: secondary }}>Apr</Small>
                <Box sx={{ py: 1 }} />
                <MatxProgressBar
                    value={85}
                    color="primary"
                    text="Google (102k)"
                />
                <Small sx={{ color: secondary }}>May</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={25}
                    color="secondary"
                />
                <Small sx={{ color: secondary }}>Jun</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={55}
                    color="primary"
                />

                <Small sx={{ color: secondary }}>Jul</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={95}
                    color="primary"
                />
                <Small sx={{ color: secondary }}>Aug</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="secondary"
                />
                <Small sx={{ color: secondary }}>Sept</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="primary"
                />
              
                <Small sx={{ color: secondary }}>Oct</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={35}
                    color="primary"
                />
                <Small sx={{ color: secondary }}>Nov</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={75}
                    color="secondary"
                />
                <Small sx={{ color: secondary }}>Dec</Small>
                <Box sx={{ py: '4px' }} />
                <MatxProgressBar
                    value={45}
                    color="primary"
                />
            </SimpleCard>
        </div>
    )
}

export default Campaigns

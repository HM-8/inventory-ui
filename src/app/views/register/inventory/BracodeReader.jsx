import React from 'react'
import { Box, styled } from '@mui/system'
import { Button } from '@mui/material'
function BracodeReader() {
    const StyledButton = styled(Button)(({ theme }) => ({
        margin: theme.spacing(1),
    }))
    return (
        <div>
            <StyledButton variant="contained" color="secondary">
                Barcode
            </StyledButton>
        </div>
    )
}

export default BracodeReader

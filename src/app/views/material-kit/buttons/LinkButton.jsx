import styled from '@emotion/styled'
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

function TableButton({buttonText, url}) {
    return (
        <StyledButton variant="contained" color="primary" component={Link} to={url}>
            {buttonText}
        </StyledButton>
    )
}

export default TableButton

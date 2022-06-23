import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import styled from '@emotion/styled'

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
}))

export default function FormDialog({ title, buttonText, children }) {
    const [open, setOpen] = useState(false)

    function handleClickOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }

    return (
        <div>
            <StyledButton
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
            >
                {buttonText}
            </StyledButton>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleClose}
                        color="primary"
                        variant="contained"
                    >
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

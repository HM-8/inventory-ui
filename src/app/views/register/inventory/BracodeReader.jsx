import React, { useState } from 'react'
import { Box, styled } from '@mui/system'
import { Button } from '@mui/material'

import BarcodeScannerComponent from 'react-qr-barcode-scanner'

function BracodeReader() {
    const StyledButton = styled(Button)(({ theme }) => ({
        margin: theme.spacing(1),
    }))
    const [data, setData] = useState('Barcode')
    const [stopStream, setStopStream] = useState(false)

    return (
        <>
            {stopStream ? (
                <BarcodeScannerComponent
                    width={500}
                    height={500}
                    stopStream={stopStream}
                    onUpdate={(err, result) => {
                        if (result) {
                            setData(result.text)
                            setStopStream(true)
                        } else {
                            setData('Barcode')
                        }
                    }}
                />
            ) : (
                ' '
            )}

            <p>{data}</p>
            {/* <button onClick={() => setStopStream(true)}>Scan</button> */}
            <Button
                onClick={() => setStopStream(true)}
                variant="contained"
                color="secondary"
            >
                Scan
            </Button>
            <StyledButton onClick={() => setStopStream(false)} color="primary" variant="outlined">
                Cancel Scan
            </StyledButton>
            <StyledButton
                onClick={() => setStopStream(true)}
                variant="contained"
                color="secondary"
            >
                Generate
            </StyledButton>
            {/* <button onClick={() => setStopStream(false)}>Cancel</button> */}
        </>
    )
}

export default BracodeReader

import { Button, styled } from '@mui/material'
import React from 'react'
import BarcodeScannerComponent from 'react-qr-barcode-scanner'

function BarcodeReader() {
    const [data, setData] = React.useState('Not Found')
    const [stopStream, setStopStream] = React.useState(true)

    const StyledButton = styled(Button)(({ theme }) => ({
        margin: theme.spacing(1),
    }))
    return (
        <>
            {stopStream ? (
                ' '
            ) : (
                <div>
                    <BarcodeScannerComponent
                        width={500}
                        height={500}
                        stopStream={stopStream}
                        onUpdate={(err, result) => {
                            if (result) {
                                setData(result.text)
                            }
                        }}
                    />
                    <p>{data}</p>
                </div>
            )}
            
            <Button
                onClick={() => setStopStream(false)}
                variant="contained"
                color="secondary"
            >
                Scan
            </Button>
            <StyledButton
                onClick={() => setStopStream(true)}
                color="primary"
                variant="outlined"
            >
                Cancel Scan
            </StyledButton>
            <StyledButton
                variant="contained"
                color="secondary"
            >
                Generate
            </StyledButton>
        </>
    )
}

export default BarcodeReader

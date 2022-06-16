import React, { useState } from 'react'
import { Box, styled } from '@mui/system'
import { Button } from '@mui/material'

import BarcodeScannerComponent from 'react-qr-barcode-scanner'

function BracodeReader() {
    const StyledButton = styled(Button)(({ theme }) => ({
        margin: theme.spacing(1),
    }))
    const [data, setData] = useState('Not Found')
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
                            setData('Not Found')
                        }
                    }}
                />
            ) : (
                'Nothing to show here'
            )}

            <p>{data}</p>
            <button onClick={() => setStopStream(true)}>Scan</button>
            <button onClick={() => setStopStream(false)}>Cancel</button>
        </>
    )
}

export default BracodeReader


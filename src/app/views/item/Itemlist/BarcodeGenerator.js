import React, { useState } from 'react'
import { Fab, Button, TextField, styled, Grid, Typography } from '@mui/material'
import { useBarcode } from '@createnextapp/react-barcode'
import {arrow_drop_down} from '@mui/icons-material'

function BarcodeGenerator() {
    const StyledButton = styled(Button)(({ theme }) => ({
        margin: theme.spacing(1),
    }))

    const [barcode, setBarcode] = useState(null);
    const [show, setshow] = useState(true)
    const handleChange = (event) => {
        setBarcode(event.target.value ? event.target.value : ' ');
    };
    const { inputRef } = useBarcode({
        value: barcode,
        options: {
            background: '#ffffff',
        }
    });
    const downloadBarcode = () => {
        const canvas = document.getElementById("mybarcode");
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "mybarcode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <>
            {show ? (
                <div>
                    <div style={{ marginTop: 30, marginBottom: 30 }}>
                        <TextField onChange={handleChange} style={{ width: 320 }}
                            value={barcode} label="Barcode content" size="large" variant="outlined" color="secondary"
                        />
                    </div>

                    <div>
                        {
                            barcode === " "
                                ?
                                <p>No barcode preview</p>
                                :
                                <canvas id="mybarcode" ref={inputRef} />
                        }
                    </div>
                    <div>
                        {
                            barcode ?
                                <Grid container style={{ marginTop: 30 }}>
                                    <Grid item xs={2}>
                                        <Fab onClick={downloadBarcode} style={{ marginLeft: 10 }} color="secondary">
                                            <button>{arrow_drop_down}</button>
                                        </Fab>
                                    </Grid>
                                </Grid> :
                                ''
                        }
                    </div>
                </div>)
                : " "
            }

            <Button
                onClick={() => setshow(true)}
                variant="contained"
                color="secondary"
            >
                Generate
            </Button>
        </>
    );
}

export default BarcodeGenerator;

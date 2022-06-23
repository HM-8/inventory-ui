import React, { useState } from 'react'
import * as Yup from 'yup'
import {
    Grid,
    Icon,
    TextField,
    Button,
    IconButton,
} from '@mui/material'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const Container = styled('div')(({ theme }) => ({
    marginLeft: '2px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const INITIAL_FORM_STATE = {
    MeasurementUnit: '',
    abbreviation: '',
    description: '',
}

const FORM_VALIDATION = Yup.object().shape({
    MeasurementUnit: Yup.string().required('Required'),
    abbreviation: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
})

function NewUom() {
    const { palette } = useTheme()
    const textColor = palette.text.primary
    const [components, setComponents] = useState([
        {
            MeasurementUnit: '',
            abbreviation: '',
            description: '',
        },
    ])

    function addComponent() {
        setComponents([
            ...components,
            {
                MeasurementUnit: '',
                abbreviation: '',
                description: '',
            },
        ])
    }
    function removeComponent(index) {
        const values = [...components]
        values.splice(index, 1)
        setComponents(values)
    }
    const handleChange = (index, event) => {
        const values = [...components]
        values[index][event.target.name] = event.target.value
        setComponents(values)
    }
    const handleSubmit = () => {
        console.log(components)
    }
    return (
            <Grid container>
                <Grid item xs={12}>
                    <Container maxWidth="md">
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                {components.map((item, index) => (
                                    <Grid
                                        container
                                        spacing={2}
                                        key={index}
                                        style={{
                                            margin: '1px',
                                        }}
                                    >
                                        <Grid item xs={3}>
                                            <TextField
                                                name="MeasurementUnit"
                                                label="Measurement Unit"
                                                fullWidth
                                                value={item.MeasurementUnit}
                                                onChange={(event) =>
                                                    handleChange(index, event)
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                name="abbreviation"
                                                label="abbreviation"
                                                fullWidth
                                                value={item.abbreviation}
                                                onChange={(event) =>
                                                    handleChange(index, event)
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                name="description"
                                                label="Description"
                                                fullWidth
                                                value={item.description}
                                                onChange={(event) =>
                                                    handleChange(index, event)
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={2}>
                                            <IconButton
                                                sx={{ mt: 0.5 }}
                                                onClick={addComponent}
                                            >
                                                <Icon
                                                    sx={{
                                                        color: textColor,
                                                    }}
                                                >
                                                    add_circle
                                                </Icon>
                                            </IconButton>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <IconButton
                                                sx={{ mt: 0.5, ml: -8 }}
                                                onClick={() =>
                                                    removeComponent(index)
                                                }
                                            >
                                                <Icon
                                                    sx={{
                                                        color: textColor,
                                                    }}
                                                >
                                                    remove_circle
                                                </Icon>
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleSubmit()}
                                    >
                                        Add
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Grid>
            </Grid>
    )
}

export default NewUom


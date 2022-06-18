import React, { useState } from 'react'
import * as Yup from 'yup'
import {
    Grid,
    Icon,
    Typography,
    TextField,
    Button,
    IconButton,
} from '@mui/material'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const Container = styled('div')(({ theme }) => ({
    margin: '10px',
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

function AddDepartment() {
    const { palette } = useTheme()
    const textColor = palette.text.primary
    const [components, setComponents] = useState([
        {
            DepartmentName: '',
            DepartmentHead: '',
            description: '',
        },
    ])

    function addComponent() {
        setComponents([
            ...components,
            {
                DepartmentName: '',
                DepartmentHead: '',
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
                                <Grid item xs={12} style={{marginLeft:'2px'}}>
                                    <Typography>Add Product</Typography>
                                </Grid>
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
                                                name="DepartmentName"
                                                label="Department Name"
                                                fullWidth
                                                value={item.DepartmentName}
                                                onChange={(event) =>
                                                    handleChange(index, event)
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <TextField
                                                name="DepartmentHead"
                                                label="Head"
                                                fullWidth
                                                value={item.DepartmentHead}
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

export default AddDepartment


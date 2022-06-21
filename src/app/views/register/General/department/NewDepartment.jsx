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
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
    addDepartmentInfo,
    updateDepartmentInfo,
} from 'app/redux/actions/DepartmentAction'

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
    const location = useLocation()
    const dispatch = useDispatch()
    const { palette } = useTheme()
    const textColor = palette.text.primary
    const [components, setComponents] = useState([
        {
            name: '',
            head: '',
            description: '',
        },
    ])
    let finalObj = {}

    function addComponent() {
        setComponents([
            ...components,
            {
                name: '',
                head: '',
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
        console.log('Submited Components', components)

        for (let i = 0; i < components.length; i++) {
            Object.assign(finalObj, components[i])
        }
        console.log('final Object', finalObj)

        if (location.state === 'edit') {
            dispatch(updateDepartmentInfo(components))
        } else {
            dispatch(addDepartmentInfo(components))
        }
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <Container>
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
                                            name="name"
                                            label="Department Name"
                                            fullWidth
                                            value={item.name}
                                            onChange={(event) =>
                                                handleChange(index, event)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <TextField
                                            name="head"
                                            label="Head"
                                            fullWidth
                                            value={item.head}
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

import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Grid, Icon, Typography, IconButton } from '@mui/material'

import Textfield from '../../../components/FormsUI/Textfield'
import Button from '../../../components/FormsUI/Button/index'
import { Breadcrumb, SimpleCard } from 'app/components'
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

const INITIAL_FORM_STATE = {
    productName: '',
    productType: '',
    description: '',
}

const FORM_VALIDATION = Yup.object().shape({
    // productName: Yup.string().required('Required'),
    // productType: Yup.string().required('Required'),
    // description: Yup.string().required('Required'),
})

function Products() {
    const { palette } = useTheme()
    const textColor = palette.text.primary
    const [components, setComponents] = useState([
        {
            productName: '',
            productType: '',
            description: '',
        },
    ])

    function addComponent() {
        setComponents([
            ...components,
            {
                productName: '',
                productType: '',
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
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(components)
    }
    return (
        <SimpleCard>
            <Grid container>
                <Grid item xs={12}>
                    <Container maxWidth="md">
                        <Formik
                            initialValues={{
                                ...INITIAL_FORM_STATE,
                            }}
                            validationSchema={FORM_VALIDATION}
                            onSubmit={(values) => {
                                console.log(values)
                            }}
                        >
                            <Form>
                                {components.map((item, index) => (
                                    <Grid container spacing={3} key={index}>
                                        <Grid item xs={4}>
                                            <Textfield
                                                name="productName"
                                                label="Attribute Name"
                                                value={item.productName}
                                                onChange={(event) =>
                                                    handleChange(index, event)
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Textfield
                                                name="productType"
                                                label="Options Name"
                                                value={item.productType}
                                                onChange={(event) =>
                                                    handleChange(index, event)
                                                }
                                            />
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Textfield
                                                name="description"
                                                label="Description"
                                                value={item.description}
                                                onChange={(event) =>
                                                    handleChange(index, event)
                                                }
                                            />
                                        </Grid>
                                        <Grid item xs={1}>
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
                                    <Button onClick={() => handleSubmit()}>
                                        Add
                                    </Button>
                                </Grid>
                            </Form>
                        </Formik>

                        {/* </div> */}
                    </Container>
                </Grid>
            </Grid>
        </SimpleCard>
    )
}

export default Products

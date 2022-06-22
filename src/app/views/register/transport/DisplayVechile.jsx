import { Grid } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Breadcrumb, SimpleCard } from 'app/components'
import { getallVehicles } from 'app/redux/actions/VehicleAction'
import PaginationTable from 'app/views/material-kit/tables/PaginationTable'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
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

const columns = [
    { id: 'brand', label: 'Brand' },
    { id: 'model', label: 'Model' },
    { id: 'color', label: 'Color' },
    { id: 'regNo', label: 'Registration No' },
    { id: 'yearofMan', label: 'Manufactured Year' },
    { id: 'plateNo', label: 'Plate No' },
    { id: 'usage', label: 'Usage' },
    { id: 'carryingCapacity', label: 'Carrying Capacity' },
    { id: 'status   ', label: 'Status', minWidth: 10 },
]

function createData(
    city,
    subCity,
    wereda,
    kebele,
    houseNo,
    branchManager,
    mobTel,
    officeTel,
    personalEmail,
    officeEmail,
    type,
    edit,
    del
) {
    return {
        city: city,
        subCity: subCity,
        wereda: wereda,
        kebele: kebele,
        houseNo: houseNo,
        branchManager: branchManager,
        mobTel: mobTel,
        officeTel: officeTel,
        personalEmail: personalEmail,
        officeEmail: officeEmail,
        type: type,
        edit: edit,
        del: del,
    }
}

const Branch = () => {
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallVehicles())
    }, [])
    const { branches } = useSelector((state) => state.branch)

    console.log('Branches', branches)

    useEffect(() => {
        localStorage.setItem('BRANCHES_INFO', JSON.stringify(branches))
    }, [branches])

    const rows = branches.map((item, index) => {
        const container = {}
        createData(
            (container.city = item.location.city),
            (container.subCity = item.location.subCity),
            (container.wereda = item.location.wereda),
            (container.kebele = item.location.kebele),
            (container.houseNo = item.location.houseNo),
            (container.branchManager = item.branchManager),
            (container.mobTel = item.telephone.mobile),
            (container.officeTel = item.telephone.office),
            (container.personalEmail = item.email.personal),
            (container.officeEmail = item.email.office),
            (container.type = item.type),
        )
        return container
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Logistics Management', path: '/dashboard' },
                        { name: 'Vehicles' },
                    ]}
                />
            </div>
            <SimpleCard title="Vehicles">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Branch

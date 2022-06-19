import TableButton from '../../../material-kit/buttons/LinkButton'
import { DeleteButton } from '../../../material-kit/buttons/DeleteButton'
import { EditButton } from '../../../material-kit/buttons/EditButton'
import { Grid } from '@mui/material'
import { Box, styled } from '@mui/system'
import { Breadcrumb, SimpleCard } from 'app/components'
import { getallBranches } from 'app/redux/actions/BranchAction'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PaginationTable from '../../../material-kit/tables/PaginationTable'
const url = '/general/NewBranch'

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
    { id: 'city', label: 'City' },
    { id: 'subCity', label: 'SubCity' },
    { id: 'wereda', label: 'Wereda' },
    { id: 'kebele', label: 'Kebele' },
    { id: 'houseNo', label: 'House No' },
    { id: 'branchManager', label: 'Branch Manager' },
    { id: 'mobTel', label: 'Mobile Telephone' },
    { id: 'officeTel', label: 'OfficeTelephone' },
    { id: 'personalEmail', label: 'Personal Email' },
    { id: 'officeEmail', label: 'Office Email' },
    { id: 'type', label: 'Type' },
    { id: 'edit', label: '', minWidth: 10 },
    { id: 'del', label: '', minWidth: 10 },
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
    const { branches } = useSelector((state) => state.branch)

    useEffect(() => {
        dispatch(getallBranches())
    }, [])

    console.log(branches)
    const rows = branches.map((item) => {
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
            (container.edit = <EditButton url={url} item={item} />),
            (container.del = <DeleteButton id={item.id} />)
        )
        return container
    })

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'General', path: '/dashboard' },
                        { name: 'Branch' },
                    ]}
                />
            </div>
            <Box py="1px" />
            <Grid
                container
                direction="row"
                spacing={2}
                justifyContent="flex-end"
            >
                <Grid item>
                    <Grid item>
                        <Grid item>
                            <TableButton buttonText="Add Branch" url={url} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <SimpleCard title="Branches">
                <PaginationTable columns={columns} rows={rows} />
            </SimpleCard>
        </Container>
    )
}

export default Branch

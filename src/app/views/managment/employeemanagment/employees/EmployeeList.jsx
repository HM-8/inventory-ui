// import React, { useEffect } from 'react'
// import { slideDown, slideUp } from './anim'
// import './style.css'

// import { useSelector, useDispatch } from 'react-redux'
// import { getallEmployees } from 'app/redux/actions/EmployeeAction'

// function formatDate(str) {
//     return str.substr(0, 10)
// }

// function capitalize(str) {
//     return str
//         .split(' ')
//         .map((s) => {
//             return s.charAt(0).toUpperCase() + s.substr(1)
//         })
//         .join(' ')
// }

// class UserTableRow extends React.Component {
//     state = { expanded: false }

//     toggleExpander = (e) => {
//         if (e.target.type === 'checkbox') return

//         if (!this.state.expanded) {
//             this.setState({ expanded: true }, () => {
//                 if (this.refs.expanderBody) {
//                     slideDown(this.refs.expanderBody)
//                 }
//             })
//         } else {
//             slideUp(this.refs.expanderBody, {
//                 onComplete: () => {
//                     this.setState({ expanded: false })
//                 },
//             })
//         }
//     }
    
//     render() {
//         const { user } = this.props
        

//         useEffect(() => {
//             dispatch(getallEmployees())
//         }, [])

//         const EmployeeInfo = useSelector((state) => state.employee.employeeInfo)
//         console.log('Company state', EmployeeInfo)

//         useEffect(() => {
//             localStorage.setItem('COMPANY_INFO', JSON.stringify(companyInfo))
//         }, [companyInfo])
//         return [
//             <tr key="main" onClick={this.toggleExpander}>
//                 <td>
//                     <img
//                         className="uk-preserve-width uk-border-circle"
//                         src={user.picture.thumbnail}
//                         width={90}
//                         alt="avatar"
//                     />
//                 </td>
//                 <td>
//                     {capitalize(user.name.first + ' ' + user.name.last)}
//                     <br />
//                     <small>{user.email}</small>
//                 </td>
//                 <td>
//                     {capitalize(user.location.city)} ({user.nat})
//                 </td>
//                 <td>{formatDate(user.registered)}</td>
//             </tr>,

//             this.state.expanded && (
//                 <tr className="expandable" key="tr-expander">
//                     <td className="uk-background-muted" colSpan={20}>
//                         <div ref="expanderBody" className="inner uk-grid">
//                             <div className="uk-width-1-4 uk-text-center">
//                                 <img
//                                     className="uk-preserve-width uk-border-circle"
//                                     src={user.picture.large}
//                                     alt="avatar"
//                                 />
//                             </div>
//                             <div className="uk-width-3-4">
//                                 <h3>
//                                     {capitalize(
//                                         user.name.first + ' ' + user.name.last
//                                     )}
//                                 </h3>
//                                 <p>
//                                     Address:
//                                     <br />
//                                     <i>
//                                         {capitalize(user.location.street)}
//                                         <br />
//                                         {user.location.postcode}{' '}
//                                         {capitalize(user.location.city)}
//                                         <br />
//                                         {user.nat}
//                                     </i>
//                                 </p>
//                                 <p>
//                                     E-mail: {user.email}
//                                     <br />
//                                     Phone: {user.phone}
//                                 </p>
//                                 <p>Date of birth: {formatDate(user.dob)}</p>
//                             </div>
//                         </div>
//                     </td>
//                 </tr>
//             ),
//         ]
//     }
// }

// class EmployeeList extends React.Component {
//     state = { users: null }

//     componentDidMount() {
//         fetch('https://randomuser.me/api/1.1/?results=15')
//             .then((response) => response.json())
//             .then((data) => {
//                 this.setState({ users: data.results })
//             })
//     }

//     render() {
//         const { users } = this.state
//         const isLoading = users === null
//         return (
//             <main>
//                 <div className="table-container">
//                     <div className="uk-overflow-auto">
//                         <table className="uk-table uk-table-hover uk-table-middle uk-table-divider">
//                             <thead className="table">
//                                 <tr className="uk-table-shrink">
//                                     <th>
//                                         <p>Avatar</p>
//                                     </th>
//                                     <th>Fullname</th>
//                                     <th>City</th>
//                                     <th>Registered</th>
//                                     <th>Edit</th>
//                                     <th>Delete</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="hell">
//                                 {isLoading ? (
//                                     <tr>
//                                         <td
//                                             colSpan={6}
//                                             className="uk-text-center"
//                                         >
//                                             <em className="uk-text-muted">
//                                                 Loading...
//                                             </em>
//                                         </td>
//                                     </tr>
//                                 ) : (
//                                     users.map((user, index) => (
//                                         <UserTableRow
//                                             key={index}
//                                             index={index + 1}
//                                             user={user}
//                                         />
//                                     ))
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </main>
//         )
//     }
// }
// export default EmployeeList
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getallEmployees } from 'app/redux/actions/EmployeeAction'

function EmployeeList() {
  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallEmployees())
        dispatch(getallQualification())
        dispatch(getallInsurance())
        dispatch(getallSalary())
        dispatch(getallWork())
    }, [])

    const employeeInfo = useSelector((state) => state.employee.employeeInfo)
    console.log('Employee state', employeeInfo)

    const insuranceInfo = useSelector((state) => state.employee.insuranceInfo)
    console.log('Employee state', employeeInfo)

    const qualifiactionInfo = useSelector((state) => state.employee.qualifiactionInfo)
    console.log('Employee state', employeeInfo)

    const salaryInfo = useSelector((state) => state.employee.salaryInfo)
    console.log('Employee state', employeeInfo)

    const workInfo = useSelector((state) => state.employee.workInfo)
    console.log('Employee state', employeeInfo)

    useEffect(() => {
        localStorage.setItem('EMPLOYEE_INFO', JSON.stringify(employeeInfo))
        localStorage.setItem('INSURANCE_INFO', JSON.stringify(insuranceInfo))
        localStorage.setItem('QUALIFICATION_INFO', JSON.stringify(qualifiactionInfo))
        localStorage.setItem('SALARY_INFO', JSON.stringify(salaryInfo))
        localStorage.setItem('WORK_INFO', JSON.stringify(workInfo))
    }, [employeeInfo])

  return (
    <>
    {/* {employeeInfo.map((employee)=>{<div>{employee}</div>})} */}
    employee
    </>
  )
}

export default EmployeeList
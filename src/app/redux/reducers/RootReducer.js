import { combineReducers } from 'redux'
import ScrumBoardReducer from './ScrumBoardReducer'
import NotificationReducer from './NotificationReducer'
import EcommerceReducer from './EcommerceReducer'
import NavigationReducer from './NavigationReducer'
import VehicleReducer from './VehicleReducer'
import CompanyReducer from './CompanyReducer'
import BranchReducer from './BranchReducer'
import DepartmentReducer from './DepartmentReducer'
import DesignationReducer from './DesignationReducer'
import AttendanceReducer from './AttendanceReducer'
import EmployeeReducer from './EmployeeReducer'

const RootReducer = combineReducers({
    notifications: NotificationReducer,
    navigations: NavigationReducer,
    scrumboard: ScrumBoardReducer,
    ecommerce: EcommerceReducer,
    vehicle: VehicleReducer,
    company: CompanyReducer,
    branch: BranchReducer,
    department: DepartmentReducer,
    designation: DesignationReducer,
    attendance: AttendanceReducer,
    employee:EmployeeReducer,
})

export default RootReducer

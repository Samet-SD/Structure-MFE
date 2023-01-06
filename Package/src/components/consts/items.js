import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReceiptIcon from '@mui/icons-material/Receipt';
import DatasetIcon from '@mui/icons-material/Dataset';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SecurityIcon from '@mui/icons-material/Security';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderIcon from '@mui/icons-material/Folder';

//each route will represent the url in the browser
export const items = [
{
    id: 0, 
    icon:<DashboardIcon />,
    label: 'Dashboard',
    route: 'dashboard',
},
{
    id: 1, 
    icon:< ReceiptIcon />,
    label: 'Payments',
    route: 'payments',
},
{
    id: 2, 
    icon:< PaymentsIcon/>,
    label: 'Transactions',
    route: 'transactions',
},
{
    id: 3, 
    icon:< ShoppingBagIcon/>,
    label: 'Orders',
    route: 'orders',
},
{
    id: 4, 
    icon:<FolderIcon />,
    label: 'Documents',
    route: 'documents',
},
{
    id: 5, 
    icon:< ManageAccountsIcon/>,
    label: 'User Management',
    route: 'usermanagement',
},
{
    id: 6, 
    icon:< DatasetIcon/>,
    label: 'Master Management Data',
    route: 'masterdatamanagement',
},
{
    id: 7, 
    icon:< AccountCircleIcon/>,
    label: 'Account',
    route: 'account',
},
{
    id: 8, 
    icon:< SecurityIcon/>,
    label: 'Security Center',
    route: 'securitycenter',
},
{
    id: 9, 
    icon:< SupportAgentIcon/>,
    label: 'Support',
    route: 'support',
}
]
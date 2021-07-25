import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavTitle',
    anchor: 'Theme',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Colors',
    to: '/theme/colors',
    icon: <CIcon name="cil-drop" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Typography',
    to: '/theme/typography',
    icon: <CIcon name="cil-pencil" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavTitle',
    anchor: 'Components',
  },
]

export default _nav

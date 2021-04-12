import React from 'react'
import Styled from './sidebar.module.scss'

interface Iprops {
  isOpen?: boolean
  toggle?: () => void
}
const Sidebar: React.FC<Iprops> = ({ toggle, isOpen }) => {
  return (
    <div
      className={Styled.sideBarContainer}
      style={{ opacity: isOpen ? '100%' : '0', top: toggle ? '-100%' : '0' }}
    >
      <div></div>
    </div>
  )
}

export default Sidebar

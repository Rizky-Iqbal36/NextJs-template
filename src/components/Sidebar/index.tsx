import React from 'react'
import Styled from './sidebar.module.scss'
import { CloseRounded } from '@material-ui/icons'

interface Iprops {
  isOpen: boolean
  toggle: () => void
}
const Sidebar: React.FC<Iprops> = ({ toggle, isOpen }) => {
  return (
    <div
      className={Styled.sideBarContainer}
      style={{ opacity: isOpen ? '100%' : '0', top: !isOpen ? '-100%' : '0' }}
    >
      <div className={Styled.icon} onClick={toggle}>
        <CloseRounded style={{ color: '#fff' }} />
      </div>
      <div className={Styled.sideBarWrapper}>
        <div className={Styled.sideBarMenu}>
          <div className={Styled.sideBarLink}>About</div>
          <div className={Styled.sideBarLink}>Discover</div>
          <div className={Styled.sideBarLink}>Services</div>
          <div className={Styled.sideBarLink}>Sign Up</div>
        </div>
        <div className={Styled.sideBarBtnWrap}>
          <div className={Styled.sideBarRoute}>Sign In</div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar

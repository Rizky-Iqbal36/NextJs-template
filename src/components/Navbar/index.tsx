import React, { Component } from 'react'
import { MenuRounded } from '@material-ui/icons'
import Styled from './navbar.module.scss'

interface Iprops {
  toggle: () => void
}
export default class Navbar extends Component<Iprops> {
  render() {
    return (
      <div className={Styled.nav}>
        <div className={Styled.navbarContainer}>
          <div className={Styled.navLogo}>Stardenburdenhardenbart</div>
          <div className={Styled.mobileIcon} onClick={this.props.toggle}>
            <MenuRounded fontSize="large" />
          </div>
          <div className={Styled.navMenu}>
            <div className={Styled.navItems}>
              <div className={Styled.navLink}>About</div>
            </div>
            <div className={Styled.navItems}>
              <div className={Styled.navLink}>Discover</div>
            </div>
            <div className={Styled.navItems}>
              <div className={Styled.navLink}>Services</div>
            </div>
            <div className={Styled.navItems}>
              <div className={Styled.navLink}>Sign Up</div>
            </div>
          </div>
          <div className={Styled.navBtn}>
            <div className={Styled.navBtnLink}>Sign In</div>
          </div>
        </div>
      </div>
    )
  }
}

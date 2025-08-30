import React from 'react'
import PropTypes from 'prop-types'
import newsIcon from '../../assets/news-icon.svg'
import styles from './Navbar.module.css'
function Navbar() {
  return (
    <nav className={styles.nav}>
        <div className={styles.navIconWrapper}>
            <img src={newsIcon} className={styles.navIcon} alt="" />
            <h1 className={styles.navTitle}>NEWS</h1>
        </div>
    </nav>
  )
}


export default Navbar

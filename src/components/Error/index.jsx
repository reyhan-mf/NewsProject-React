import React from 'react'
import styles from './Error.module.css'

function Error() {
  return (
    <div className={styles.container}>
        <p className={styles.error}>Something went wrong</p>
    </div>
  )
}
export default Error
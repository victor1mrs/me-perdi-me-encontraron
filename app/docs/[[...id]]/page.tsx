import React from 'react'
import styles from './style.module.css';

const DocsIdPage = ({ params }: { params: { id: string[] } }) => {
  console.log(params)
  return (
    <div className={styles.title}>
      docs Id {params.id && params.id[0]}
    </div>
  )
}

export default DocsIdPage

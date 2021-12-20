import { useState } from 'react'
import cx from 'classnames'

import { useGetCategories } from 'hooks'
import styles from './Filter.module.scss'

const Filter = () => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false)
  const { data, error } = useGetCategories()

  return (
    <div className={styles.filter}>
      {!error && (
        <>
          <span className={styles.filter__label}> Filter by:</span>

          <div>
            <div
              className={styles.dropdown}
              onClick={() => setIsDropDownOpen(prev => !prev)}
            >
              <span>Category</span>
            </div>
            <div
              className={cx(styles.dropdown__close, {
                [styles.dropdown__open]: isDropdownOpen,
              })}
            >
              {data?.categoryEntities?.map(item => (
                <span className={styles.dropdown__item} key={item.id}>
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Filter

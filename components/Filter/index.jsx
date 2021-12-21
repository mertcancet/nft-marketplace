import { useState } from 'react'
import cx from 'classnames'

import { Arrow } from 'icons'
import { useGetCategories } from 'hooks'
import styles from './Filter.module.scss'

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  const [isDropdownOpen, setIsDropDownOpen] = useState(false)
  const { data, error } = useGetCategories()

  const handleFilter = (item, index) => {
    setSelectedCategory({ ...item, index })
    setIsDropDownOpen(false)
  }
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
              <Arrow />
            </div>
            <div
              className={cx(styles.dropdown__close, {
                [styles.dropdown__open]: isDropdownOpen,
              })}
            >
              {data?.categoryEntities?.map((item, i) => (
                <span
                  className={cx(styles.dropdown__item, {
                    [styles.dropdown__item__selected]:
                      selectedCategory?.index === i,
                  })}
                  key={item.id}
                  onClick={() => handleFilter(item, i)}
                >
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

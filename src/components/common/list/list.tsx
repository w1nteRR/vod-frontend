import { FC, useRef } from "react"

import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll'
import { useListStyles } from "./styles"

export const List: FC = ({
  children
}) => {

  const listRef = useRef(null)
  const listEndRef = useRef(null)

  const styles = useListStyles()
  
  useInfiniteScroll({ 
    listRef, 
    listEndRef, 
    callback: () => console.log('load more') 
  })

  return (
    <div ref={listRef} className={styles.list}>
      {children}
      <div ref={listEndRef} className={styles.end}>'</div>
    </div>
  )
}


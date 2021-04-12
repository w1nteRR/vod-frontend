import { useRef, memo, ReactNode } from "react"

import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll'
import { useListStyles } from "./styles"

interface IListProps {
  onEnd: () => void
  children?: ReactNode
  data: Array<unknown>
  renderItem: (v: unknown, i: number) => ReactNode
}

export const List = memo<IListProps>(({
  onEnd,
  data,
  renderItem
}) => {

  const listRef = useRef(null)
  const listEndRef = useRef(null)

  const styles = useListStyles()
  
  useInfiniteScroll({ 
    listRef, 
    listEndRef, 
    callback: onEnd
  })

  return (
    <div ref={listRef} className={styles.list}>
      {data.map((v, i) => renderItem(v, i))}
      <div ref={listEndRef} className={styles.end}>`</div>
    </div>
  )
})


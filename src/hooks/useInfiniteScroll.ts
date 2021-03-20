import { RefObject, useEffect } from "react"

interface IInfiniteScroll {
  listRef: RefObject<HTMLDivElement>
  listEndRef: RefObject<Element>
  callback: () => void
}

export const useInfiniteScroll = (params: IInfiniteScroll) => {
  const { listRef, listEndRef, callback } = params

  useEffect(() => {
    const options = {
      root: listRef.current,
      threshold: 0
    }

    const observer = new IntersectionObserver(callback, options)
   
    observer.observe(listEndRef.current!)

    return () => observer.disconnect()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback])
}
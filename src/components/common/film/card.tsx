import { memo } from 'react'
import { Paper } from '@material-ui/core'

import { useFilmCardStyles } from './styles'

import { IFilmCardProps, IFilmCardStyles } from './interfaces'

export const FilmCard = memo<IFilmCardProps>(({
  image,
  onClick
}) => {

  const styles = useFilmCardStyles({ image } as IFilmCardStyles)

  return <Paper className={styles.card} onClick={onClick} />
})
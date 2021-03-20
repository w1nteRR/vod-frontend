import { FC } from 'react'
import { Paper } from '@material-ui/core'

import { useFilmStyles } from './styles'

import { IFilmCardProps, IFilmCardStyles } from './interfaces'

export const FilmCard: FC<IFilmCardProps> = ({
  image
}) => {
  const styles = useFilmStyles({ image } as IFilmCardStyles)

  return <Paper className={styles.card} />
}
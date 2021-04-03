import { FC } from "react"
import { useParams } from "react-router-dom"
import { Grid } from "@material-ui/core"

import { FilmInfo } from "../../components/film/info/film.info"
import { FilmControl } from "../../components/film/control/film.control"
import { useFilmStyles } from "../../components/film/styles"

export const Film: FC = () => {

  const { id } = useParams<{ id: string }>()
  const styles = useFilmStyles({
    poster: 'https://lh3.googleusercontent.com/proxy/iCjrHk7GhAdxSsnzCC6ASA5mrfYFIFsJKe9laiR5BfJ-jvgva3BRCVunHzDArmL9JamkK36lLrrg5KnNAZ72NSLuBIKyB4LbZ2QlKDdQgsqD'
  })

  return (
    <Grid container justify='space-around' spacing={3}>
      <Grid 
        item 
        xs={12} 
        sm={3} 
        className={styles.posterContainer}
      >
        <div className={styles.poster} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={styles.info}>
          <FilmInfo name='The Queens Gambit' plot='plot' genr={['Drama']} />
          <FilmControl />
        </div>
      </Grid>
    </Grid>
  )
}
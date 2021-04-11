import axios from 'axios'

export const omdbApi = () => {
  const api = axios.create({
    baseURL: 'http://www.omdbapi.com'
  })

  return {
    film: async (name: string) => {
      return await api.get(`?t=${name}&apikey=${process.env.REACT_APP_OMDB_KEY}`)
    },
    series: async (name: string, season: number) => {
      return await api.get(`?t=${name}&Season=${season}&apikey=${process.env.REACT_APP_OMDB_KEY}`)
    }
  }
}
import axios from 'axios'

export const omdbApi = () => {
  const api = axios.create({
    baseURL: 'http://www.omdbapi.com'
  })

  const key = process.env.REACT_APP_OMDB_KEY

  return {
    film: async (name: string) => {
      return await api.get(`?t=${name}&apikey=${key}`)
    },
    series: async (name: string, season: number) => {
      return await api.get(`?t=${name}&Season=${season}&apikey=${key}`)
    }
  }
}
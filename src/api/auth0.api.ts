import axios from 'axios'

export const omdbApi = () => {
  const api = axios.create({
    baseURL: `https://${process.env.REACT_APP_DOMAIN}`
  })

  return {
    me: async (token: string) => {
      return await api.get(`/userinfo`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
    }
  }
}
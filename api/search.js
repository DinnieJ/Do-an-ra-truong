import axios from 'axios'

export const javsearch = axios.create({
  baseURL: process.env.baseApi
})

export const searchActress = (name) => {
  return javsearch.get('/actress', {
    params: {
      name
    }
  })
}

export const getMovies = (code, offset, hits) => {
  return javsearch.get(`/videos/${code}`, {
    params: {
      offset,
      hits
    }
  })
}

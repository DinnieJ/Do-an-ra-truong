import axios from 'axios'

export const javsearch = axios.create({
  baseURL: 'https://jav-rest-api-htpvmrzjet.now.sh/api'
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

export interface User {
  name: {
    title?: string,
    first: string,
    last: string
  },
  location?: {
    street: {
      number: number,
      name: string
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: {
      latitude: number,
      longitude: number
    },
    timezone: {
      offset: string,
      description: string
    }
  },
  login: {
    uuid: string,
    username?: string,
    password?: number,
    salt?: string,
    md5?: string,
    sha1?: string,
    sha256?: string
  },
  picture: {
    large: string,
    medium?: string,
    thumbnail: string
  },
  dob?: {
    date: string,
    age: number
  }
}

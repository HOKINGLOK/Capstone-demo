const axios = require('axios')

export const resolvers = {
  Property: {
    photos: async (property, args) => {
      const requestURL = `https://graph.mapillary.com/images?access_token=MLY|5336677839690057|c0a0b5233c878ed07b21c2f5d150c731&fields=id&limit=10&bbox=-111.05496799999999,45.667147,-111.054468,45.667647`

      const response = await axios.get(requestURL)

      console.log(response)
    },
  },
}

import * as contentful from 'contentful'


const client = contentful.createClient({
   space: `${process.env.CONTENTFUL_SPACE_ID}`,
   accessToken: `${process.env.CONTENTFUL_MANAGEMENT_TOKEN}`,
})

export default client


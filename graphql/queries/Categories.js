import { gql } from '@apollo/client'

const GET_CATEGORIES = gql`
  query {
    categoryEntities {
      id
      name
    }
  }
`

export default GET_CATEGORIES

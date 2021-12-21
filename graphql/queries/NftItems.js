import { gql } from '@apollo/client'

const GET_NFT_ITEMS = gql`
  query GetNFTItems($first: Int) {
    cardEntities(first: $first) {
      id
      owner
      description
      image
      name
      weight
      category {
        id
        name
      }
      sold
    }
  }
`

export default GET_NFT_ITEMS

import { gql } from '@apollo/client'

const GET_NFT_ITEMS = gql`
  query GetNFTItems($offset: Int, $limit: Int) {
    cardEntities(offset: $offset, limit: $limit) {
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

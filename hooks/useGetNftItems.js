import { useQuery } from '@apollo/client'

import { GET_NFT_ITEMS } from 'graphql/queries'

const useGetNftItems = ({ pageNumber }) => {
  const { loading, error, data } = useQuery(GET_NFT_ITEMS, {
    variables: { first: pageNumber * 6 },
  })
  return {
    data,
    loading,
    error,
  }
}

export default useGetNftItems

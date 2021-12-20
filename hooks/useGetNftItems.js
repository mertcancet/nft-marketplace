import { useQuery } from '@apollo/client'

import { GET_NFT_ITEMS } from 'graphql/queries'

const useGetNftItems = () => {
  const { loading, error, data } = useQuery(GET_NFT_ITEMS)

  return {
    data,
    loading,
    error,
  }
}

export default useGetNftItems

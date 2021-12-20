import { useQuery } from '@apollo/client'
import { GET_CATEGORIES } from 'graphql/queries'

const useCategories = () => {
  const { loading, error, data } = useQuery(GET_CATEGORIES)

  return {
    data,
    loading,
    error,
  }
}

export default useCategories

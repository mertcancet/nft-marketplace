import { Gold, Platinium, Silver } from 'icons'

const elements = {
  'GOLD SEED': <Gold />,
  'PLATINUM SEED': <Platinium />,
  'SILVER SEED': <Silver />,
}

const ElementIcon = ({ element }) => {
  return (
    <div>
      <span>{elements?.[element]}</span>{' '}
    </div>
  )
}

export default ElementIcon

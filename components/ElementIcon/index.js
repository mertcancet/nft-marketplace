import Gold from 'icons/gold.svg'
import Platinium from 'icons/platinium.svg'
import Silver from 'icons/Silver.svg'

const elements = {
  'GOLD SEED': Gold,
  'PLATINUM SEED': Platinium,
  'SILVER SEED': Silver,
}

const ElementIcon = ({ element }) => {
  return <img src={elements[element].src} />
}

export default ElementIcon

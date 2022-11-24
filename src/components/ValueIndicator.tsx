import React from 'react'

interface ValueIndicator {
  value: number;
  growth: boolean;
}

const ValueIndicator: React.FC<ValueIndicator> = ({ value, growth}) => {

  const getIcon = (value: number) => {
    if (value === 0) return;
    return value > 0 ? './src/assets/icon-up.svg' : './src/assets/icon-down.svg';
  }

  return (
    <div>
      <img src={getIcon(value)} alt={ value > 0 ? 'Plus' : 'Moins' }/>
      <p>{value}{growth ? '%' : ' Today'}</p>
    </div>
  )
}

export default ValueIndicator
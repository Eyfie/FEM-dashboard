import React from 'react'
import ValueIndicator from './ValueIndicator'
import { SocialData } from '../App'

interface SocialDataCard extends SocialData {
  CardKey: number
}

const SocialDataCard: React.FC<SocialDataCard> = ({ 
  SocialNetworkName,
  NameTag,
  Followers,
  NewFollowers,
  CardKey,
}) => {

  const getSocialIcon = ( socialMedia: string ) => {
    switch (socialMedia) {
      case 'Facebook':
        return './src/assets/icon-facebook.svg'
        break;
      case 'Twitter':
        return './src/assets/icon-twitter.svg'
        break;
      case 'Instagram':
        return './src/assets/icon-instagram.svg'
        break;
      case 'Youtube':
        return './src/assets/icon-youtube.svg'
        break;
    }
  }

  return (
    <div key={CardKey}>
      <div>
        <img src={getSocialIcon(SocialNetworkName)} alt={SocialNetworkName}/>
        <p>{SocialNetworkName !== 'Youtube' ? '@' : null}{NameTag}</p>
      </div>
      <p>{Followers}</p>
      <ValueIndicator  value={NewFollowers} growth={false}/>
    </div>
  )
}

export default SocialDataCard
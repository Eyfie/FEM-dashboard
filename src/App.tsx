import { useState, useEffect } from 'react'
import './App.css'

function App() {

  interface SocialData {
    SocialNetworkName: string;
    NameTag: string;
    Followers: number;
    NewFollowers: number;
  }

  interface SocialStat {
    SocialNetworkName: string;
    StatName: string;
    StatNumber: number;
    StatGrowth: number;
  }

  const [socialsData, setSocialsData] = useState<SocialData[]>([]);
  const [socialsStat, setSocialsStat] = useState<SocialStat[]>([]);

  const socialsDataLink: string = './src/assets/socialData.json';
  const socialsStatLink: string = './src/assets/socialStats.json';


  const getSocialsData = (signal: AbortSignal) => {

    fetch(socialsDataLink, { signal })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.SocialNetworks);
        setSocialsData(data.SocialNetworks);
      })
      .catch((err) => {
        if(err.name === 'AbortError') console.log('Request canceled')
      })
  }

  const getSocialsStat = (signal: AbortSignal) => {
    fetch(socialsStatLink, { signal })
    .then((response) => {
      return response.json();
    })
      .then((data) => {
        console.log(data.SocialStats);
        setSocialsStat(data.SocialStats);
      })
      .catch((err) => {
        if(err.name === 'AbortError') console.log('Request canceled')
      })    
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    getSocialsData(signal);
    getSocialsStat(signal);

    return () => controller.abort()

  },[]);


  const totalFollowers = (data: SocialData[]) => {

    const sum = data.reduce((accumulator: number, entry: SocialData) => {
      return accumulator + entry.Followers;
    }, 0);

    return sum;
  } 

  return (
    <>
      <header>
        <div>
          <h1>Social Media Dashboard</h1>
          <span>Total followers: {totalFollowers(socialsData)}</span>
        </div>
        <div>
          <label htmlFor="darkmode">Darkmode</label>
          <input type="checkbox" name="darkmode"></input>
        </div>
      </header>
      {/* <section>
        {socialsData.map((socialData: SocialData[]) => {
          <SocialDataCard {...socialData}/>
        })}
      </section>
      <section>
        <h2>Overview - Today</h2
        {socialsStat.map((socialStat: SocialStat[]) => {
          <SocialStatCard {...socialStat} />
        })}
      </section> */}
    </>
  )
}

export default App

import React from 'react';
import Header from './Components/Header'
import Second from './Components/Second';
import CardHead from './Components/CardHead';
import './App.css';
import data from './Data/Data';
import bandata from './Data/BannerData';
import opdata from './Data/OptionsData';
import Banner from './Components/Banner';
import BannerHead from './Components/BannerHead';
import Options from './Components/Options';
import lopdata from './Data/LeftOptionsData';
import LeftOptions from './Components/LeftOptions';

function App() {
  const cards = data.map(item=>{ //maps data for the cards under Top Releases
    return(
      <Second
          key={item.id}
          img={item.image}
          rating={item.rating}
          reviewCount={item.amount}
          location={item.country}
          title={item.title}
          price={item.cost}
      />
    )
  })

  const banners = bandata.map(item=>{ // maps data for the Cards under New this week
    return(
      <Banner
          key={item.id}
          img={item.image}
          des={item.des}
      />
    )
  })

  const options = opdata.map(item=>{ // maps data for options in the second section
    return(
      <Options
          key={item.id}
          title={item.title}
      />
    )
  })

  const leftoptions = lopdata.map(item=>{ // maps data for the filters in the second section
    return(
      <LeftOptions
          key={item.id}
          title={item.title}
      />
    )
  })

  return (
    <div>
      <Header/>
      <BannerHead/>
      <section className='banner-list'>
      {banners}
      </section>
      <section className='leftoptions-list'>
      {leftoptions}
      </section>
      <section className='options-list'>
      {options}
      </section>
      <CardHead/>
      <section className='cards-list'>
      {cards}
      </section>
    </div>
  );
}

export default App;

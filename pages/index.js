import Head from 'next/head'

import Navbar from '../components/Navbar.js'
import Header from '../components/Headers.js'
import ProfileCards from '../components/ProfileCards.js'
import NftCards from '../components/NftCardsSection.js'
import CardsCarousel from '../components/CardCarousel.js'
import Footer from '../components/Footer.js'
export const config = {
  unstable_runtimeJS : false
}

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>NFT Website</title>
        <meta name="description" content="Generated by create next app" />
        
        <link rel="icon" href="/logo.png" />
      </Head>
     <Navbar/>
<Header />
<ProfileCards />
<NftCards />
<CardsCarousel />
<Footer />
     </div>
  )
}



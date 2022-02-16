import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import Vidback from '../components/vidback/Vidback'
import Hiring from '../components/hiring/Hiring'
import Services from '../components/services/Services'
import Team from '../components/team/Team'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oregon | Welcome</title>
        <meta name="description" content="Welcome to Orgeonofstars" />
        <link rel="icon" href="/forhome.png" />
      </Head>
      <Vidback />
      <Hiring />
      <hr />
      <Services />
      <hr />
      <Team />
      


    </div>
  )
}

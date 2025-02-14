import React from 'react';
import Hero from '../components/hero';
import Header from '../components/header';

const Home = () => {
  return (
    <>
    <Header />
    <div className=" overflow-x-hidden w-full">
    <Hero />
    </div>
    </>
  )
}

export default Home

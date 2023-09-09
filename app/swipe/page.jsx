"use client"
import Layout from "../../components/Layout"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import TinderCard from 'react-tinder-card'

const Page = () => {
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  return <Layout
    makeHeader={() => <Header titulo="Encabezado Innovador" />}
    makeBody={
      () => <div>
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
      </div>
    }
    makeFooter={() => <Footer />}
  />
}

export default Page
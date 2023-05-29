import CarBlock from '@/components/Cards/Hero'
import CarCards from '@/components/Cards/CarCards'
import DefaultFooter from '@/components/footer/DefaultFooter'
import DefaulHeader from '@/components/header/DeafultHeader'
import HomePage from '@/components/home/Home'
import CarSlider from '@/components/Slider/Index'
import CarBanner from '@/components/Banner/CarBanner'
import CarFeatures from '@/components/Features/CarFeatures'
import Map from '@/components/Map/Map'

function Home() {
  return (
    <>
        <DefaulHeader />
        <HomePage />
        <CarBlock />
        <CarBanner/>
        <CarFeatures/>
        <Map/>
        <CarSlider/>
        <DefaultFooter/>
    </>
  )
}

export default Home
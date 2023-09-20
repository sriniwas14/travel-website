import Image from 'next/image'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Headline from './components/Headline'
import BodyText from './components/BodyText'

const images = [
  { image: "/assets/1.jpg", id: 1 },
  { image: "/assets/2.jpg", id: 2 },
  { image: "/assets/3.jpg", id: 3 },
  { image: "/assets/3.jpg", id: 4 },
  { image: "/assets/1.jpg", id: 5 },
  { image: "/assets/2.jpg", id: 6 }
]

export default function Home() {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree background={"/assets/visit_us.jpeg"}>
        <div className='px-10'>
          <Headline className='text-8xl text-white'>Visit Us</Headline>
          <div className='flex'>
            <button className='bg-blue-500 text-white ml-auto px-5 py-3'>Book Now</button>
          </div>
          <BodyText className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br />
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Ut elit tellus,<br />
            luctus nec ullamcorper mattis, pulvinar dapibus leo.</BodyText>
        </div>
      </SectionThree>
      <SectionThree>
        <Headline className='text-center mb-10 text-5xl'>Views</Headline>
        <BodyText className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</BodyText>

        <div className='grid grid-cols-3 gap-5 bg-white mt-10'>
          {
            images.map(image => <img src={image.image} key={image.id} />)
          }
        </div>
      </SectionThree>

      <SectionThree className='border border-blue-200 border-t-4'>
        <Headline className='text-center mb-10 text-5xl'>Visit our exclusive villas</Headline>
        <BodyText className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</BodyText>

        <div className='flex'>
          <button className='bg-blue-500 text-white mx-auto px-5 py-3 mt-16'>Book Now</button>
        </div>
      </SectionThree>
      <SectionThree className='bg-gray-900'>
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <h1 className='text-blue-400 capitalize font-bold text-3xl mb-4'>website.com</h1>
            <p className='text-white uppercase'>
              Our Office Address:
              Address: 821 Bhabbad Chowk, Palam Vihar Road Crossing, Najafgarh Road,, Bijwasan, New Delhi, Delhi 110061 Cont No. +91 8376846429, 9958799542,
              Email Id : sales@travstories@gmail.com, operation1.travstories@gmail.com
            </p>
          </div>
          <div className='text-white'>Branches – Mumbai , Jaipur, Diu</div>
        </div>
      </SectionThree>
    </div>
  )
}

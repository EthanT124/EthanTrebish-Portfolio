import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import prev from '../../assets/images/back.png'
import next from '../../assets/images/next.png'
import img1 from '../../assets/images/ETTSolutions/Img1.png'
import img2 from '../../assets/images/ETTSolutions/Img2.png'
import img3 from '../../assets/images/ETTSolutions/Img3.png'
import img4 from '../../assets/images/ETTSolutions/Img4.png'
import img5 from '../../assets/images/ETTSolutions/Img5.png'
import img6 from '../../assets/images/ETTSolutions/Img6.png'
import img7 from '../../assets/images/ETTSolutions/Img7.png'
import img8 from '../../assets/images/ETTSolutions/Img8.png'
import img9 from '../../assets/images/ETTSolutions/Img9.png'
import img10 from '../../assets/images/ETTSolutions/Img10.png'
import img11 from '../../assets/images/ETTSolutions/Img11.png'
import img12 from '../../assets/images/ETTSolutions/Img12.png'
import img13 from '../../assets/images/ETTSolutions/Img13.png'
import img14 from '../../assets/images/ETTSolutions/Img14.png'
import img15 from '../../assets/images/ETTSolutions/Img15.png'
import img16 from '../../assets/images/ETTSolutions/Img16.png'
import img17 from '../../assets/images/ETTSolutions/Img17.png'
import img18 from '../../assets/images/ETTSolutions/Img18.png'
import img19 from '../../assets/images/ETTSolutions/Img19.png'
import img20 from '../../assets/images/ETTSolutions/Img20.png'
import img21 from '../../assets/images/ETTSolutions/Img21.png'
import img22 from '../../assets/images/ETTSolutions/Img22.png'
import img23 from '../../assets/images/ETTSolutions/Img23.png'
import img24 from '../../assets/images/ETTSolutions/Img24.png'
import img25 from '../../assets/images/ETTSolutions/Img25.png'
import img26 from '../../assets/images/ETTSolutions/Img26.png'
import img27 from '../../assets/images/ETTSolutions/Img27.png'
import img28 from '../../assets/images/ETTSolutions/Img28.png'
import img29 from '../../assets/images/ETTSolutions/Img29.png'
import img30 from '../../assets/images/ETTSolutions/Img30.png'
import img31 from '../../assets/images/ETTSolutions/Img31.png'


export function SchedulingCarousel() {
  const autoplay = useRef(Autoplay({ stopOnInteraction: false, delay: 3000 }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay.current])
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31]
  const descriptions = ["ETT Solutions home page", "Login page", "Example of a user entering an incorrect login", "Account Creation Page", 
    "Example of entering new user information for sign up", "Successful login notification", "Account Information Page", "Updated account information", 
    "Example of user setting a new profile picture", "Client management page", "Pagination for client management page", "Client creation page", 
    "Example of user adding a new client", "Client added to the list successfully", "Client deletion page", "Updated page after client deletion", 
    "Example of user editing a client's information", "Page updated to showcase client info change", "Dentist Management Page", "Dentist creation page", 
    "Dentist management page", "Dentist editing page", "Successfully editing a dentist's information", "Appointments Calander", 
    "Example of creating an appointment", "Appointment information filled in", "Appointments Calander updated", "Appointment summary page, then cancelling the current appointment", 
    "Upcomming and Cancelled appointments ", "Example of deleting an appointment", "Admin management page, with more screenshots to come in the future!"]
  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    if (!emblaApi) return
    // use the plugin instance directly instead of emblaApi.plugins().autoplay
    autoplay.current.play?.()
    return () => autoplay.current.stop?.()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <p className="text-center mt-2">{descriptions[index]}</p>
              <img className='block mx-auto w-full h-auto max-w-4xl max-h-[50vh] object-contain' src={image} alt={`Slide ${index + 1}`}/>            
              </div>
          ))}
        </div>
        <div className='flex justify-center '>
          <button className="embla__prev mr-5" onClick={goToPrev}>
            <img className='w-10 h-10' src={prev} alt="Prev" />
          </button>
          <button className="embla__next" onClick={goToNext}>
            <img className='w-10 h-10' src={next} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default SchedulingCarousel

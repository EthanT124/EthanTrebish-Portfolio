import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import SOTL1 from '../../assets/images/SOTL/1.png'
import SOTL2 from '../../assets/images/SOTL/2.png'
import SOTL3 from '../../assets/images/SOTL/3.png'
import SOTL4 from '../../assets/images/SOTL/4.png'
import SOTL5 from '../../assets/images/SOTL/5.png'
import SOTL6 from '../../assets/images/SOTL/6.png'
import SOTL7 from '../../assets/images/SOTL/7.png'
import SOTL8 from '../../assets/images/SOTL/8.png'
import SOTL9 from '../../assets/images/SOTL/9.png'
import SOTL10 from '../../assets/images/SOTL/10.png'
import SOTL11 from '../../assets/images/SOTL/11.png'
import SOTL12 from '../../assets/images/SOTL/12.png'
import SOTL13 from '../../assets/images/SOTL/13.png'
import SOTL14 from '../../assets/images/SOTL/14.png'
import SOTL15 from '../../assets/images/SOTL/15.png'
import SOTL16 from '../../assets/images/SOTL/16.png'
import SOTL17 from '../../assets/images/SOTL/17.png'
import SOTL18 from '../../assets/images/SOTL/18.png'
import SOTL19 from '../../assets/images/SOTL/19.png'
import SOTL20 from '../../assets/images/SOTL/20.png'
import SOTL21 from '../../assets/images/SOTL/21.png'
import prev from '../../assets/images/back.png'
import next from '../../assets/images/next.png'

export function StoriesOfTheLandCarousel() {
  const images = [SOTL1, SOTL2, SOTL3, SOTL4, SOTL5, SOTL6, SOTL7, SOTL8, SOTL9, SOTL10, SOTL11, SOTL12, SOTL13, SOTL14, SOTL15, SOTL16, SOTL17, SOTL18, SOTL19, SOTL20, SOTL21]
  const descriptions = ["Landing page for the Stories of the Land website", "Specimen index page showcasing all the plantlife", "Searching inside of the specimen index", "Specimen page showcasing individual plant information", "French specimen page, showcasing multilinguel support", "Specimen discovery bar, encouraging users to explore specimens", 
    "Specimen maps using HERE maps api", "Specimen pin showcasing live information about the specimen", "Freqeuntly Asked Questions page", "External Resources page", "Feedback submission form", "Home page after login", "Example of creating a specimen", "Specimen information entered in form", 
    "Confirmation for specimen creation", "Administrator Dashboard, showcasing analytics information with google analytics", "More analytical information", "QR Code printer feature", "Specimen map CRUD page", "Feedback CRUD page", "User Submission page"]
  const autoplay = useRef(Autoplay({ stopOnInteraction: false, delay: 3000 }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay.current])

  const goToPrev = () => emblaApi?.scrollPrev()
  const goToNext = () => emblaApi?.scrollNext()

  useEffect(() => {
    if (!emblaApi) return
    // use the plugin instance directly instead of emblaApi.plugins().autoplay
    autoplay.current.play?.()
    return () => autoplay.current.stop?.()
  }, [emblaApi])

  return (
    <div className="embla mt-0">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex items-center">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <p className="text-center mt-2">{descriptions[index]}</p>
              <img className='block mx-auto w-full h-auto max-w-4xl max-h-[50vh] object-contain' src={image} alt={`Slide ${index + 1}`}/>            
              </div>
          ))}
        </div>
        <div className='flex justify-center'>
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
export default StoriesOfTheLandCarousel

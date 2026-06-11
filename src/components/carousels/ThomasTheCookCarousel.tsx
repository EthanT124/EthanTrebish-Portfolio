import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import img1 from '../../assets/images/Project 1/1.png'
import img2 from '../../assets/images/Project 1/2.png'
import img3 from '../../assets/images/Project 1/3.png'
import img4 from '../../assets/images/Project 1/4.png'
import prev from '../../assets/images/back.png'
import next from '../../assets/images/next.png'

export function ThomasTheCookCarousel() {
  const autoplay = useRef(Autoplay({ stopOnInteraction: false, delay: 3000 }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay.current])
  const images = [img1, img2, img3, img4]
  const descriptions = ["Redesigned home page using bootstrap", "Redesigned catering menu page", "Redesigned main menu page", "Redesigned contact us page"]
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
export default ThomasTheCookCarousel

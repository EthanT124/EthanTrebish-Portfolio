import  { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import img1 from '../../assets/images/CWEB Proj2/1.png'
import img2 from '../../assets/images/CWEB Proj2/2.png'
import img3 from '../../assets/images/CWEB Proj2/3.png'
import img4 from '../../assets/images/CWEB Proj2/4.png'
import img5 from '../../assets/images/CWEB Proj2/5.png'
import img6 from '../../assets/images/CWEB Proj2/6.png' 
import img7 from '../../assets/images/CWEB Proj2/7.png'
import prev from '../../assets/images/back.png'
import next from '../../assets/images/next.png'

export function MarketplaceCarousel() {
  const autoplay = useRef(Autoplay({ stopOnInteraction: false, delay: 3000 }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay.current])
  const images = [img1, img2, img3, img4, img5, img6, img7]
  const descriptions = ["Phone marketplace landing page", "Login using Google", "Phone creation example", "Activity log page", "Request for deletion page", "Error handling for request form", "Request confirmation page"]
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
export default MarketplaceCarousel

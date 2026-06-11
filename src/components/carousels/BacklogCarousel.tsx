import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import VG1 from '../../assets/images/Video Game Backlog Manager/01.png'
import VG2 from '../../assets/images/Video Game Backlog Manager/02.png'
import VG3 from '../../assets/images/Video Game Backlog Manager/03.png'
import VG4 from '../../assets/images/Video Game Backlog Manager/04.png'
import VG5 from '../../assets/images/Video Game Backlog Manager/05.png'
import VG6 from '../../assets/images/Video Game Backlog Manager/06.png'
import VG8 from '../../assets/images/Video Game Backlog Manager/08.png'
import VG9 from '../../assets/images/Video Game Backlog Manager/09.png'
import VG10 from '../../assets/images/Video Game Backlog Manager/10.png'
import prev from '../../assets/images/back.png'
import next from '../../assets/images/next.png'

export function BacklogCarousel() {
  const autoplay = useRef(Autoplay({ stopOnInteraction: false, delay: 3000 }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay.current])
  const images = [VG1, VG2, VG3, VG4, VG5, VG6, , VG8, VG9, VG10]
  const descriptions = ["Landing page for the backlog manager", "Example of adding a game", "Example of adding a game to your queue", 
    "Editing a game on your backlog", "Deleting a game from your backlog", "More detailed games backlog view", "Adding a game to your queue from the backlog view","Adding a game to your queue from the backlog view", "Example of marking a game as complete and leaving a review", "Showcase of the games that you've completed" ]  

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
export default BacklogCarousel

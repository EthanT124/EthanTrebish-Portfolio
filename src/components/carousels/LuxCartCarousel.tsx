import { useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import img1 from '../../assets/images/LuxCart/img1.png'
import img2 from '../../assets/images/LuxCart/img2.png'
import img3 from '../../assets/images/LuxCart/img3.png'
import img4 from '../../assets/images/LuxCart/img4.png'
import img5 from '../../assets/images/LuxCart/img5.png'
import img6 from '../../assets/images/LuxCart/img6.png'
import img7 from '../../assets/images/LuxCart/img7.png'
import img8 from '../../assets/images/LuxCart/img8.png'
import img9 from '../../assets/images/LuxCart/img9.png'
import img10 from '../../assets/images/LuxCart/img10.png'
import img11 from '../../assets/images/LuxCart/img11.png'
import img12 from '../../assets/images/LuxCart/img12.png'
import img13 from '../../assets/images/LuxCart/img13.png'
import img14 from '../../assets/images/LuxCart/img14.png'
import img15 from '../../assets/images/LuxCart/img15.png'
import img16 from '../../assets/images/LuxCart/img16.png'
import img17 from '../../assets/images/LuxCart/img17.png'
import img18 from '../../assets/images/LuxCart/img18.png'
import img19 from '../../assets/images/LuxCart/img19.png'
import img20 from '../../assets/images/LuxCart/img20.png'
import img21 from '../../assets/images/LuxCart/img21.png'
import img22 from '../../assets/images/LuxCart/img22.png'
import img23 from '../../assets/images/LuxCart/img23.png'
import img24 from '../../assets/images/LuxCart/img24.png'
import img25 from '../../assets/images/LuxCart/img25.png'
import img26 from '../../assets/images/LuxCart/img26.png'
import img27 from '../../assets/images/LuxCart/img27.png'
import img28 from '../../assets/images/LuxCart/img28.png'
import img29 from '../../assets/images/LuxCart/img29.png'
import img30 from '../../assets/images/LuxCart/img30.png'
import img31 from '../../assets/images/LuxCart/img31.png'
import img32 from '../../assets/images/LuxCart/img32.png'
import img33 from '../../assets/images/LuxCart/img33.png'
import img34 from '../../assets/images/LuxCart/img34.png'
import img35 from '../../assets/images/LuxCart/img35.png'
import img36 from '../../assets/images/LuxCart/img36.png'
import img37 from '../../assets/images/LuxCart/img37.png'
import img38 from '../../assets/images/LuxCart/img38.png'
import img39 from '../../assets/images/LuxCart/img39.png'
import img40 from '../../assets/images/LuxCart/img40.png'
import img41 from '../../assets/images/LuxCart/img41.png'
import img42 from '../../assets/images/LuxCart/img42.png'
import img43 from '../../assets/images/LuxCart/img43.png'
import img44 from '../../assets/images/LuxCart/img44.png'
import img45 from '../../assets/images/LuxCart/img45.png'
import img46 from '../../assets/images/LuxCart/img46.png'
import img47 from '../../assets/images/LuxCart/img47.png'
import img48 from '../../assets/images/LuxCart/img48.png'
import img49 from '../../assets/images/LuxCart/img49.png'
import img50 from '../../assets/images/LuxCart/img50.png'
import img51 from '../../assets/images/LuxCart/img51.png'
import img52 from '../../assets/images/LuxCart/img52.png'
import img53 from '../../assets/images/LuxCart/img53.png'
import img54 from '../../assets/images/LuxCart/img54.png'
import img55 from '../../assets/images/LuxCart/img55.png'

import prev from '../../assets/images/back.png'
import next from '../../assets/images/next.png'

export function LuxCartCarousel() {
  const autoplay = useRef(Autoplay({ stopOnInteraction: false, delay: 3000 }))
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [autoplay.current])
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
    img51, img52, img53, img54, img55
  ]
  const descriptions = [
    "LuxCart Landing Page", "Second half of LuxCart landing page", "About LuxCart", "LuxCart Shop Page", "Basic pagination on shop page",
    "Second page on the shop page", "Sort feature by item type", "Search feature for products", "Item Page", "Add to cart notification",
    "Updated cart quantity in top right corner", "Contact us page", "Shopping cart page", "Sign in page", "Sign up page",
    "Sign Up with form ", "Login autofill example", "Home page once logged in", "User account page", "Cart before checkout",
    "Cart checkout page", "Example with information for checkout", "Second half of checkout page", "empty cart example", "Order confirmation page",
    "Refund requested on order page", "Order information page", "Search order by ID", "Example of entering an ID", "Information brought up for an order with the ID of 10",
    "Reviews showcase on product page", "Example of leaving a review", "New review added onto the page", "Notification for a new wishlist item", "Wishlist page, showcasing the items that the user wants",
    "Example of a user getting a notification for removing an item from their wishlist", "Empty wishlist", "User list of personal reviews", "Editing review example", "Example of user changing the review title",
    "Deleting a review from the user's list", "Example of showing the removed review", "Home page for administrator", "Admin panel", "Create notification page for admin",
    "CRUD for notifications from the admin", "Opening notifications showing current and past notifications", "Notification information page", "Past notifications revealed", "Example of deleting a notification",
    "Creating a new item for the store", "Showcase of newly created item", "Admin panel for inventory management", "Example of editing an item", "Example of the changes made to the item"
  ]
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
export default LuxCartCarousel

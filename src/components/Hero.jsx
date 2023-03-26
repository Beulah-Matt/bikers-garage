import styles from '../style'
import {discount, hero} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
   <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div id='discount' className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
        <p className={`${styles.paragraph} ml-2`}>
        <span className='text-white'>10%</span> Discount For {" "}
        <span className='text-white'>New Clients</span>
        </p>
      </div>
      <div id='description' className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
          Your Reliable, <br className='sm:block hidden' /> {" "}
          <span className='text-gradient'>Competent</span> {" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted/>
          </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">Mechanic Provider.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur eaque earum inventore excepturi accusantium, hic fugiat optio temporibus. Illum animi quidem quia ad amet id laboriosam dicta ducimus commodi ex!</p>
    </div> 
    <div id='right-side' className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={hero} alt="motorbike" className='w-[100%] h-[100%] relative z-[5] rounded-lg'/>
    {/* gradients to show light at the back of image */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    {/* show this div when the device is a mobile screen */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
   </section>
  )
}

export default Hero

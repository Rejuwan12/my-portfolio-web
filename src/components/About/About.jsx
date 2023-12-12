import SectionTitle from "../SectionTitle/SectionTitle";
import banner from '../../assets/1254.jpg'

const About = () => {
    return (
        <div>
           <SectionTitle
           heading={'about me'}/>
           <div className='md:flex justify-between gap-8 items-center p-10'>

         <div className='bg-black md:mt-0 mt-4 rounded-full p-2'>
           <img className='rounded-full w-96 rounded-b-full ' src={banner} alt="" />
         </div>
         <div className='space-y-7'>
            <hr />
            <h1 className='text-3xl font-bold'>Full Name:
            Rejuwan Islam Rian</h1> <hr />
            <h2 className='text-3xl font-bold'>Address: Kishoreganj, Dhaka</h2>
            <hr />
            <h2 className='text-3xl font-bold'>Email: rezwanrian1@gmail.com</h2>
            <hr />
            <h2 className='text-3xl font-bold'>Contact: +8801712345678</h2>
            <hr />
            
         </div>
        </div>
            
        </div>
    );
};

export default About;
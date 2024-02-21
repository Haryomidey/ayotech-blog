import HeroImage from '../../../assets/images/about-img.png';

const HeroSection = () => {
    return (
        <div style={{backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', height: '100vh', backgroundRepeat: 'no-repeat'}} className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl tablet:text-[5rem] source-serif text-white font-bold'>About Us</h1>
            <p className='text-center tablet:max-w-[600px] text-white mt-5 tablet:mt-10 leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas rerum reiciendis sed sequi asperiores a excepturi commodi iste, labore neque saepe, quo odio unde! Ipsa quasi non cupiditate, quos repudiandae, cumque sed nisi officiis recusandae tempore veniam voluptatem autem.</p>
            <button className='mt-6 border-0'>Lorem Ipsum</button>
        </div>
    )
}

export default HeroSection

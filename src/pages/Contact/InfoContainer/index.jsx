// Icons
import OfficeIcon from '../../../assets/icons/office.svg';
import EmailIcon from '../../../assets/icons/email.svg';
import ContactIcon from '../../../assets/icons/phone.svg';

const InfoContainer = () => {
    return (
        <ul className='mt-8 grid gap-4 tablet:grid-cols-3'>
            <li className='bg-white shadow-xl h-[200px] rounded-lg flex flex-col justify-around items-center py-9'>
                <div className='bg-primary rounded-full h-[45px] w-[45px] grid place-items-center'>
                    <img src={OfficeIcon} className='w-[50%] ' alt="" />
                </div>
                <h3 className='mt-3 text-primary font-bold'>Address</h3>
                <p className='mt-6 text-gray text-sm font-semibold'>Wesco, Estate Akure Ondo State, Nigeria.</p>
            </li>
            <li className='bg-white shadow-xl h-[200px] rounded-lg flex flex-col justify-around items-center py-9'>
                <div className='bg-primary rounded-full h-[45px] w-[45px] grid place-items-center'>
                    <img src={EmailIcon} className='w-[50%] ' alt="" />
                </div>
                <h3 className='mt-3 text-primary font-bold'>Email</h3>
                <p className='mt-6 text-gray text-sm font-semibold'>oladiipoayomide2021@gmail.com</p>
            </li>
            <li className='bg-white shadow-xl h-[200px] rounded-lg flex flex-col justify-around items-center py-9'>
                <div className='bg-primary rounded-full h-[45px] w-[45px] grid place-items-center'>
                    <img src={ContactIcon} className='w-[50%] ' alt="" />
                </div>
                <h3 className='mt-3 text-primary font-bold'>Phone</h3>
                <p className='mt-6 text-gray text-sm font-semibold'>+234 813 077 1867</p>
            </li>
        </ul>
    )
}

export default InfoContainer

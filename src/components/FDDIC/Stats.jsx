
const Stats = () => {
    return (
        <div className={` bg-[#0C0C0C] flex flex-wrap items-center justify-between w-full px-4 md:px-16 xl:px-24 py-6 lg:py-12`} >
            <div className='text-center pb-6 lg:pb-0 w-1/2 lg:w-1/4'>
                <p className="text-[1.5rem] md:text-[2rem] text-[#FFFFFFCC] font-bold">24 hrs</p>
                <p className="text-[0.9rem] md:text-[1rem]  text-[#666666]">Time Commitment</p>
            </div>
            <div className='text-center pb-6 lg:pb-0 w-1/2 lg:w-1/4'>
                <p className="text-[1.5rem] md:text-[2rem] text-[#FFFFFFCC] font-bold">On Campus</p>
                <p className="text-[0.9rem] md:text-[1rem]  text-[#666666]">Location</p>
            </div>
            <div className='text-center w-1/2 lg:w-1/4'>
                <p className="text-[1.5rem] md:text-[2rem] text-[#FFFFFFCC] font-bold">50+</p>
                <p className="text-[0.9rem] md:text-[1rem]  text-[#666666]">Startups</p>
            </div>
            <div className='text-center w-1/2 lg:w-1/4'>
                <p className="text-[1.5rem] md:text-[2rem] text-[#FFFFFFCC] font-bold">05</p>
                <p className="text-[0.9rem] md:text-[1rem]  text-[#666666]">Coderboats</p>
            </div>

        </div>
    )
}

export default Stats
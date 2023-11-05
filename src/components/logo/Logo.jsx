import logo from '/logo.png'

const Logo = () => {
    return (
        <div className='flex items-center'>
            <img src={logo} className='w-[40px]' alt="" />
            <span className="mx-2 text-2xl inline font-bold text-primary-blue">Job Hunter</span>
        </div>
    );
};

export default Logo;
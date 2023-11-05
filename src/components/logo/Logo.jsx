import logo from '/logo.png'

const Logo = () => {
    return (
        <div className='flex min-w-min items-center justify-center'>
            <img src={logo} className='w-[7%]' alt="" />
            <div className="mx-2 text-2xl inline font-bold text-primary-blue">Job Hunter</div>
        </div>
    );
};

export default Logo;
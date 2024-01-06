

const Header = ({header, title}) => {
    return (
        <div>
            <div className='text-center text-2xl md:text-4xl mb-5 font-semibold text-primary-blue'>
                {header}
            </div>
            <div className='text-center mb-14 font-semibold'>
               {title}
            </div>
        </div>
    );
};

export default Header;
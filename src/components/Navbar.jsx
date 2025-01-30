import Logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-start bg-[#FEBD01]'>
            <div className='flex items-center space-x-6 p-2'>
                <img src={Logo} alt="logo" className='w-16 h-16' />
                <ul className='flex space-x-16  font-normal'>
                    <li><a href="#home" className=''>Home</a></li>
                    <li><a href="#productos" className=''>Productos</a></li>
                    <li><a href="#conocenos" className=''>Conócenos</a></li>
                    <li><a href="#contacto" className=''>Contacto</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

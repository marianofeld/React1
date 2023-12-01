import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
    < header className="bg-blue-800 flex justify-between" >
        <div>
            <a href="index.html"><img className='p-5 rounded-full' src="./icono.webp" alt="LOGO" /></a>
        </div>
        <nav className='flex items-center'>
            <a href="#" className='text-blue-100 text-3xl px-11 no-underline'>Nosotros</a>
            <a href="#" className='text-blue-100 text-3xl px-11 no-underline'>Productos</a>
            <a href="#" className='text-blue-100 text-3xl px-11 no-underline' ><CartWidget /></a>
        </nav>
    </header >
)
}


export default Navbar
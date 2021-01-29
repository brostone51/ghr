import { NavLink } from "react-router-dom"
import { ShoppingBagOutline, ShoppingCartOutline } from 'heroicons-react'

const header = () => {
  const title = 'Generations Handwoven Rugs'
  const links = [
    { text: 'About', route: '/' },
    { text: 'Shop', route: '/shop' },
    { text: 'Contact', route: '/contact' }
  ].map(link => (<NavLink exact to={link.route}><div className='mx-2'>{link.text}</div></NavLink>))

  return (
    <div className='h-16 py-4 grid grid-cols-3 text-lg align-items-end bg-indigo-50'>
      <div className='flex flex-row align-items-end'>
        {links}
      </div>
      <div className='justify-self-center text-2xl font-bold'>{title}</div>
      <div className='justify-self-end flex flex-row align-items-end'>
        <span className='mx-1'><ShoppingBagOutline /></span>
        <span className='mx-1'><ShoppingCartOutline /></span>
      </div>
    </div>
  )
}

export default header
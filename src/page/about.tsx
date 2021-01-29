import about1 from 'assets/img/about1.jpg'
import about2 from 'assets/img/about2.jpg'

const about = () => {
  const imgClass = 'shadow rounded-lg'
  const typeFaceClass = 'my-4 tracking-wide text-lg'

  return (
    <div>
      <div className="h-64 my-16 flex items-center">
        <div className='inline-block text-center text-4xl font-bold tracking-wider leading-normal text-indigo-900'>
          Handcrafted and upcycled - every single rug is made with care and attention to detail.
        </div>
      </div>
      <div className='flex flex-row space-x-4'>
        <div>
          <img src={about1} alt="2 beautiful rugs in red and blue" className={imgClass} />
        </div>
        <div >
          <img src={about2} alt="2 beautiful rugs in blue and blue/yellow" className={imgClass} />
        </div>
      </div>
      <div className='py-16'>
        <div className='text-2xl text-center font-medium leading-normal tracking-wider'>Who We Are</div>
        <div className='pt-4'>
          <div className={typeFaceClass}>
            Hand Woven Rugs - Marianne Eick, Peggy Stone and Lora Frisone are the third generation weavers in our family. Corianne Kocarek, Marianne's daughter, is the fourth generation weaver.
          </div>
          <div className={typeFaceClass}>
            In the 1950s the first generation weaver, Blanche Roth purchased a Weavers Friend Loom and a Cambridge Loom. Upon her death in 1963 these looms were passed onto her daughter, Luella Michel. The Cambridge loom was given to her daughter, Marianne about 1997. Upon Luella's death in 2009 the Weavers Friend loom was given to her daughter, Peggy. Marianne and Corianne also each use Union 36 looms. Lora uses a Nilus Leclerc loom.
          </div>
          <div className={typeFaceClass}>
            Our rugs are made of recycled materials for example; blue jeans, blankets, sheets, curtains, wool coats, sewing scraps and most any other type of washable fabric. The material is cut into strips, the strips are sewn together on the bias and then are woven into machine washable-line dry rugs. Find us on Facebook "Generations Handwoven Rugs"
          </div>
        </div>
      </div>
    </div>
  )
}

export default about
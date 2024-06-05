import { Regalo } from "./Regalo"
import type { Regalo as TRegalo } from './types'

export const Regalos=() =>{

  const regalos: TRegalo[] = [
    {
      id: '1',
      name: 'Regalo 1',
      image: 'regalo1.png',
      available: 'Si',

    }
  ]

  return (
    regalos.length > 0 && (
        <section className="grid lg:grid-cols-4 grid-cols-2 mx-10 mt-10">
        {
            regalos.map( data => (
               <Regalo regalo={data} key={data.id}/>
            ))
        }
        </section>
    )
  )
}
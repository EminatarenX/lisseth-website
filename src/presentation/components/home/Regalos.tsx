import { useEffect, useState } from "react"
import { Regalo } from "./Regalo"
import type { Regalo as TRegalo } from './types'
import { fetchService } from "../../../services"

export const Regalos=() =>{

  const [ regalos, setRegalos ] = useState<TRegalo[]>([])

  useEffect(() => {
    const fetchRegalos = async () => {
      const data = await fetchService.get('/gift')
      setRegalos(data)
    }
    fetchRegalos()
  },[])


  return (
    regalos.length > 0 && (
        <section className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 mx-10  gap-3 py-10">
        {
            regalos.map( data => (
               <Regalo regalo={data} key={data.id}/>
            ))
        }
        </section>
    )
  )
}
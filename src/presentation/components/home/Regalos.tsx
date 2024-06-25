import { useEffect, useState } from "react"
import { Regalo } from "./Regalo"
import type { Regalo as TRegalo } from './types'
import { fetchService } from "../../../services"

export const Regalos=() =>{

  const [ regalos, setRegalos ] = useState<TRegalo[]>([])

  useEffect(() => {
    const fetchRegalos = async () => {
      const data = await fetchService.get('/regalo')
      setRegalos(data)
    }
    fetchRegalos()
  },[])


  return (
    regalos.length > 0 && (
        <section className={`grid lg:grid-cols-4 grid-cols-2 mx-5 gap-5 py-10 ${window.location.pathname == '/' && 'lg:px-32'}`}>
        {
            regalos.map( data => (
               <Regalo regalo={data} key={data.id}/>
            ))
        }
        </section>
    )
  )
}
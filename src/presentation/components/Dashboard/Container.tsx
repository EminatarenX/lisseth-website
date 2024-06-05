

interface Props {
    children: any
    title: string
}

export const Container = ({ children, title }: Props) => {
  return (
    <section className="p-5 bg-white shadow rounded-lg mt-5 w-1/2">
    <h2 className="text-slate-800 text-2xl font-bold">{title}</h2>
    { children }
</section>
  )
}

import './section.css'

type sectionProps = {
  id: string
  children: React.ReactNode
}

function Section({ id, children }: sectionProps) {
  return (
    <section id={id}>
      <div className='wrapper'>{children}</div>
    </section>
  )
}

export default Section

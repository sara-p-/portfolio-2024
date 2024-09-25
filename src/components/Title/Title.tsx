import './title.css'

type titleProps = {
  firstLine: string
  secondLine?: string
}

function Title({ firstLine, secondLine }: titleProps) {
  return (
    <div className='title-box'>
      <h1 className='title'>
        <span className='first-line'>{firstLine}</span>
        {secondLine !== 'undefined' && (
          <span className='second-line'>{secondLine}</span>
        )}
      </h1>
    </div>
  )
}

export default Title

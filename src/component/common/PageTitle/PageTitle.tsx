import './PageTitle.css'

const PageTitle = ({ title }: {title: string}) => {
  return (
    <div className='title'>
     <p className='text_title'>{title}</p>
     <div className='underline_title'/>
    </div>
  )
}

export default PageTitle
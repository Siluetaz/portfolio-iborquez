import '../sass/layouts/Knowledge.scss'
import { AiFillHtml5 } from "react-icons/ai";
const Knowledge = () => {
  return (
    <section className='knowledge-side'>
      <h2 className='subtitle'>Conocimientos</h2>
      <div className='knowledges'>
        <div>
          <div className='knowledges__title'>Frontend</div>
          <div className='knowledges__item'><AiFillHtml5 /> HTML</div>
          <div className='knowledges__item'><AiFillHtml5 /> CSS</div>
          <div className='knowledges__item'><AiFillHtml5 /> SASS</div>
          <div className='knowledges__item'><AiFillHtml5 /> Javascript</div>
          <div className='knowledges__item'><AiFillHtml5 /> React</div>
          <div className='knowledges__item'><AiFillHtml5 /> Vue</div>
        </div>
        <div>
          <div className='knowledges__title'>Backend</div>
          <div className='knowledges__item'><AiFillHtml5 /> PHP</div>
          <div className='knowledges__item'><AiFillHtml5 /> Laravel</div>
          <div className='knowledges__item'><AiFillHtml5 /> MySQL</div>
        </div>
      </div>
    </section>
  )
}

export { Knowledge }

import '../sass/layouts/Knowledge.scss'
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoSass, } from "react-icons/io";
import { IoLogoJavascript, IoLogoReact, IoLogoVue } from "react-icons/io5";
 import { SiPhp, SiLaravel,  } from "react-icons/si";
 import { DiMysql } from "react-icons/di";
const Knowledge = () => {
  return (
    <section className='knowledge-side'>
      <h2 className='subtitle'>Conocimientos</h2>
      <div className='knowledges'>
        <div>
          <div className='knowledges__title'>Frontend</div>
          <div className='knowledges__item'><AiFillHtml5 /> HTML</div>
          <div className='knowledges__item'><IoLogoCss3 /> CSS</div>
          <div className='knowledges__item'><IoLogoSass /> Sass</div>
          <div className='knowledges__item'><IoLogoJavascript /> JavaScript</div>
          <div className='knowledges__item'><IoLogoReact /> React</div>
          <div className='knowledges__item'><IoLogoVue /> Vue</div>
        </div>
        <div>
          <div className='knowledges__title'>Backend</div>
          <div className='knowledges__item'><SiPhp /> PHP</div>
          <div className='knowledges__item'><SiLaravel /> Laravel</div>
          <div className='knowledges__item'><DiMysql /> MySQL</div>
        </div>
      </div>
    </section>
  )
}

export { Knowledge }

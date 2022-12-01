import '../sass/layouts/About.scss'
import { Card } from './Card'
import { Knowledge } from './Knowledge'
import { Skill } from './Skill'
import data from '../../data.json'
import Glider from 'react-glider';
import 'glider-js/glider.min.css';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { useRef, useState } from 'react'
import { HiCode } from "react-icons/hi";
import { TbExternalLink } from "react-icons/tb";

const About = ({ }) => {
  const gliderRef = useRef();
  const [project, setProject] = useState(data[0])
  const prev = () => {
    gliderRef.current.scrollItem("prev");
  };
  const next = () => {
    gliderRef.current.scrollItem("next");
  };
  const changeProject = () => {
    setProject(data[gliderRef.current.slide])
  }
  return (
    <section className='opacity about'>
      <Glider
        className="glider-container"
        draggable
        hasDots
        slidesToShow={1}
        scrollLock
      >
        <div><Knowledge /></div>
        <div><Skill /></div>
      </Glider>

    </section>
  )
}

export { About }

import '../sass/layouts/Section.scss'
import { useEffect, useState } from 'react';

const Section = ({ section }) => {
  const Icon = section.icon;
  return (
    <div className='sections-container__section'>
      <div className='sections-container__section__icon'><Icon /></div>
      <div className='sections-container__section__name'>{section.name}</div>
    </div>

  )
}

export { Section }

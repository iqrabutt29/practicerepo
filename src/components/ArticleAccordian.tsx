import React, { useState } from 'react';

import Icons from '@/helper/icons';
import { Item } from '@/common/types';

export default function ArticleAccordion() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  const handleToggle = () => {
    setExpanded(!expanded);
    if (!expanded) {
      setItems([{ id: Date.now(), name: 'Step Name' }]);
    }
  };

  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <button
        className="rounded-xl bg-transparent hover:bg-search focus:bg-search transition-colors duration-300 w-full cursor-pointer flex items-center justify-between px-3 py-2 dim-text text-base font-normal outline-none"
        onClick={handleToggle}
      >
        <span>Pre Scraping Steps</span>
        <img src={Icons.AccordianAddIcon.src} alt="Accordion Icon" />
      </button>
      {expanded && items.map(item => (
        <div key={item.id} className='py-3 px-3 flex items-center minus'>
          <img
            src={Icons.AccordianMinusIcon.src}
            alt="Accordion Minus Icon"
            onClick={() => handleDelete(item.id)}
            className="cursor-pointer"
          />
          <p className='ps-5 dim-text font-bold text-xl'> . <span className='dim-text text-base font-semibold ps-2 '>{item.name}</span></p>
        </div>
      ))}
    </div>
  );
}

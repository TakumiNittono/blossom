import { FC, useState, ReactNode } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const Accordion: FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex justify-between items-center uppercase tracking-wide font-medium hover:opacity-70 brand-transition"
      >
        <span>{title}</span>
        <span className={`brand-transition ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      
      <div
        className={`overflow-hidden brand-transition ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-6 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;

"use client";

import { ReactNode, useState } from "react";

interface AccordionItemProps {
  title: ReactNode;
  content: ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
  className?: string;
}

const AccordionItem = ({
  title,
  content,
  isOpen,
  toggleOpen,
  className,
}: AccordionItemProps) => {
  return (
    <details className={`border border-gray-300 ${className}`}>
      <summary
        onClick={toggleOpen}
        className="flex items-center justify-between w-full p-8 font-medium rtl:text-right text-zinc-900 dark:text-zinc-100 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1"
      >
        <span>{title}</span>
      </summary>
      {isOpen && (
        <div className="px-4 py-4 bg-white dark:bg-black">
          <p className="text-gray-500 dark:text-gray-400">{content}</p>

        </div>
      )}
    </details>
  );
};

interface AccordionProps {
  items: { title: ReactNode; content: ReactNode }[];
  className?: string;
}

export const Accordion = ({ items, className }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};


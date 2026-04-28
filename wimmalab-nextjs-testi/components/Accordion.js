import { useEffect, useState } from 'react';

const Accordion = ({ title, id = title, expanded = false, children }) => {
  const [open, setOpen] = useState(expanded);
  const [hidden, setHidden] = useState(false);

  // Hide Accordion content from DOM after animation finishes
  useEffect(() => {
    if (open) {
      setHidden(false);
    } else {
      setTimeout(() => {
        setHidden(true);
      }, 250);
    }
  }, [open]);

  return (
    <div className={`accordion-wrapper ${open ? 'open' : ''}`}>
      <button
        id={`header-${id}`}
        aria-expanded={open}
        aria-controls={`section-${id}`}
        className={`accordion-title ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}>
        <p>{title}</p>
      </button>
      <div
        id={`section-${id}`}
        role="region"
        aria-labelledby={`header-${id}`}
        className={`accordion-item ${!open ? 'collapsed' : ''} ${hidden ? 'hidden' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

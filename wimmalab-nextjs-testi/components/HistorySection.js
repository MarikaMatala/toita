import Accordion from '/components/Accordion';

const HistorySection = ({ year, intro, expanded = false, children }) => {
  return (
    <div className="history__section-wrapper">
      <div className="history__section">
        <Accordion title={year} id={year} expanded={expanded}>
          {intro && <p className="p-intro">{intro}</p>}
          {children && <div className="history__card-wrapper">{children}</div>}
        </Accordion>
      </div>
    </div>
  );
};

export default HistorySection;

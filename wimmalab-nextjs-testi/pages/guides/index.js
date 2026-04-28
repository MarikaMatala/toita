import BookCard from '/components/BookCard';
import GuideLayout from '/components/GuideLayout';
import { getGuideIntroductions } from '/components/lib/mdx';

const GuidesIndex = (props) => {
  const { guideIndexes } = props;

  return (
    <GuideLayout>
      <h1>WIMMA Lab Guides</h1>
      <p className="p-bigger margin-b">
        Welcome to WIMMA Lab Guides! Here you can find guides and project documentation for{' '}
        <a href="https://www.wimmalab.org/" target="_blank" rel="noopener noreferrer">
          WIMMA Lab
        </a>
        . By reading through the guides, you can learn more about the concept of WIMMA Lab and how
        it’s implemented in{' '}
        <a href="https://www.jamk.fi/" target="_blank" rel="noopener noreferrer">
          JAMK University of Applied Sciences
        </a>
        . You could even use the guides to implement and build your own project environment based on
        the WIMMA Lab concept!
      </p>

      <h2>All Guides</h2>
      {guideIndexes.map((guide, i) => {
        return (
          <BookCard
            title={guide.title}
            href={'/guides/' + guide.dir}
            img={'/assets/' + guide.image}
            key={i}>
            {guide.description}
          </BookCard>
        );
      })}
    </GuideLayout>
  );
};

export const getStaticProps = async () => {
  const frontmatter = await getGuideIntroductions();
  return {
    props: {
      ...frontmatter
    }
  };
};

export default GuidesIndex;

import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import CustomLink from '/components/CustomLink';
import GuideLayout from '/components/GuideLayout';
import { getAllFolders, getFileBySlug } from '/components/lib/mdx';

const components = { Image, a: CustomLink };

// If you want frontmatter, add frontMatter next to mdxSource
const GuideIndex = ({ mdxSource }) => {
  return (
    <GuideLayout>
      <div className="mdx">
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </GuideLayout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllFolders();
  const paramsPath = paths.map((path) => {
    return {
      params: {
        guideId: path
      }
    };
  });

  return {
    paths: paramsPath,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const { guideId } = params;
  const source = await getFileBySlug(guideId);

  return {
    props: source
  };
};

export default GuideIndex;

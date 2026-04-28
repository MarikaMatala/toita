import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

const root = process.cwd();

export const getAllFolders = () => {
  const directoryPath = path.join(root, 'guides');

  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

export const getAllGuideIds = (guide) => {
  const files = fs.readdirSync(path.join(root, 'guides', `${guide}`));

  const allFiles = files.filter((file) => file.includes('.mdx') && !file.includes('index.mdx'));

  return allFiles.map((file) => {
    return file.replace(/\.mdx$/, '');
  });
};

/*
 The highlevel function, which get all of the folders and their contentnames to getStaticPaths
 inside pages/guides/[guideId]/[chapterId].js in the form of:

 {
   params: {
     chapterId: [chapterId],
     guideId: [guideId]
   }
 }
*/
export const getAllStaticIds = () => {
  const guideDirs = getAllFolders();

  const newGuideDirs = guideDirs.map((guide) => {
    const mdxFiles = getAllGuideIds(guide);

    return mdxFiles.map((chapter) => {
      return {
        params: {
          chapterId: chapter,
          guideId: guide
        }
      };
    });
  });
  const allPaths = [];

  // NewGuideDirs isn't one array, it is multiple ones [[First Array], [Second Array]].
  // It's needed to be in one array so this is doing that.
  newGuideDirs.map((guideDir) => {
    guideDir.map((chapter) => {
      allPaths.push(chapter);
    });
  });
  return allPaths;
};

/*
 Gets the contents in guides/directory/slug.mdx, renders them in markdown, and separates frontmatter and the mdx content with the graymatter.
 */
export const getFileBySlug = async (directory, slug) => {
  console.log('getFileBySlug directory ->', directory, 'slug ->', slug);
  const source = slug
    ? fs.readFileSync(path.join(root, 'guides', directory, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'guides', `${directory}`, 'index.mdx'), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await serialize(content);
  return {
    mdxSource,
    frontMatter: {
      ...data
    }
  };
};

export const getGuideIntroductions = async () => {
  const allFolders = getAllFolders();

  const guideIndexes = allFolders.map((folder) => {
    const source = fs.readFileSync(path.join(root, 'guides', folder, 'index.mdx'), 'utf8');

    const { data } = matter(source);
    return {
      dir: folder,
      ...data
    };
  });
  return {
    guideIndexes
  };
};

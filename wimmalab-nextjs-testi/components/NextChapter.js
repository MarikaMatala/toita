import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NextChapter(props) {
  const { chapterList, chapterId, guideId } = props;
  const [chapterPos, setChapterPos] = useState(
    chapterList.findIndex((chapter) => chapter === chapterId)
  );

  useEffect(() => {
    setChapterPos(chapterList.findIndex((chapter) => chapter === chapterId));
  }, [chapterId, chapterList]);

  let pre_chap_pos, pre_chap_name, next_chap_pos, next_chap_name;
  if (chapterPos !== 0) {
    [pre_chap_pos, ...pre_chap_name] = chapterList[chapterPos - 1].split('-');
  }
  if (chapterPos !== chapterList.length - 1) {
    [next_chap_pos, ...next_chap_name] = chapterList[chapterPos + 1].split('-');
  }

  return chapterPos !== null ? (
    <div className="switch-chapter__bg-wrapper">
      <div className="switch-chapter">
        {chapterPos !== 0 && (
          <Link href={'../' + guideId + '/' + chapterList[chapterPos - 1]}>
            <a className="ChapterBorder">{pre_chap_pos + '. ' + pre_chap_name.join(' ')}</a>
          </Link>
        )}
        <Link href={'../' + guideId}>
          <a className="ChapterBorder">Back To Guide Start</a>
        </Link>
        {chapterPos !== chapterList.length - 1 && (
          <Link href={'../' + guideId + '/' + chapterList[chapterPos + 1]}>
            <a>{next_chap_pos + '. ' + next_chap_name.join(' ')}</a>
          </Link>
        )}
      </div>
    </div>
  ) : null;
}

import cx from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

export default function LazyImage(props) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="skeleton">
      <Image
        onLoad={() => setIsReady(true)}
        className={cx('lazy__fadein', { lazy__loaded: isReady })}
        {...props}
      />
    </div>
  );
}

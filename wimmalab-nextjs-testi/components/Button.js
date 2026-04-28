import CustomLink from '/components/CustomLink';

import ArrowIcon from '../svgs/arrow-right.svg';

// Actually a link styled as a button
export default function Button({
  href = '/',
  type = 'primary',
  locale,
  icon,
  className = '',
  children
}) {
  const btnClasses = `btn btn--${type} ${className}`;

  return (
    <CustomLink className={btnClasses} href={href} locale={locale}>
      <span className="btn__text">{children}</span>
      {icon && <ArrowIcon className="icon-arrow" />}
    </CustomLink>
  );
}

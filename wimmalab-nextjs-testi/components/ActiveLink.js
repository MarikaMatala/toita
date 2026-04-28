import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Children } from 'react';

// An extended Next.js Link
// Is able to add activeClassName depending on active main route
export default function ActiveLink({ children, activeClassName, href, ...props }) {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  // Remove URL parameters
  const sanitizedPath = asPath.split('#')[0].split('?')[0];

  // Check if the page or a sub-page is active and return the according class name
  const activityClassName =
    sanitizedPath === href || sanitizedPath.startsWith(href + '/') ? activeClassName : '';

  const className = `${childClassName} ${activityClassName}`.trim();

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  );
}

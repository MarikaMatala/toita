import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const CodeBlock = ({ className, children }) => {
  const language = className.split('-')[1];
  const value = children;

  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

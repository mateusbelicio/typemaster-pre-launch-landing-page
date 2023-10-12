import React from 'react';

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
  asElement?: React.JSX.ElementType;
}

function Paragraph({ children, asElement, className }: ParagraphProps) {
  const Component = asElement ? asElement : 'p';

  return <Component className={className}>{children}</Component>;
}

export default Paragraph;

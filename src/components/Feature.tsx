import Heading from '@/ui/Heading';
import Icon, { IconType } from '@/ui/Icon';
import Paragraph from '@/ui/Paragraph';

interface FeatureProps extends React.HTMLAttributes<HTMLLIElement> {
  icon: IconType;
  children: React.ReactNode;
}

function Feature({ icon, children }: FeatureProps) {
  return (
    <li className="flex flex-col items-center gap-6 sm:col-span-5 sm:items-start lg:col-span-3 sm:[&:nth-child(even)]:col-start-7 lg:[&:nth-child(even)]:col-start-auto">
      <Icon name={icon} />
      {children}
    </li>
  );
}

interface TextProps {
  children?: React.ReactNode;
}

function Title({ children }: TextProps) {
  return (
    <Heading variant="h3" asElement="h3" className="mt-6 md:mt-4 lg:mt-6">
      {children}
    </Heading>
  );
}

function Description({ children }: TextProps) {
  return <Paragraph>{children}</Paragraph>;
}

Feature.Title = Title;
Feature.Description = Description;

export default Feature;

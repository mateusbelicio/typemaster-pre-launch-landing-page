import Heading from '@/ui/Heading';
import Icon, { IconType } from '@/ui/Icon';
import Paragraph from '@/ui/Paragraph';

interface FeatureProps extends React.HTMLAttributes<HTMLLIElement> {
  title: string;
  icon: IconType;
  children: React.ReactNode;
}

function Feature({ title, icon, children }: FeatureProps) {
  return (
    <li className="flex flex-col items-center gap-6 sm:col-span-5 sm:items-start lg:col-span-3 sm:[&:nth-child(even)]:col-start-7 lg:[&:nth-child(even)]:col-start-auto">
      <Icon name={icon} />
      <Heading variant="h3" asElement="h3" className="mt-6 md:mt-4 lg:mt-6">
        {title}
      </Heading>
      <Paragraph>{children}</Paragraph>
    </li>
  );
}

export default Feature;

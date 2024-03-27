import { Column } from '@components';
import Input from '@components/Input';

export const InputSearch = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Column className="w-full md:w-[400px]">
      <Input label="Filter podcasts" icon="search" onChange={(e) => onChange(e.target.value)} />
    </Column>
  );
};

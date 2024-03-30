import { Column, Input } from '@components';

export const InputSearch = ({ onChange }: { onChange: (value: string) => void }) => {
  return (
    <Column className="w-full md:w-[400px]">
      <Input
        label="Filter podcasts"
        icon="search"
        onChange={(e) => onChange(e.target.value)}
        data-testid="input-filter"
      />
    </Column>
  );
};

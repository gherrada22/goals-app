export type AutocompleteItem = {
  id: string;
  label: string;
  value: any;
  isSelected?: boolean;
};

export type AutocompleteProps = {
  data: AutocompleteItem[];
  onSelect?: (items: AutocompleteItem[]) => void;
};

export type ItemCallback = (item: AutocompleteItem) => void;

export type AutocompleteResultsProps = {
  results: AutocompleteItem[];
  onSelect: ItemCallback;
};

export type AutocompleteOutputProps = {
  options: AutocompleteItem[];
  onClick: ItemCallback;
};

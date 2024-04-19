
export interface TableButtonProps {
    onClick?: () => void;
    paddingX?: string;
    buttonText?: string;
  }
  
  export interface ChartCardProps {
    name: string;
  }

  export interface CreateButtonProps {
    onClick?: () => void;
  }
  export interface DropdownProps {
    title: string;
    items: string[];
  }
  export interface SearchFieldProps {
    placeholder: string;
  }
  
  export interface MenuItem {
    text: string;
    path: string;
    icon: string; 
  }

  export interface Item {
    id: number;
    name: string;
  }
  export interface CardsProps {
    iconSrc: string;
    labelText: string;
    value: number;
    percent: number;
  }
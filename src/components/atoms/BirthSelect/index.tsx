'use client';

import { Select, SelectItem } from '@heroui/react';
import { FC, ChangeEvent } from 'react';

interface BirthSelectProps {
  options: number[];
  placeholder?: string;
  required?: boolean;
  onChange: (value: string) => void;
  width?: string;
  height?: string;
  ariaLabel: string;
  id: string;
}

const BirthSelect: FC<BirthSelectProps> = ({
  options = [],
  placeholder = '',
  required = false,
  onChange,
  width = '140px',
  height = '38px',
  ariaLabel,
  id,
}) => (
  <div>
    <label htmlFor={id} className="sr-only">
      {ariaLabel}
    </label>
    <Select
      id={id}
      isRequired={required}
      placeholder={placeholder}
      aria-label={ariaLabel}
      style={{ width, height }}
      classNames={{
        base: '',
        trigger: 'h-[38px]',
        popoverContent: 'z-[100]',
      }}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        console.log(`[BirthSelect:${id}] selected value:`, value);
        onChange(value);
      }}
    >
      {options.map((opt) => (
        <SelectItem key={opt} value={String(opt)}>
          {String(opt).padStart(2, '0')}
        </SelectItem>
      ))}
    </Select>
  </div>
);

export default BirthSelect;

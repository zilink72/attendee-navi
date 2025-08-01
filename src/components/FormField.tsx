import { ReactNode } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface BaseFieldProps {
  label?: string;
  required?: boolean;
  error?: string;
  className?: string;
  children?: ReactNode;
}

interface TextFieldProps extends BaseFieldProps {
  type?: 'text' | 'email' | 'tel' | 'password' | 'date' | 'datetime-local';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

interface TextareaFieldProps extends BaseFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  rows?: number;
}

interface SelectFieldProps extends BaseFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string }[];
}

interface RadioFieldProps extends BaseFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: string }[];
}

interface CheckboxFieldProps extends BaseFieldProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  children: ReactNode;
}

const FieldWrapper = ({ label, required, error, className, children }: BaseFieldProps) => (
  <div className={cn("space-y-2", className)}>
    {label && (
      <Label className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
    )}
    {children}
    {error && (
      <p className="text-sm text-destructive">{error}</p>
    )}
  </div>
);

export const TextField = ({ type = 'text', placeholder, value, onChange, ...props }: TextFieldProps) => (
  <FieldWrapper {...props}>
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="h-12 rounded-lg"
    />
  </FieldWrapper>
);

export const TextareaField = ({ placeholder, value, onChange, rows = 3, ...props }: TextareaFieldProps) => (
  <FieldWrapper {...props}>
    <Textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      rows={rows}
      className="rounded-lg resize-none"
    />
  </FieldWrapper>
);

export const SelectField = ({ placeholder, value, onChange, options, ...props }: SelectFieldProps) => (
  <FieldWrapper {...props}>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-12 rounded-lg">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </FieldWrapper>
);

export const RadioField = ({ value, onChange, options, ...props }: RadioFieldProps) => (
  <FieldWrapper {...props}>
    <RadioGroup value={value} onValueChange={onChange} className="flex flex-col space-y-2">
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value} className="text-sm font-normal cursor-pointer">
            {option.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  </FieldWrapper>
);

export const CheckboxField = ({ checked, onChange, children, ...props }: CheckboxFieldProps) => (
  <FieldWrapper {...props}>
    <div className="flex items-start space-x-2">
      <Checkbox
        checked={checked}
        onCheckedChange={onChange}
        className="mt-1"
      />
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  </FieldWrapper>
);
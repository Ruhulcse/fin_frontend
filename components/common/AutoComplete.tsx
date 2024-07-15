import { Command as CommandPrimitive } from 'cmdk';
import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type KeyboardEvent,
} from 'react';
import {
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '../ui/command';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export type Option = Record<'value' | 'label', string> & Record<string, string>;

type AutoCompleteProps = {
	options: Option[];
	onValueChange?: any;
	placeholder?: string;
	defaultValue?: boolean;
	value?: any;
	disabled?: boolean;
};

export const AutoComplete = ({
	options,
	placeholder,
	onValueChange,
	defaultValue = false,
	value = null,
	disabled = false,
}: AutoCompleteProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isOpen, setOpen] = useState(false);
	const [selected, setSelected] = useState<any>(null);
	const [inputValue, setInputValue] = useState<any>('');

	const handleKeyDown = useCallback(
		(event: KeyboardEvent<HTMLDivElement>) => {
			const input: any = inputRef.current;
			if (!isOpen) {
				setOpen(true);
			}
			setSelected(null);
			if (event.key === 'Enter' && input.value !== '') {
				setOpen(false);
				onValueChange &&
					onValueChange({
						selectValue: null,
						inputValue: input.value,
					});
			}
		},
		[isOpen, onValueChange]
	);

	const handleSelectOption = useCallback(
		(selectedOption: Option) => {
			setInputValue(selectedOption.label);
			setSelected(selectedOption.value);
			setOpen(false);
			inputRef.current?.blur();
			onValueChange &&
				onValueChange({
					selectValue: selectedOption.value,
					inputValue: selectedOption.label,
				});
		},
		[onValueChange]
	);

	const inputBlurred = () => {
		onValueChange &&
			onValueChange({
				selectValue: selected,
				inputValue,
			});
		setOpen(false);
	};

	useEffect(() => {
		if (value) {
			const foundItem = options.find(
				(option) => String(option.value) === String(value)
			)?.label;
			if (foundItem) {
				setSelected(value);
				setInputValue(options.find((option) => option.value === value)?.label);
			}
		}
	}, [options, value]);

	useEffect(() => {
		if (defaultValue) {
			setSelected(null);
			setInputValue('');
		}
	}, [defaultValue]);

	return (
		<CommandPrimitive onKeyDown={handleKeyDown}>
			<div className="rounded-md bg-card text-end text-textPrimary">
				<CommandInput
					ref={inputRef}
					value={inputValue}
					onFocus={() => setOpen(true)}
					placeholder={placeholder}
					onValueChange={setInputValue}
					className="text-right"
					onBlur={inputBlurred}
					disabled={disabled}
				/>
			</div>
			<div className="relative mt-1">
				<div
					className={cn(
						'animate-in fade-in-0 zoom-in-95 absolute top-0 z-10 w-full rounded bg-secondary outline-none',
						isOpen ? 'block' : 'hidden'
					)}
				>
					<CommandList className="rounded-lg">
						{options.length > 0 ? (
							<CommandGroup>
								{options.map((option) => {
									const isSelected = String(selected) === String(option.value);
									return (
										<CommandItem
											key={option.value}
											value={option.label}
											onMouseDown={(event) => {
												event.preventDefault();
												event.stopPropagation();
											}}
											onSelect={() => handleSelectOption(option)}
											className={cn(
												'flex w-full items-center gap-2 justify-end text-white hover:!bg-card aria-selected:!bg-card',
												!isSelected ? 'pl-8' : null
											)}
										>
											{isSelected ? <Check className="w-4" /> : null}
											{option.label}
										</CommandItem>
									);
								})}
							</CommandGroup>
						) : null}
					</CommandList>
				</div>
			</div>
		</CommandPrimitive>
	);
};

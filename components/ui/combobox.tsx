'use client';

import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '@/components/ui/command';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const Combobox = ({
	options = [],
	placeholder = 'Select an option',
	changeHandler,
}: {
	options: { value: string; label: string }[];
	placeholder?: string;
	changeHandler: any;
}) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');

	useEffect(() => {
		if (value) {
			changeHandler({
				selectValue: value,
				inputValue: '',
			});
		}
	}, [changeHandler, value]);

	return (
		<Popover
			open={open}
			onOpenChange={setOpen}
		>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-full justify-between bg-card text-textPrimary hover:bg-card"
				>
					{value
						? options.find((option) => String(option.value) === String(value))
								?.label
						: placeholder}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-full bg-card p-0">
				<Command>
					<CommandInput placeholder={placeholder} />
					<CommandList>
						<CommandEmpty>No Options found.</CommandEmpty>
						<CommandGroup>
							{options?.map((option: any) => (
								<CommandItem
									key={option?.value}
									value={option?.value}
									onSelect={() => {
										setValue(option?.value);
										setOpen(false);
									}}
								>
									<Check
										className={cn(
											'mr-2 h-4 w-4',
											value === option?.value ? 'opacity-100' : 'opacity-0'
										)}
									/>
									{option?.label}
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};
export default Combobox;

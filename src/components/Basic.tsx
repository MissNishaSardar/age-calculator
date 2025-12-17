"use client";

import {
	format,
	formatDistanceToNow,
	isBefore,
	startOfTomorrow,
} from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const Basic = () => {
	const [open, setOpen] = useState(false);
	const [inputDate, setInputDate] = useState<Date | undefined>(undefined);
	return (
		<>
			<div className="grid w-xs gap-8 text-center">
				<h1 className="text-2xl">
					{inputDate
						? isBefore(inputDate, startOfTomorrow())
							? `You are ${formatDistanceToNow(inputDate)} Old`
							: `You Will Be ${formatDistanceToNow(inputDate)} Old`
						: "Select Your Date Of Birth"}
				</h1>

				<Popover
					open={open}
					onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							id="date"
							className="w-78 justify-between font-normal">
							{inputDate ? format(inputDate, "PPPP") : "Pick a Date"}
							<ChevronDownIcon />
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto overflow-hidden p-0"
						align="start">
						<Calendar
							mode="single"
							selected={inputDate}
							captionLayout="dropdown"
							onSelect={(date) => {
								setInputDate(date);
								setOpen(false);
							}}
						/>
					</PopoverContent>
				</Popover>
			</div>
		</>
	);
};

export default Basic;

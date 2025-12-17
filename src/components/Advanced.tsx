"use client";

import { dobSchema } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format, formatDistanceToNow } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { Button } from "./shadcnui/button";
import { Calendar } from "./shadcnui/calendar";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcnui/popover";

const Advanced = () => {
	const [result, setResult] = useState("Select your date of birth");

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm({
		resolver: zodResolver(dobSchema),

		defaultValues: {
			dob: undefined,
		},
		mode: "all",
	});

	const handleSubmitFunc = async ({ dob }: z.infer<typeof dobSchema>) => {
		await new Promise((resolve) => setTimeout(resolve, 1500));
		setResult(`You are ${formatDistanceToNow(dob)} old`);

		// reset();
	};

	return (
		<div className="grid gap-4">
			<h1 className="text-center text-xl font-semibold">{result}</h1>

			<form
				onSubmit={handleSubmit(handleSubmitFunc)}
				className="grid gap-8"
				noValidate>
				<Controller
					name="dob"
					control={control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor={field.name}>Date of birth</FieldLabel>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant={"outline"}
										className="w-full justify-between font-normal">
										{field.value ? (
											format(field.value, "PPP")
										) : (
											<span>Pick a date</span>
										)}
										<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
									</Button>
								</PopoverTrigger>
								<PopoverContent
									className="w-auto overflow-hidden p-0"
									align="start">
									<Calendar
										mode="single"
										selected={field.value}
										captionLayout="dropdown"
										onSelect={field.onChange}
										disabled={(date) =>
											date > new Date() || date < new Date("1900-01-01")
										}
									/>
								</PopoverContent>
							</Popover>

							<Button
								className="cursor-pointer"
								type="submit"
								disabled={isSubmitting}>
								{isSubmitting ? `Calculating....` : "Calculate age"}
							</Button>

							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</form>
		</div>
	);
};

export default Advanced;

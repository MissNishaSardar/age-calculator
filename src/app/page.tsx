import Basic from "@/components/Basic";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Age Calculator",
	description: "Basic page of Age Calculator",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card>
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Basic Age Calculator
					</CardTitle>
				</CardHeader>
				<CardContent>
					<Basic />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;

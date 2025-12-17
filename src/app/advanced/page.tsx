import Advanced from "@/components/Advanced";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advanced | Age Calculator",
	description: "Advanced page of Age Calculator",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="grid w-sm">
				<CardContent>
					<CardHeader>
						<CardTitle className="grid place-items-center text-2xl">
							Advanced Age Calculator
						</CardTitle>
					</CardHeader>
					<Advanced />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;

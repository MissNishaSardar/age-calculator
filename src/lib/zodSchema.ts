import z from "zod";

export const dobSchema = z.object({
	dob: z.date({ error: "A Date of Birth Required" }),
});

import { PlusIcon } from "@radix-ui/react-icons";

export default function Projects() {
	return (
		<div className="p-8 2xl:p-14 flex flex-col items-center sm:w-full xl:w-fit xl:justify-between border bg-card border-border rounded-[30px] ">
			<span className="tracking-[3px] text-xl 2xl:text-2xl text-heading font-bold">
				PROJECTS
			</span>
			<div className="flex flex-row items-center justify-center w-full gap-1">
				<span className="text-6xl 2xl:text-8xl font-bold">
					6
				</span>
				<PlusIcon />
			</div>
		</div>
	)
}

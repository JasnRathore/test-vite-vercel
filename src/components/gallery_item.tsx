import { ExternalLinkIcon } from "@radix-ui/react-icons"
import { ReactNode } from "react"

interface ProjectItemInterface {
	title: string
	description: string
	link: string
	children?: ReactNode
}

export default function ProjectItem({
	title,
	description,	
	link,
	children	
}: ProjectItemInterface) {
	
	return (
		<div className="px-6 2xl:px-8 py-4 2xl:py-6 bg-card border items-center flex flex-col sm:flex-row gap-6 2xl:gap-8 justify-between  border-border rounded-[20px]">
			<div className="flex flex-col gap-1 2xl:gap-3 w-full">
			<div className="flex flex-row justify-between">
				<span className="tracking-[3px] text-md lg:text-xl 2xl:text-2xl text-heading font-bold">
					{ title }
				</span>		
				<div className="hidden md:flex flex-row gap-2">
						 { children }
				</div>
			</div>
			<span className="text-md lg:text-xl 2xl:text-2xl ">
				{ description }
			</span>		
			</div>
			<a href={link} target="_blank" className="hidden sm:flex">
			<ExternalLinkIcon className="size-6 md:size-10 2xl:size-12" />
			</a>
			<a href={link} target="_blank" className="sm:hidden flex flex-row items-center gap-2">
				Visit
			<ExternalLinkIcon className="size-4" />
			</a>
		</div>
	)
}

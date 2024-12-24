import { useContext } from "react";
import { ThemeContext } from "../context";
import { NavLink } from "react-router";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import ProjectItem from "../components/gallery_item";
import { CPPLogo, GOLogo, JSLogo, MYSQLLogo, PYLogo, ReactLogo, RSLogo, TailwindLogo, TSLogo } from "../components/logos";

export function GalleryPage() {
	const theme = useContext(ThemeContext); 
	return (
		<div className={`${theme ? "" : "dark"} p-8 2xl:p-14  flex flex-col gap-4 font-montserrat w-full min-h-screen h-full bg-background text-text`}>
			<div className="px-6 2xl:px-8 py-4 2xl:py-6 items-center flex flex-row justify-between rounded-[20px]">
				<NavLink to="/" className="flex flex-row text-md lg:text-xl 2xl:text-2xl gap-2 2xl:gap-4 items-center">
					<div className="border-2 border-border p-1 rounded-full">
							<ArrowLeftIcon className="size-5 2xl:size-7" />
					</div >
					<span className="hidden sm:inline">
						Home
					</span>
				</NavLink>
				<span className="tracking-[3px] text-2xl lg:text-3xl 2xl:text-4xl text-heading font-bold">
					GALLERY
				</span>
			</div>
			
			<div className="flex flex-col gap-4 2xl:gap-6 ">
				
				
				<ProjectItem title="JCommandChain (JCC)" link="https://github.com/JasnRathore/JCommandChain" 
					description="CLI Tool That Allows you to alias Commands/scripts or run multiple of them concurrently"
					>
					<GOLogo />
				</ProjectItem>
				
				<ProjectItem title="JYNTAXE" link="https://github.com/JasnRathore/jyntaxe" 
					description="A Minimalist Editor made Using Monaco Editor, React, Tauri"
					>
					<ReactLogo /><TailwindLogo /><RSLogo />
				</ProjectItem>

				<ProjectItem title="BUISQL" link="https://github.com/JasnRathore/BUISQL" 
					description="A simple GUI application built to view MYSQL Data without using the command line"
					>
					<JSLogo /><TailwindLogo /><PYLogo /><MYSQLLogo />
				</ProjectItem>
				
				<ProjectItem title="HADES CPP"	link="https://github.com/JasnRathore/hadescpp"
					description="A GUI CRUD app for maintaing prison data {School Turned Personal Project}"
					>
					<CPPLogo />
				</ProjectItem>
				
				<ProjectItem 
					title="HADES" 
					description="A CLI CRUD app for maintaing prison data {School Project}" 
					link="https://github.com/JasnRathore/Hades"
				> 
					<PYLogo />
					<MYSQLLogo />
				</ProjectItem>
				
			</div>
		</div>
	)
}


export function DesignItem() {
	
}

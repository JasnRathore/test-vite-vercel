import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import * as Switch from "@radix-ui/react-switch";
import { useContext} from "react";
import { ThemeContext, ToggleThemeContext } from "../context";

export default function ThemeControl() {
  const theme = useContext(ThemeContext);
	const toggleTheme = useContext(ToggleThemeContext);

	return (
		<div className="p-8 2xl:p-14 flex items-center justify-center md:h-full lg:h-32 xl:h-1/2 bg-card border border-border rounded-[30px] ">
			<Switch.Root
				checked={theme}
				onCheckedChange={() => toggleTheme(!theme)}
				className="outline-none border-border relative h-[50px] w-[84px] p-1 cursor-default rounded-full bg-foreground "
			>
				<Switch.Thumb 
					className="block size-[42px] p-2.5 bg-toggle flex items-center justify-center rounded-full transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[80%]"
					>
					{ theme ? <SunIcon className="size-full" /> : <MoonIcon className="size-full"/> }
			</Switch.Thumb>
			</Switch.Root>		</div>
	)
}

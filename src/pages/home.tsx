import { Max, Mid, Mobile2X } from "../layouts"
import { ThemeContext, ToastContext } from "../context"

import * as Toast from "@radix-ui/react-toast";
import { useContext, useState } from "react";

export default function HomePage() {
	const theme = useContext(ThemeContext); 
	const [open, setOpen] = useState(false);
	return (
		<>
    <ToastContext.Provider value={setOpen}>
    <Max />
    < Mid />
    <Mobile2X />
    </ToastContext.Provider>
		<Toast.Provider>
			<Toast.Root
				className="bg-card border border-amber-400 w-fit rounded-[15px] py-3 px-8 data-[swipe=cancel]:translate-x-0 data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[state=closed]:animate-hide data-[state=open]:animate-slideIn data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]"
				open={open}
				onOpenChange={setOpen}
			>
				<Toast.Title className="">
					Mail Copied
				</Toast.Title>
			</Toast.Root>
			<Toast.Viewport className={`${theme ? "" : "dark"} text-text  fixed top-0 left-0 w-full flex justify-center z-[2147483647] m-0  outline-none p-4`}/>
		</Toast.Provider>
		</>
	)
}

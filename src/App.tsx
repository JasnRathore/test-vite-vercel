import { getMode } from "./lib"
import { ThemeContext, ToggleThemeContext } from "./context"
import HomePage from "./pages/home";

import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import { GalleryPage } from "./pages/gallery_page";
import { ErrorPage } from "./pages/error_page";
import { DesignsPage } from "./pages/designs_page";

function App() {
  const [Toggled, SetToggle] = useState(getMode());
	const router = createBrowserRouter([{
	path: "/",
	element: <HomePage />,
	errorElement: <ErrorPage />,
	},{
		path: "/projects",
		element: <GalleryPage />
	}, {
			path: "/designs",
		element: <DesignsPage/>
		},
	]);

  return (
    <>
    <ThemeContext.Provider value={Toggled}>
		<ToggleThemeContext.Provider value={SetToggle}>
				<RouterProvider router={router} />
    </ToggleThemeContext.Provider>
    </ThemeContext.Provider>
    </>
  )
}

export default App

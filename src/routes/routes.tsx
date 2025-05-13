import type { RouteObject } from "react-router-dom";

import PageNotFound from "../components/PageNotFound";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Root from "../Root";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Root />,
		errorElement: <PageNotFound />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "services", element: <Services /> },
			{ path: "blog", element: <Blog /> },
			{ path: "contact", element: <Contact /> },
		],
	},
];

export default routes;

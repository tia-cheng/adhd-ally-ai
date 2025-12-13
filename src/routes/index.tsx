// Node Modules
import { createBrowserRouter } from "react-router";

/* Pages */
import HomePage from "@/pages/HomePage";
import RegisterPage from "@/pages/RegisterPage";

/* Layouts */
//RootLayout is navbar and footer
import RootLayout from "@/layouts/RootLayout";

/* Types */
import type { RouteObject } from "react-router";

/* Error Boundaries */
import RootErrorBoundary from "@/pages/RootErrorBoundary";

const rootRouterChildren: RouteObject[] = [
    {
        index: true, //if index is true, Navbar+HomePage+Footer. If flase, Navbar + (Empty) + Footer
        element: <HomePage />,
    },
    {
        path: 'register',
        element: <RegisterPage />,
    },
];
// declare a constant variable named router and assign it the value of createBrowserRouter function
// This router object is what the React application later uses to determine which component to render based on the current URL
const router = createBrowserRouter([
    {
        path: '/', //when the url is simply 'domain.com/'
        element: <RootLayout />, // load the rootLayout comoponent
        errorElement: <RootErrorBoundary />,
        children: rootRouterChildren // with these children routes
    }
])
export default router;

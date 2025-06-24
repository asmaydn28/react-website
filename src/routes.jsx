import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout";
import AboutMe from "./sections/AboutMe/AboutMe";
import AboutThisSite from "./sections/AboutThisSite/AboutThisSite";
import Resume from "./sections/Resume/Resume";
import NotFound from "./sections/NotFound/NotFound";
import Project from "./sections/Project/Project";
import Contact from "./sections/Contact/Contact";

const routes = [
  {
    path: '/',
    element: <RootLayout />, // RootLayout ana layout
    errorElement: <NotFound />,
    children: [
      { index: true, element: <AboutThisSite /> },
      { path: 'AboutMe', element: <AboutMe /> },
      { path: 'Resume', element: <Resume /> },
      { path: 'Project', element: <Project /> },
      { path: 'Contact', element: <Contact /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router; 
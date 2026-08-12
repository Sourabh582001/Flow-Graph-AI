import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Workflows from "@/pages/Workflows";
import WorkflowDetails from "@/pages/WorkflowDetails";
import ComingSoon from "@/pages/ComingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/workflows",
        element: <Workflows />,
      },
      {
        path: "/workflows/:id",
        element: <WorkflowDetails />,
      },
      {
        path: "/agents",
        element: <ComingSoon />,
      },
      {
        path: "/impact-analysis",
        element: <ComingSoon />,
      },
      {
        path: "/services",
        element: <ComingSoon/>,
      },
      {
        path: "/settings",
        element: <ComingSoon />,
      },
    ],
  },
]);
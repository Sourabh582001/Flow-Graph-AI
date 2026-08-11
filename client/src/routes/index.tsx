import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Workflows from "@/pages/Workflows";
import WorkflowDetails from "@/pages/WorkflowDetails";

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
    ],
  },
]);
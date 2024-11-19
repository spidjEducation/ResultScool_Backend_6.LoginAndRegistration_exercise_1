import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { LoginPage, AppointmentPage, AppointmentsPage } from '../pages';

const routerConfig = createBrowserRouter([
	{
		path: '/',
		element: <Outlet />,
		children: [
			{
				index: true,
				element: <Navigate to="/appointment" replace />,
			},
			{
				path: '/appointment',
				element: <AppointmentPage />,
			},
			{
				path: '/appointments',
				element: <AppointmentsPage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '*',
				element: <AppointmentPage />,
				//element: <ErrorBoundary />,
			},
		],
	},
]);

export const AppRouter = () => <RouterProvider router={routerConfig} />;

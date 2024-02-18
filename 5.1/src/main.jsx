import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Contact";
import EditContact from "./EditContact";
import ErrorPage from "./ErrorPage";
import Index from "./Index";
import Root from "./Root";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  updateContactFavorite,
} from "./actions/contactsAction";
import "./index.css";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: getContactsLoader,
    action: createContactAction,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/contacts/:contactId",
            element: <Contact />,
            loader: getContactLoader,
            action: updateContactFavorite,
          },
          {
            path: "/contacts/:contactId/edit",
            element: <EditContact />,
            loader: getContactLoader,
            action: editContactAction,
          },
          {
            path: "/contacts/:contactId/destroy",
            action: deleteContactAction,
            errorElement: (
              <div>Oops! There was an error deleting the contact!</div>
            ),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

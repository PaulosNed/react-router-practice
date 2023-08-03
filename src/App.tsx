import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { AppLayout } from "./layouts/AppLayout";
import { Home } from "./pages/Home";
import { ContactDetail } from "./pages/ContactDetail";
import { EditContact } from "./pages/EditContact";
import { AddContact } from "./pages/AddContact";
import { contactsLoader } from "./loaders/ContactsLoader";
import { singleContactLoader } from "./loaders/SingleContactLoader";
import { contactAction, editContactAction } from "./actions/ContactAction";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />}  loader={contactsLoader}/>
        <Route path="contacts/:id" element={<ContactDetail />} loader={singleContactLoader}/>
        <Route path="edit/:id" element={<EditContact />}  loader={singleContactLoader} action={editContactAction}/>
        <Route path="add" element={<AddContact />} action={contactAction}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

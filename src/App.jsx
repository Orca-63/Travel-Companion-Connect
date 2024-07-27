import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import PlacesPage from './Pages/PlacesPage';
import NotFound from './Pages/NotFound';
import SinglePlace, { placeLoader } from './Pages/SinglePlace';


import AddPlace from './Pages/AddPlaces';
import EditTravelPlans from './Pages/EditTravelPlans';
const App = () => {
  const addPlace = async (newPlace) => {
    const res = await fetch('/api/Places', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlace)
    });

    return;
  };

  const removePlace = async (id) => {
    const res = await fetch(`/api/Places/${id}`, {
      method: 'DELETE',
    });

    return;
  };
  const updateTravelPlan = async (place) => {
    const res = await fetch(`/api/Places/${place.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(place)
    });

    return;

  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/places' element={<PlacesPage />} />
        <Route path='/AddPlace' element={<AddPlace AddPlaceSubmit={addPlace} />} />
        <Route path='/Places/:id' element={<SinglePlace removePlace={removePlace} />} loader={placeLoader} />

        <Route path='/BrowseTravelPlans' element={<PlacesPage />} />
        <Route path='/AddPlace' element={<AddPlace />} />
        <Route path='/EditTravelPlan/:id' element={<EditTravelPlans updateTravelPlanSubmit={updateTravelPlan} />} loader={placeLoader} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />
}

export default App;

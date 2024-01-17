import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

import MainScreen from '../../pages/main/main';
import LoginScreen from '../../pages/login/login';
import FavoritesScreen from '../../pages/favorites/favorites';
import OfferScreen from '../../pages/offer/offer';
import NotFoundScreen from '../../pages/not-found/not-found';
import PrivateRoute from '../private-router/private-router';

import type { Offer, City } from '../../types/offer';

type AppProps = {
  offers: Offer[];
  city: City;
}

function App({ offers, city }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainScreen offers={offers} city={city} />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesScreen offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferScreen />}
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

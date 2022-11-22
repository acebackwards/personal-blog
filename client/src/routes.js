import {ADMIN_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTRATION_ROUTE, REPOLIST_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import RepoList from "./pages/RepoList";
import Auth from "./pages/Auth";
import MainPage from "./pages/MainPage";
import Repo from "./pages/Repo";
import RepoPage from "./pages/RepoPage";

export const privateRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <Admin />
    },

]

export const publicRoutes = [
    {
        path: REPOLIST_ROUTE,
        Component: <RepoList />
    },
    {
        path: REPOLIST_ROUTE + '/:id',
        Component: <RepoPage />
    },
    {
        path: MAINPAGE_ROUTE,
        Component: <MainPage />
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth />
    }
]
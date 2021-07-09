import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { errorPage } from "./pages/404";
import { Header } from "./components/Header";
import { BottomNav } from "./components/BottomNav/BottomNav";
export const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={errorPage} />
                </Switch>
            <BottomNav />
        </BrowserRouter>
    )
}
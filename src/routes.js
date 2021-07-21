import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Geral } from "./pages/Geral";
import { errorPage } from "./pages/404";
import { Header } from "./components/Header";
import { Sintomas } from "./pages/Sintomas";
export const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/geral" component={Geral} />
                    <Route exact path="/sintomas" component={Sintomas} />
                    <Route path="*" component={errorPage} />
                </Switch>
        </BrowserRouter>
    )
}
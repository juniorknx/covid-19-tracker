import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Geral } from "./pages/Geral";
import { errorPage } from "./pages/404";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sintomas } from "./pages/Sintomas";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
                <Switch>
                    <Route exact path="/geral" component={Home} />
                    <Route exact path="/" component={Geral} />
                    <Route exact path="/sintomas" component={Sintomas} />
                    <Route path="*" component={errorPage} />
                </Switch>
            <Footer />
        </BrowserRouter>
    )
}
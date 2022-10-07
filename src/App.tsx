import { Route, Redirect, Switch } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./views/Home"));
const HowWorks = lazy(() => import("./views/HowWorks"));
const OurInvestments = lazy(() => import("./views/OurInvestments"));
const OurValues = lazy(() => import("./views/OurValues"));
const PageNotFound = lazy(() => import("./views/PageNotFound"));

function App() {
    return (
        <Suspense fallback={<Loader />}>
            <Header />
            <Switch>
                <Route exact path="/" render={() => <Home />} />
                <Route exact path="/how-works" render={() => <HowWorks />} />
                <Route exact path="/our-investments" render={() => <OurInvestments />} />
                <Route exact path="/our-strengths" render={() => <OurValues />} />
                <Route path="*" render={() => <PageNotFound />} />
            </Switch>
            <Footer />
        </Suspense>
    );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import CharityList from './pages/CharityList';
import Map from './pages/Map';
import EventDescription from './pages/EventDescription';
import EventsList from './pages/EventsList';
import CharityDescription from './pages/CharityDescription';
import NavBar from './components/NavBar';
import Contacts from './pages/Contacts';
import "focus-visible/dist/focus-visible";

function App() {
  return (
    <ChakraProvider>
        <Router>
          <div className="App">
            <Switch>
              <Box height="91vh">
                <Route exact path="/">
                  <Map />
                </Route>

                <Route path="/associations">
                  <CharityList />
                </Route>

                <Route path="/association/:id/evenements">
                  <EventsList />
                </Route>

                <Route path="/association/:id/evenement/:id_event/description">
                  <EventDescription />
                </Route>

                <Route path="/association/:id/description">
                  <CharityDescription />
                </Route>

                <Route path="/contacts">
                  <Contacts />
                </Route>
              </Box>

            </Switch>

            <NavBar />

          </div>
        </Router>
    </ChakraProvider>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import CharityList from './pages/CharityList';
import Map from './pages/Map';
import EventDescription from './pages/EventDescription'
import CharityDescription from './pages/CharityDescription';
import NavBar from './components/NavBar';
import Contacts from './pages/Contacts';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div className="App">
          <Switch>
            <Box height="87vh">
              <Route exact path="/">
                <Map />
              </Route>

              <Route path="/associations">
                <CharityList />
              </Route>

              <Route path="/description/evenement/:id">
                <EventDescription />
              </Route>

              <Route path="/description/association/:id">
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

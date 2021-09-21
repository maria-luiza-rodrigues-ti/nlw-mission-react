import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {

  return (
    <BrowserRouter>
      <TestContext.Provider />
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;

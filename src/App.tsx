import { BrowserRouter, Route, Routes } from "react-router-dom";

import Sidebar from "./components/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar onToggle={() => {}} />
      <Routes>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

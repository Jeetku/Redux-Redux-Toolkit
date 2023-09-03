import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceCreamView from "./features/iceCream/IceCreamView";
import UserView from "./features/users/UserView";
function App() {
  return (
    <div>
      <h1 className="App">Hello Redux Toolkit</h1>
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;

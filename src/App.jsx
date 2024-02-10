import FruitList from "./components/FruitList/FruitList";
import PrimaryButton from "./components/PrimaryButton";
import Users from "./components/Users/User";

const fruits = ["apple", "banana", "orange", "mango", "pineapple"];

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      {/* <PrimaryButton />
      <PrimaryButton actionType="Delete" /> */}
      {/* <Users /> */}

      <FruitList fruits={fruits} />
    </div>
  );
};

export default App;

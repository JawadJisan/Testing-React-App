import PrimaryButton from "./components/PrimaryButton";

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <PrimaryButton />
      <PrimaryButton actionType="Delete" />
    </div>
  );
};

export default App;

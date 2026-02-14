  import James from "./component/Card";
import Navbar from "./component/navbar";
export const App = () => {
  const user = "shivam thakur";

  return (
    <>
      <h1>Hello I am {user}</h1>
      <James />
      <James />
      <Navbar/>
    </>
  );
};

export default App;

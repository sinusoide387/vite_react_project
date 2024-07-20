import Header from "./Header";
import Main from "./Main";
import "./App.css";
import Animals from "./Animals";
function App() {
  return (
    <div className="page">
      <Header />
      <Main />
      <Animals selectedAnimal="crow" />
      {/* llamo al componente y tengo que pasar el prop con la propiedad de name que quiero  */}
    </div>
  );
}

export default App;

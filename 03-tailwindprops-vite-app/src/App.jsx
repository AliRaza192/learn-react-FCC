import "./App.css";
import Card from "./components/cards/Card";

function App() {
  return (
    <div className="flex ">
      <Card
        cardNum={"Card No 1"}
        imgUrl={
          "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        Name={"Ali Raza"}
      />

      <Card
        cardNum={"Card No 2"}
        imgUrl={
          "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        Name={"Ali Raza"}
      />

      <Card
        cardNum={"Card No 3"}
        imgUrl={
          "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        Name={"Ali Raza"}
      />
    </div>
  );
}

export default App;

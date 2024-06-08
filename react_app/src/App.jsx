import Card from "./Card/Card.jsx";
import MyComponent from "./MyComponent.jsx";
import ColorPicker from "./ColorPicker.jsx";
import CarsList from "./CarsList.jsx";


function App() {
  return(
    <>
      <CarsList />
      <MyComponent />
      <ColorPicker />
      <Card 
        image="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FPitsa%20z%20vialenymy%20tomatamy%2Fdriedtomato-pieces.webp&w=980&q=75"
        name="Піца з в’яленими томатами та куркою" 
        info="В’ялені томати, Фета, Моцарела, Соус Альфредо, Шпинат, Курка"
      />
      <Card 
        image="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FbeefandCrispy%2Fnew%2Fbeefandcrispy-pieces.webp&w=980&q=75"
        name="Піца Біф енд Кріспі" 
        info="Соус Барбекю, Огірки мариновані, Моцарела, Болгарський перець, Помідори, Кріспі цибулька, Яловичина"
      />
    </>
  )
}

export default App

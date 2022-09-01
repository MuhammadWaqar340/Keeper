import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import Card from "./components/Card";
import contact from "./contact";

function App() {
  return (
    <div>
      {/* <Header />
      <Note />
      <Footer /> */}
      <Card
        name={contact[0].name}
        tel={contact[0].phone}
        email={contact[0].email}
        img={contact[0].imgURL}
      />
      <Card
        name={contact[1].name}
        tel={contact[1].phone}
        email={contact[1].email}
        img={contact[1].imgURL}
      />
    </div>
  );
}

export default App;

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
        name="Mark Zuckerberg"
        tel="+1233123443"
        email="markzuckerberg@gmail.com"
        img="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
      />
    </div>
  );
}

export default App;

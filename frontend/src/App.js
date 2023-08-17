import { Container } from "react-bootstrap";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <main className="py-3 text-center">
        <Container>
          <h1>Welcome To MERN Ecommerce</h1>
        </Container>
      </main>
    </>
  );
}

export default App;

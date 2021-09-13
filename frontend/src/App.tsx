import NavBar from "componentes/NavBar";
import DataTable from "componentes/DataTable";
import Footer from "componentes/Footer";


function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className="text-primary">Olá mundo</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;

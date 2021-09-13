import NavBar from "componentes/NavBar";
import DataTable from "componentes/DataTable";
import Footer from "componentes/Footer";
import BarChart from "componentes/BarChart";
import DonutChart from "componentes/DonutChart";


function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1 className="text-primary py-3">DashBoard de vendas </h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
        </div>


        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;

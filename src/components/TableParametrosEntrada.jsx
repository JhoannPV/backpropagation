import Table from "react-bootstrap/Table";

function TableParametrosEntrada({ entradas, salidas, patrones }) {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Entradas</th>
          <th>Salidas</th>
          <th>Patrones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{entradas}</td>
          <td>{salidas}</td>
          <td>{patrones}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableParametrosEntrada;

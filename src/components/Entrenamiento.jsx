import Form from "react-bootstrap/Form";
import { useState } from "react";

function Entrenamiento({
  fileDatasetEntren,
  parametrosEntrada,
  configRed,
  pesosUmbrales,
}) {
  const [iteraciones, setIteraciones] = useState(0);
  const [rataAprendizaje, setRataAprendizaje] = useState(0);
  const [errorMaximoPermitido, setErrorMaximoPermitido] = useState(0);

  console.log(iteraciones, rataAprendizaje, errorMaximoPermitido);
  return (
    <>
      <Form
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form.Group
          className="mb-3"
          controlId="formIteraciones"
          style={{ backgroundColor: "inherit", padding: 10 }}
        >
          <Form.Label
            style={{
              backgroundColor: "inherit",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Iteraciones
          </Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Ingrese el número de iteraciones"
            name="iteraciones"
            min={1}
            onChange={(ev) => setIteraciones(ev.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formRataAprendizaje"
          style={{ backgroundColor: "inherit", padding: 10 }}
        >
          <Form.Label
            style={{
              backgroundColor: "inherit",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Rata de Aprendizaje
          </Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Ingrese la rata de aprendizaje"
            name="iteraciones"
            onChange={(ev) => setRataAprendizaje(ev.target.value)}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formErrorMaximoPermitido"
          style={{ backgroundColor: "inherit", padding: 10 }}
        >
          <Form.Label
            style={{
              backgroundColor: "inherit",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Error Máximo Permitido
          </Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Ingrese el error máximo permitido"
            name="errorMaximoPermitido"
            min={0}
            max={0.1}
            onChange={(ev) => setErrorMaximoPermitido(ev.target.value)}
          />
        </Form.Group>
      </Form>
    </>
  );
}

export default Entrenamiento;

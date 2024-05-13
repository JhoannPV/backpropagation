import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function FormConfigRed({ entradas, setConfigRed }) {
  const [capasOcultas, setCapasOcultas] = useState([]);
  const [numeroCapas, setNumeroCapas] = useState(0);
  const [capaSalida, setCapaSalida] = useState({ neuronas: 0, funcion: "" });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const configRed = {
      capasOcultas: capasOcultas,
      numeroCapas: numeroCapas,
      capaSalida: capaSalida,
    };
    setConfigRed(configRed);
  };

  const handleChangeCapas = (ev) => {
    const value = ev.target.value;
    setNumeroCapas(value);
    setCapasOcultas(
      Array.from({ length: value }, () => ({ neuronas: 0, funcion: "" }))
    );
  };

  const handleChangeNeuronas = (index, ev) => {
    const newCapas = [...capasOcultas];
    newCapas[index].neuronas = ev.target.value;
    setCapasOcultas(newCapas);
  };

  const handleChangeFuncion = (index, ev) => {
    const newCapas = [...capasOcultas];
    newCapas[index].funcion = ev.target.value;
    setCapasOcultas(newCapas);
  };

  const handleChangeNeuronasSalida = (ev) => {
    setCapaSalida((prevState) => ({ ...prevState, neuronas: ev.target.value }));
  };

  const handleChangeFuncionSalida = (ev) => {
    setCapaSalida((prevState) => ({ ...prevState, funcion: ev.target.value }));
  };
  return (
    <Form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
      <div style={{ backgroundColor: "inherit" }}>
        <Form.Group
          className="mb-3"
          controlId="formCapasOcultas"
          style={{ backgroundColor: "inherit" }}
        >
          <Form.Label
            style={{
              backgroundColor: "inherit",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Número de Capas Ocultas
          </Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Ingrese el número de capas ocultas"
            name="capasOcultas"
            min={1}
            max={3}
            onChange={handleChangeCapas}
          />
        </Form.Group>
        {numeroCapas > 3 ? (
          <p style={{ color: "red" }}>Son máximo 3 capas ocultas</p>
        ) : null}
      </div>
      {numeroCapas <= 3
        ? capasOcultas.map((capa, index) => (
            <div
              key={index}
              style={{ backgroundColor: "white", marginTop: 45 }}
            >
              <Form.Group
                className="mb-3"
                style={{ backgroundColor: "inherit" }}
              >
                <Form.Label style={{ backgroundColor: "inherit" }}>
                  Número de Neuronas en Capa {index + 1}
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Ingrese el número de neuronas"
                  min={index + 1 === 1 ? entradas * 2 : 1}
                  onChange={(ev) => handleChangeNeuronas(index, ev)}
                />
              </Form.Group>
              <Form.Label style={{ backgroundColor: "inherit" }}>
                Función de Activación en Capa {index + 1}
              </Form.Label>
              <Form.Select
                aria-label="Función de Activación"
                value={capa.funcion}
                onChange={(ev) => handleChangeFuncion(index, ev)}
              >
                <option value="">Seleccione una función de activación</option>
                <option value="sigmoide">Sigmoide</option>
                <option value="tangenteHiperbolica">
                  Tangente Hiperbólica
                </option>
                <option value="seno">Seno</option>
              </Form.Select>
            </div>
          ))
        : null}
      <Form.Group
        className="mb-3"
        style={{ backgroundColor: "inherit", marginTop: 45 }}
      >
        <Form.Label
          style={{
            backgroundColor: "inherit",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Número de Neuronas en Capa de Salida
        </Form.Label>
        <Form.Control
          required
          type="number"
          placeholder="Ingrese el número de neuronas"
          min="1"
          onChange={handleChangeNeuronasSalida}
        />
      </Form.Group>
      <Form.Group className="mb-3" style={{ backgroundColor: "inherit" }}>
        <Form.Label
          style={{
            backgroundColor: "inherit",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Función de Activación en Capa de Salida
        </Form.Label>
        <Form.Select
          aria-label="Función de Activación"
          value={capaSalida.funcion}
          onChange={handleChangeFuncionSalida}
        >
          <option value="">Seleccione una función de activación</option>
          <option value="sigmoide">Sigmoide</option>
          <option value="tangenteHiperbolica">Tangente Hiperbólica</option>
          <option value="seno">Seno</option>
          <option value="lineal">Lineal</option>
        </Form.Select>
      </Form.Group>
      <center style={{ backgroundColor: "inherit", marginTop: 30 }}>
        <Button variant="primary" type="submit" className="submit">
          Guardar
        </Button>
      </center>
    </Form>
  );
}

export default FormConfigRed;

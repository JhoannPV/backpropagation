import ButtonUpload from "../../components/ButtonUpload";
import "./Home.css";
import { useState, useEffect } from "react";
import TableParametrosEntrada from "../../components/TableParametrosEntrada";
import FormConfigRed from "../../components/FormCofigRed";
import Entrenamiento from "../../components/Entrenamiento";

function Home() {
  const [fileDatasetEntren, setFileDatasetEntren] = useState(null);
  const [parametrosEntrada, setParametrosEntrada] = useState(null);
  const [configRed, setConfigRed] = useState(null);
  const [pesosUmbrales, setPesosUmbrales] = useState(null);
  console.log(pesosUmbrales);

  return (
    <div className="main">
      <div className="encabezado">
        <h1>Backpropagation</h1>
        <p>
          En esta aplicación se entrenará una red neuronal usando el algoritmo
          de entrenamiento Backpropagation
        </p>
      </div>
      <hr />
      <div className="cargaDatasetEntrenamiento">
        <h2>Cargar archivos</h2>
        <ButtonUpload
          setFileDatasetEntren={setFileDatasetEntren}
          setParametrosEntrada={setParametrosEntrada}
        />
        {fileDatasetEntren ? <p>{fileDatasetEntren.name}</p> : null}
      </div>
      {parametrosEntrada ? <hr /> : null}
      <div className="parametrosEntrada">
        {fileDatasetEntren && parametrosEntrada ? (
          <>
            <h2>Parametros de Entrada</h2>
            <TableParametrosEntrada
              entradas={parametrosEntrada.entradas}
              salidas={parametrosEntrada.salidas}
              patrones={parametrosEntrada.patrones}
            />
          </>
        ) : null}
      </div>
      {parametrosEntrada ? <hr /> : null}
      <div className="ConfigRed">
        {parametrosEntrada ? (
          <>
            <h2>Configuración de la Red</h2>
            <FormConfigRed
              entradas={parametrosEntrada.entradas}
              setConfigRed={setConfigRed}
            />
          </>
        ) : null}
      </div>
      {useEffect(() => {
        if (configRed && parametrosEntrada) {
          const crearMatriz = (filas, columnas) => {
            let matriz = [];
            for (let i = 0; i < filas; i++) {
              let fila = [];
              for (let j = 0; j < columnas; j++) {
                fila.push(parseFloat(Math.random() * 2 - 1).toFixed(4));
              }
              matriz.push(fila);
            }
            return matriz;
          };

          const crearVector = (neuronas) => {
            let vector = [];
            for (let i = 0; i < neuronas; i++) {
              vector.push(parseFloat(Math.random() * 2 - 1).toFixed(4));
            }
            return vector;
          };

          function crearPesosUmbrales(parametrosEntrada, configRed) {
            const entradas = parametrosEntrada.entradas;
            const capasOcultas = configRed.capasOcultas;
            const capaSalida = configRed.capaSalida;

            const pesosTemp = [];
            const umbralesTemp = [];

            let prevNeuronas = entradas;
            capasOcultas.forEach((capa) => {
              pesosTemp.push(crearMatriz(prevNeuronas, capa.neuronas));
              umbralesTemp.push(crearVector(capa.neuronas));
              prevNeuronas = capa.neuronas;
            });

            pesosTemp.push(crearMatriz(prevNeuronas, capaSalida.neuronas));
            umbralesTemp.push(crearVector(capaSalida.neuronas));

            const mapa = {
              pesos: pesosTemp,
              umbrales: umbralesTemp,
            };

            setPesosUmbrales(mapa);
          }
          crearPesosUmbrales(parametrosEntrada, configRed);
        }
      }, [configRed, parametrosEntrada])}
      {pesosUmbrales ? <hr /> : null}
      <div className="parametrosEntrenamiento">
        {pesosUmbrales ? (
          <>
            <h2>Parametros de Entrenamiento</h2>
            <Entrenamiento />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Home;

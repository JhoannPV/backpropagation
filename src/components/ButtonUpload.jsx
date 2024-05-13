import Button from "react-bootstrap/Button";
import React, { useRef } from "react";
import Papa from "papaparse";

function ButtonUpload({ setFileDatasetEntren, setParametrosEntrada }) {
  const fileDatasetEntrenamiento = useRef(null);

  function handleButtonClick() {
    // Simula un clic en el elemento de entrada de archivo
    fileDatasetEntrenamiento.current.click();
  }

  function handleFileChange(event) {
    const file = event.target.files[0];
    console.log(file);
    // Aquí puedes manejar el archivo .csv seleccionado
    setFileDatasetEntren(file);
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        console.log("Finished:", results.data);
        const columnNames = Object.keys(results.data[0]);
        let numEntradas = 0;
        let numSalidas = 0;
        for (let i = 0; i < columnNames.length; i++) {
          if (
            i > 0 &&
            columnNames[i].slice(0, -1) !== columnNames[i - 1].slice(0, -1)
          ) {
            numSalidas = columnNames.length - i;
            break;
          }
          numEntradas++;
        }
        const numPatrones = results.data.length; // Número de patrones es igual al número de filas
        const parametrosEnrada = {
          entradas: numEntradas,
          salidas: numSalidas,
          patrones: numPatrones,
        };
        setParametrosEntrada(parametrosEnrada);
      },
    });
  }
  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        accept=".csv"
        ref={fileDatasetEntrenamiento}
        onChange={handleFileChange}
      />
      <Button variant="primary" type="button" onClick={handleButtonClick}>
        Cargar Dataset
      </Button>
    </>
  );
}

export default ButtonUpload;

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const BarChart = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [chartType, setChartType] = useState("reactivos");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint = `/api/${chartType}`;
        const response = await axios.get(`http://localhost:10001${endpoint}`);

        const labels = response.data.map((item) => item.nombre);
        const values = response.data.map((item) => item.cantidad);

        setData({
          labels: labels,
          datasets: [
            {
              label: `Cantidad de ${
                chartType.charAt(0).toUpperCase() + chartType.slice(1)
              }`,
              data: values,
              backgroundColor: "rgba(75, 192, 192, 0.6)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [chartType]);

  return (
    <div>
      <h1>
        Inventario de {chartType.charAt(0).toUpperCase() + chartType.slice(1)}
      </h1>
      <label>
        <input
          type="radio"
          value="reactivos"
          checked={chartType === "reactivos"}
          onChange={() => setChartType("reactivos")}
        />
        Reactivos
      </label>
      <label>
        <input
          type="radio"
          value="utileria"
          checked={chartType === "utileria"}
          onChange={() => setChartType("utileria")}
        />
        Utilería
      </label>
      <label>
        <input
          type="radio"
          value="herramientas"
          checked={chartType === "herramientas"}
          onChange={() => setChartType("herramientas")}
        />
        Herramientas
      </label>
      <label>
        <input
          type="radio"
          value="cristaleria"
          checked={chartType === "cristaleria"}
          onChange={() => setChartType("cristaleria")}
        />
        Cristalería
      </label>

      <div style={{ width: "80%", margin: "auto" }}>
        <Bar data={data} />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {data.labels.map((label, index) => (
          <div key={index} style={{ margin: "0 10px", textAlign: "center" }}>
            <img
              src={`ruta/a/imagenes/${label}.png`}
              alt={label}
              style={{ width: "50px", height: "50px" }}
            />{" "}
            {/* Ajusta la ruta */}
            <p>{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;

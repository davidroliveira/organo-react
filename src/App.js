import { useState } from "react";
import Banner from "./components/banner";
import Formulario from "./components/formulario";
import Time from "./components/time";

function App() {
  const times = [
    { nome: "Programação", corPrimaria: "#57c278", corSecundaria: "#d9f7e9" },
    { nome: "Front-end", corPrimaria: "#82cffa", corSecundaria: "#e8f8ff" },
    { nome: "Data Science", corPrimaria: "#a6d157", corSecundaria: "#f0f8e2" },
    { nome: "Devops", corPrimaria: "#e06869", corSecundaria: "#fde7e8" },
    { nome: "Mobile", corPrimaria: "#d86ebf", corSecundaria: "#fae9f5" },
    { nome: "Inovação e Gestão", corPrimaria: "#ffba85", corSecundaria: "#fff5d9" }
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    //debugger //palavar reservada ara depuração
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map((time) => time.nome)} aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)} />

      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
    </div>
  );
}

export default App;

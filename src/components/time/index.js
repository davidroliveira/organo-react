import Colaborador from "../colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { background: props.corSecundaria };

  return (
    /*(props.colaboradores.length > 0) && <section>...*/
    props.colaboradores.length > 0 ? (
      <section className="time" style={css}>
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corPrimaria={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    ) : null
  );
};

export default Time;

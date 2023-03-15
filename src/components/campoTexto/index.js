import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderInterpolada = `${props.placeholder} interpolada`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderInterpolada}
      />
    </div>
  );
};

export default CampoTexto;

import "./listaSuspensa.css";

const ListaSuspensa = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select onChange={aoDigitado} required={props.obrigatorio} value={props.valor}>
        <option value=""></option>
        {props.itens.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;



export default function(props){
    const status = props.recuperacao >=7.5?'Aprovado':'Reprovado'
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p><strong>{props.aluno}</strong> tem nota {props.nota}</p>
            {status}
        </div>
    )
}   
import React from 'react'

export default props=>{
    return(
        <div>
              {props.Numero.length > 0 ? (
            <>
            Números Sorteados:
            <div
            style={{
                display: "flex",
                justifyContent: "space-around",
            }}
            >
            {props.Numero.map((e, index) => {
                return <div key={e}>{e}</div>;
            })}
          </div>
            </>
        ) : (
          <>Gere Numero Desejado</>
        )}
        </div>
    )
}
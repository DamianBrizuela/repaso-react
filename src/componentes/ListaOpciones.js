import React from 'react'

export const ListaOpciones = () => {

    let ingredientes = [
        "Zapallo",
        "Panceta",
        "Roast Beef",
        "Lentejas",
        "Papa",
        "Tomate",
        "Cebolla"
    ]

  return (
    <div>
        <h1>Ingredientes '<span>Guiso de Lentejas</span>'</h1>
        <ul>
            {
                ingredientes.map((ingrediente, indice) => {
                    return (
                    <li key= {indice}>
                        {ingrediente}
                    </li>
                    );
                })
            }
        </ul>
    </div>
  )
}

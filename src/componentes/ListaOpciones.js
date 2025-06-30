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
        Ingredientes '<span>Guiso de Lentejas</span>'
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

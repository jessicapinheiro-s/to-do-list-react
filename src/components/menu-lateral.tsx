import '../styles/style.css'
import React, { useState } from 'react';

function MenuLateral({ elementoRef }: any) {
    const categoriasTask = [
        "Diárias",
        "Semanais",
        "Mensais",
        "Anuais"
    ]
    return (
        <div className={'menu-lateral' + (elementoRef != null ? elementoRef : '')}>
            <nav  >
                <ul>
                    {
                        categoriasTask.map(categoria => (
                            <li key={categoria}>{categoria}</li>
                        ))
                    }
                </ul>
            </nav>
        </div>

    )
}


export default MenuLateral;



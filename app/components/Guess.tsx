import '../css/guess.css'
import React, { createElement, useEffect } from 'react';

export default function Guess(){
    
    useEffect(() => {
        // call api or anything
        initGrid();
    }, []);
    
    return (
        <div className='guess' />
    )

    function initGrid(){
        let grid = document.querySelector(".guess");

        for(let r = 0; r < 5; r++){

            //create row
            let div = document.createElement("div");
            div.classList.add("guess-row");
            div.setAttribute("data", "status: off")
 
            grid?.appendChild(div);


            for(let c = 0; c < 5; c++){
                
                //create column
                let cDiv = document.createElement("div"); 

                cDiv.classList.add("guess-row-cell");
                cDiv.appendChild(document.createElement("p")); 

                div.appendChild(cDiv); 
            }
        }
    }
}
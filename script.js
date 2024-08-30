
/* ------------Pseudocode-----------------

- create a function to create the 16x16 grid
- create a for loop to create the grids
    - condition: loop until i <= 16, i++ at end of loop
    - do: document.createElement("div") - this is a container for each row of 16 grid squares
        - create another for loop inside that does the same thing 
        - 






---------------------------------------*/







function createGrid(num){

    const container = document.createElement("div");
    container.style.display="flex";
    container.style.flexDirection="column";
    container.style.gap="3px";

    for (let i=1 ; i<=num ; i++){
        const row = document.createElement("div");
        row.style.display="flex";
        row.style.gap="3px";
            for (let j=1 ; j <=num; j++){
                const square = document.createElement("div");
                square.setAttribute("style", "width:50px; height:50px; background-color:transparent; border: solid 2px black;")
                row.appendChild(square);
            }
            container.appendChild(row);
        }

    document.body.appendChild(container);
    }


createGrid(16);
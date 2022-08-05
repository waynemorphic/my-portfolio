// adding WK logo
let brand = document.querySelector(".navbar-brand");
brand.textContent = "<wk/>";

// console.log(brand)

// tooltip for the stack name
let stackName = document.querySelector(".stack");
let toolTipElements = document.querySelectorAll("[data-tooltip-text]");
toolTipElements.forEach( function(toolTipParameter){
    toolTipParameter.addEventListener("mouseover", function (e){
        let newElement = document.createElement("p");
        newElement.classList.add("tool-tip");        

        let toolTipContent = e.currentTarget.getAttribute("data-tooltip-text");
        newElement.innerText = toolTipContent;
        document.querySelectorAll(".tool-tip").forEach(function(tooltip){
        tooltip.remove();
        });

        let newElementCoordinates = e.currentTarget.getBoundingClientRect();
        // console.log(newElementCoordinates.left)
        newElement.style.left = newElementCoordinates.left + "px";
        newElement.style.top = newElementCoordinates.top + "px";
        stackName.appendChild(newElement)

        

    })

})




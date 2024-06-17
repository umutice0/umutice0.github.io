currentId = 1;

function clickControl(id) {
    if(id == 0 && currentId != 0){
    
        document.getElementById(id).classList.remove("hidden")
        document.getElementById(currentId).classList.add("opacity-0")
        document.getElementById(currentId).classList.remove("opacity-100")
        document.getElementById(currentId).style.transform = "translateX(2000px)"
        

        document.getElementById(id+"h").classList.add("text-5xl")
        document.getElementById(id+"h").classList.add("opacity-100")
        document.getElementById(id+"h").classList.remove("opacity-30")
        document.getElementById(id+"h").classList.remove("hover:opacity-60")

        document.getElementById(currentId+"h").classList.remove("text-5xl")
        document.getElementById(currentId+"h").classList.remove("opacity-100")
        document.getElementById(currentId+"h").classList.add("opacity-30")
        document.getElementById(currentId+"h").classList.add("hover:opacity-60")
        

        setTimeout(() => {
            document.getElementById(currentId).classList.add("hidden")
            document.getElementById(currentId).style.transform = "translateX(0px)"
            
            document.getElementById(id).classList.remove("opacity-0")
            document.getElementById(id).classList.add("opacity-100")
            currentId = 0;
        }, 501);
        
    }

    if(id == 1 && currentId != 1){
        document.getElementById(id).classList.remove("hidden")
        document.getElementById(currentId).classList.add("opacity-0")
        document.getElementById(currentId).classList.remove("opacity-100")
        document.getElementById(currentId).style.transform = "translateX(2000px)"
        

        document.getElementById(id+"h").classList.add("text-5xl")
        document.getElementById(id+"h").classList.add("opacity-100")
        document.getElementById(id+"h").classList.remove("opacity-30")
        document.getElementById(id+"h").classList.remove("hover:opacity-60")

        document.getElementById(currentId+"h").classList.remove("text-5xl")
        document.getElementById(currentId+"h").classList.remove("opacity-100")
        document.getElementById(currentId+"h").classList.add("opacity-30")
        document.getElementById(currentId+"h").classList.add("hover:opacity-60")
        

        setTimeout(() => {
            document.getElementById(currentId).classList.add("hidden")
            document.getElementById(currentId).style.transform = "translateX(0px)"
            
            document.getElementById(id).classList.remove("opacity-0")
            document.getElementById(id).classList.add("opacity-100")
            currentId = 1;
        }, 501);

    }

    if(id == 2 && currentId != 2){
        document.getElementById(id).classList.remove("hidden")
        document.getElementById(currentId).classList.add("opacity-0")
        document.getElementById(currentId).classList.remove("opacity-100")
        document.getElementById(currentId).style.transform = "translateX(2000px)"
        

        
        document.getElementById(id+"h").classList.add("text-5xl")
        document.getElementById(id+"h").classList.add("opacity-100")
        document.getElementById(id+"h").classList.remove("opacity-30")
        document.getElementById(id+"h").classList.remove("hover:opacity-60")

        document.getElementById(currentId+"h").classList.remove("text-5xl")
        document.getElementById(currentId+"h").classList.remove("opacity-100")
        document.getElementById(currentId+"h").classList.add("opacity-30")
        document.getElementById(currentId+"h").classList.add("hover:opacity-60")  

        setTimeout(() => {
            document.getElementById(currentId).classList.add("hidden")
            document.getElementById(currentId).style.transform = "translateX(0px)"
            
            document.getElementById(id).classList.remove("opacity-0")
            document.getElementById(id).classList.add("opacity-100")
            currentId = 2;
        }, 501);
    }
}
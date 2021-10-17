//alert("WORKS");
let button = document.createElement("button");
button.innerHTML = "Show Youtube Thumbnails";
button.style.position = "fixed";
button.style.top= "70px";
button.style.right = "22px";
button.addEventListener("click", function(){
    //alert("clicked");
    generateThumbnails();
});

document.querySelector("body").append(button);


function generateThumbnails(){
    let links = document.querySelectorAll("a[target=_blank]");
    //alert("" + links.length);
    links.forEach(link => {
        //console.log("" + link.innerHTML);
        if(link.innerHTML.includes("youtu") && link.parentElement.children.length == 1){
            console.log("" + link.innerHTML);
            link.style.display = "block";
            link.style.width = "240px";
            link.style.height = "180px";
            link.style.backgroundSize = "contain";
            link.style.color = "#0000 !important";
            link.style.backgroundRepeat = "no-repeat";
            link.style.backgroundImage = "url(" + getThumbnail(link.innerHTML) + ")";
        }
        
    });
}


//http://img.youtube.com/vi/[video-id]/[thumbnail-number].jpg
function getThumbnail(link){
    let id = "";
    console.log("-> extract ID");
    if(link.includes(".com")){
        /*let url = new URL(link.innerHTML);
        id = url.searchParams.get("v");*/
        let split = link.split("v=");
        id = split[split.length-1];
    } else {
        let split = link.split("/");
        /*console.log(split);
        console.log(split[split.length-1]);*/
        id = split[split.length-1];
    }    
    
    return "http://img.youtube.com/vi/" + id + "/0.jpg";
}
let imageLinks = {
    1: "img1.jpeg",
    2: "img2.jpeg",
    3: "img3.jpeg",
    4: "img4.jpeg",
    5: "img5.jpeg"
};

let currentImage = 1;

function loadExercise(exercise)
{
    let exercises = {1: "menu",
                     2: "validator",
                     3: "slideshow",
                     4: "profile",
                     5: "css"};
    document.getElementById("imgDiv").style.display = "none";
    for(let i=1; i<6; i++)
    {
        if(exercise == i)
        {
            document.getElementById(exercises[i]).style.display = "block";
        }
        else{
            document.getElementById(exercises[i]).style.display = "none";
        }
    }
}

function checkPassword() {
    let form = document.getElementById('passwordForm');
    let pwd = form.elements[0].value;
    let pwd2 = form.elements[1].value;
  
    if (pwd.length<8 || pwd2.length<8)
    {
      alert("Passwords need to be at least 8 characters long");
    }
    else if (pwd == pwd2)
    {
      alert("Passwords match");
    }
    else
    {
      alert("Passwords entered do not match");
    }
}

function loadSlideshow() {
    let slideshow = document.getElementById("slideshow");
    let images = document.getElementById("imgDiv");
    slideshow.style.display = "none";
    images.style.display="block";
}

function next()
{
    imgDiv = document.getElementById("imgDiv");
    let source = imgDiv.children[0];
    if(currentImage == 5)
    {
        currentImage = 1;
    }
    else
    {
        currentImage++;
    }
    source.src = "./assets/" + imageLinks[currentImage];
}

function back()
{
    imgDiv = document.getElementById("imgDiv");
    let source = imgDiv.children[0];
    if(currentImage == 1)
    {
        currentImage = 5;
    }
    else
    {
        currentImage--;
    }
    source.src = "./assets/" + imageLinks[currentImage];
}



function callCSS()
{
    var redBorder = document.getElementById("redBorder").value;
    var greenBorder = document.getElementById("greenBorder").value;
    var blueBorder = document.getElementById("blueBorder").value;
    var width = document.getElementById("width").value;
    var paragraph = document.getElementById("text");
    paragraph.style.borderColor = "rgb(" + redBorder + "," + greenBorder + "," + blueBorder + ")" ;
    paragraph.style.borderWidth = width + "px";
    
    var redBack = document.getElementById("redBack").value;
    var greenBack = document.getElementById("greenBack").value;
    var blueBack = document.getElementById("blueBack").value;
    paragraph.style.backgroundColor = "rgb(" + redBack + "," + greenBack + "," + blueBack + ")" ;

}
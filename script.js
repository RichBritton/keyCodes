


document.addEventListener("keydown", removeWelcome);

function removeWelcome()
{
    const wTexts = document.getElementsByClassName("welcome");

    for (let i = 0; i < wTexts.length; i++)
    {
        if (i==0) wTexts[i].style.opacity = 1;
        if (i==1) wTexts[i].style.opacity = .7;
        wTexts[i].style.animation = "fadeOutWelcome .7s forwards";
    }

    document.getElementById("keyInfo").style.animation = "fadeInTitle .7s forwards";
}



document.addEventListener("keydown", displayKey);


function displayKey(k)
{
    document.getElementById("keyName").textContent = k.key;

    document.getElementById("keyCode").querySelector('.keyValue').textContent=k.code;
    document.getElementById("keyWhich").querySelector('.keyValue').textContent=k.which;
    document.getElementById("keyLocation").querySelector('.keyValue').textContent=k.location;
    
}




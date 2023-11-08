function main() {
    
    let confirm = document.getElementById('mainResult').innerHTML;

    if(confirm == "You lost") {
        alert("Restart the game");
    }

    else {
        let x;

        do {
            x = Math.floor(Math.random() *100/7.6);
        }

        while (x==0);

        let currentTT  = parseInt(document.getElementById('result').innerHTML);
        let total = currentTT + x;
        document.getElementById('result').innerHTML = total;

        if(total < 21) {
            document.getElementById('mainResult').innerHTML = "Generate another card";
        }

        else if(total == 21) {
            document.getElementById('mainResult').innerHTML = "You won";
            alert("Congratulation.. You win..!");
            document.getElementById('restart').style.display = "block";
        }

        else {
            document.getElementById('mainResult').innerHTML = "You lost";
            alert("Lost... Try again..!")
            document.getElementById('restart').style.display = "block";
        }

            var img = document.createElement("img");
            img.src = "images/" + x + ".png";
            img.height = 200;

            document.body.appendChild(img);
    }
}

function restart() {

    location.reload();

}

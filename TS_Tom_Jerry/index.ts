class Tom {
    name;
    constructor(tom_name) {
        this.name = tom_name;
        let tom_img = document.createElement("img");
        tom_img.src = "https://www.vippng.com/png/full/53-534785_tom-and-jerry-png-tom-ve-jerry-png.png";
        tom_img.onclick = this.tomOnClick();
        tom_img.style.cursor = "pointer";
        tom_img.style.width = "25%";
        tom_img.style.height="25%";
        document.body.appendChild(tom_img);
    }
    tomOnClick() {
        return () => {
            alert(this.name + " is clicked");
        }
    }
}
class Jerry {
    name;
    constructor(jerry_name) {
        this.name = jerry_name;
        let jerry_img = document.createElement("img");
        jerry_img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVTML_lZ1QaLky01ui1uTF0Omy17cwRFwQe8X_7g7TDJFczJ9a&usqp=CAU";
        jerry_img.onclick = this.jerry_onclick();
        jerry_img.style.cursor = "pointer";
        jerry_img.style.width = "15%";
        jerry_img.style.height="15%";
        document.body.appendChild(jerry_img);
    }
    jerry_onclick() {
        return () => {
            alert(this.name + " is clicked");
        }
    }
}

let createTom = () => {
    let name = prompt("Tom Name?");
    new Tom(name);
}
let createJerry = () => {
    let name = prompt("Jerry Name?");
    new Jerry(name);
}
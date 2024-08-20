const rightFlash = document.getElementById("right");
const leftFlash = document.getElementById("left");
const img = document.getElementById("img");
const circles = document.querySelectorAll('.circle');

const imgs = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTlVs0YrDe27BYQreMa5zU6czO11O0Vvm-JIMC-7fachFDiVHCqf3xO3AaGE8lFXbjdCA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlGiH5hhGiG5KUtsF4r-mLDRjLb7qKZvaP1NS_ADU4pXOMTHuMAnn_0MumMttICdVYfA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmVCT5TVy1LrFKjqsbR_XWYo4zvkP-X_55NFz8_eUt3akO5h7yDZD0fCd9IBlln5NOo8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9bRr9g9cQP5BHQ79CliaWcVAuKTHlzXIRo2KTjhVH6pdHuyXQe-q5Nhy5maVsAolMG4&usqp=CAU"
];

let imgN = 0;
circles[0].style.backgroundColor = "black";

const handleClick = (e) => {
    circles.forEach(element => {
        element.style.backgroundColor = "white";
    });
    if (e.target.id === "left") {
        imgN = (imgN - 1 + imgs.length) % imgs.length;
    } else {
        imgN = (imgN + 1) % imgs.length;
    }
    img.src = imgs[imgN];
    circles[imgN].style.backgroundColor = "black";

}

leftFlash.addEventListener("click", handleClick);
rightFlash.addEventListener("click", handleClick);
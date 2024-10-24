window.onload = function() {
    document.getElementById("output-img").innerHTML = "<img src = 'img/chef.jpg' class = 'img-fluid rounded' alt = 'logo' />";

    
    document.getElementById("helados").onchange = function (e){
        
        let n = e.target.value;
        let imagen = "<img src= 'img/h" + n + ".png' class = 'img-fluid img-thumbnail rounded' alt = 'estadio' />";
        let text = ["Fresa y vainila: Este helado es ideal para quienes buscan un equilibrio entre lo frutal y lo cremoso. La frescura de las fresas resalta en cada bocado, mientras que la vainilla envuelve tus sentidos con su aroma y sabor característico. Es un deleite que evoca días soleados y momentos de pura felicidad. ",
            "Pie de limón: ¡Descubre el refrescante sabor del Pie de Limón Helado! Este delicioso postre combina la suavidad de una base de galleta crujiente con una crema de limón suave y cremosa, que se derrite en tu boca. Cada bocado es una explosión de frescura, perfecto para esos días calurosos.",
            "Fresas del poás: Sumérgete en el sabor auténtico de nuestras Fresas del Poás, un delicioso postre que celebra la frescura y la riqueza de la tierra costarricense. Estas fresas, cultivadas en las faldas del majestuoso volcán Poás, son seleccionadas a mano para garantizar su calidad y dulzura.",
            "Arándanos con maní: Descubre la deliciosa combinación de Arándanos con Maní, un postre que une lo mejor de la naturaleza en cada bocado. Los arándanos frescos, llenos de antioxidantes y un sabor ligeramente ácido, se mezclan con la crocancia del maní, creando una experiencia de textura y sabor inigualable.",
            "Caramelo intenso: Déjate llevar por la exquisita indulgencia del Caramelo Intenso, un postre que es puro placer para los sentidos. Cada bocado es un viaje a un mundo de sabores profundos y seductores, donde el caramelo, rico y cremoso, se funde en tu boca, dejando una sensación de calidez y satisfacción. ",

        ];
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n-1];
    };
};

document.getElementById("btn-clean").onclick = function(){
    document.getElementById("output-img").innerHTML = "<img src = 'img/chef.jpg' class = 'img-fluid rounded' alt = 'logo' />";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("helados").value= "";

}

let carrito = [];
let total = 0;

/* LOADER */
window.addEventListener("load", ()=>{
    setTimeout(()=>{
        document.getElementById("loader").style.display="none";
    },1000);
});

/* NAVBAR SCROLL */
window.addEventListener("scroll", ()=>{
    document.getElementById("header")
    .classList.toggle("scrolled", window.scrollY>50);
});

/* CARRITO */
function agregarCarrito(nombre, precio){
    carrito.push({nombre, precio});
    total += precio;
    actualizar();

    const contador = document.getElementById("contador");
    contador.style.transform="scale(1.5)";
    setTimeout(()=>contador.style.transform="scale(1)",300);
}

function actualizar(){
    const lista = document.getElementById("lista-carrito");
    lista.innerHTML="";
    carrito.forEach(p=>{
        lista.innerHTML+=`<li>${p.nombre} - $${p.precio}</li>`;
    });
    document.getElementById("contador").innerText = carrito.length;
    document.getElementById("total").innerText = total;
}

function toggleCarrito(){
    document.getElementById("carrito").classList.toggle("active");
}

function enviarWhatsApp(){
    let mensaje="Pedido:%0A";
    carrito.forEach(p=>mensaje+=`- ${p.nombre}%0A`);
    mensaje+=`Total: $${total}`;
    window.open(`https://wa.me/573137789182?text=${mensaje}`);
}

function scrollProductos(){
    document.getElementById("productos").scrollIntoView({behavior:"smooth"});
}
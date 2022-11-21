const platos = ["1 Pollo a la brasa", "1/2 Pollo a la brasa", "1/4 Pollo a la brasa", "Lomo saltado", "Pollo saltado", "Bistec a lo pobre", "Mostrito", "Tallarines con Pechuga o Higado", "Porcion de arroz chaufa"];
/*
((d)=>{
    d.addEventListener("click",(e)=>{
        if(!e.target.matches(".card .contenido div button")){
            return false;
        }
        alert("klk");
    });
})(document);



((d)=>{
    const $btnMenu = document.querySelector(".menu-btn"),
          $menu = document.querySelector(".menu");

    $btnMenu.addEventListener("click",(e)=>{
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("menu-is-active");
    });

    d.addEventListener("click",(e)=>{
        if(!e.target.matches(".menu a")){
            return false;
        }
        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("menu-is-active");
    });
})(document);


((d)=>{
    const $form = d.querySelector(".contact-form"),
          $loader = d.querySelector(".contact-form-loader"),
          $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit",(e)=>{
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/nando9933@hotmail.com",
        {
            method:"post",
            body:new FormData(e.target)
        })
        .then((res)=>(res.ok? res.json(): Promise.reject(res)))
        .then(json=>{
            console.log(json);
            $loader.classList.add("none");
            location.hash = "#gracias";
            $form.reset();
        })
        .catch(err=>{
            console.log(err);
            let message = err.statusText || "Ocurrio un error al enviar, intenta nuevamente";
            $response.querySelector("h3").innerHTML = `Error ${err.status}:${message}`;
        }).finally(()=>{
            $loader.classList.add("none");
           setTimeout(() => {
            location.hash = "#close";
           }, 3000); 
        });
    });
})(document);*/
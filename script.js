import { pokemons } from "./pokemons.js";

const ota=document.getElementById("ota");
const input=document.getElementById("input");
const select=document.getElementById("select");
const sortSelect=document.getElementById("sort-select");


console.log(pokemons);


function pokimonChizish(malumotlar){
    ota.innerHTML=``;
    malumotlar.forEach(pokimon => {
        const div=document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
          <h2>${pokimon.name}</h2>
            <img src="${pokimon.img}" alt=""> <br>
            <button>${pokimon.type}</button>
            <h3> candy count ${pokimon?.candy_count||0}</h3>
            <h3>${pokimon.weight}</h3>
            <h4>${pokimon.weaknesses}</h4>
            <div id="p-id">${pokimon.id}</div>
            <div id="time">${pokimon.spawn_time}</div>
        `;
        ota.appendChild(div)
    });
}
pokimonChizish(pokemons);


input.addEventListener("input", () => {
    const qidiruv = pokemons.filter(e =>
        e.name.toLowerCase().includes(input.value.toLowerCase()));
    pokimonChizish(qidiruv);
})

select.addEventListener("change", ()=>{
    const nimadur=pokemons.filter(e=>{
        e.type.join("").includes(select.value);

    })
    pokimonChizish(nimadur);
})
select.addEventListener("change", () => {
    if(select.value=="All"){
     pokimonChizish(pokemons)
    }else{
        const turi = pokemons.filter(t => 
            t.weaknesses.toString().includes(select.value));
        pokimonChizish(turi)

    }
})
sortSelect.addEventListener("change",()=>{
    if(sortSelect.value=="A-Z"){
        const sp=pokemons.sort((a,b)=> a.name.localeCompare(b.name));
        pokimonChizish(sp);
    }else{
        const sp=pokemons.sort((a,b)=> b.name.localeCompare(a.name));
        pokimonChizish(sp);
    }


});




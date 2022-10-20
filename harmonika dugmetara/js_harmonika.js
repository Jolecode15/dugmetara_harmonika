const DUGME=[
    document.querySelectorAll('[data-r1]'),
    document.querySelectorAll('[data-r2]'),
    document.querySelectorAll('[data-r3]'),
    document.querySelectorAll('[data-r4]'),
    document.querySelectorAll('[data-r5]'),
]
const C_GRIF=[
    ["C","D#","F#","A"],
    ["C#","E","G","A#"],
    ["D","F","G#","B"]
]
const B_GRIF=[
    ["D","F","G#","B"],
    ["C#","E","G","A#"],
    ["C","D#","F#","A"]
]
const G_GRIF=[
    ["C#","E","G","A#"],
    ["D","F","G#","B"],
    ["C","D#","F#","A"]
]
function provjera_unosa_grif(grif){
   return (grif==="c" || grif==="b" || grif==="g")
}
function ispis_naziva(grif_izbor)
{
    if(grif_izbor==="c")
    {
        for(let i=0;i<5;i++){
            let indeks_grupe_tonova=i%3;
            for(let j=0;j<DUGME[i].length;j++){
                let indeks_tona_iz_grupe=j%4;
                DUGME[i][j].value=C_GRIF[indeks_grupe_tonova][indeks_tona_iz_grupe];
                DUGME[i][j].innerHTML=C_GRIF[indeks_grupe_tonova][indeks_tona_iz_grupe];
            }
        }
    }
    else if (grif_izbor==="b")
    {
        for(let i=0;i<5;i++){
            let indeks_grupe_tonova=i%3;
            for(let j=0;j<DUGME[i].length;j++){
                let indeks_tona_iz_grupe=j%4;
                DUGME[i][j].value=B_GRIF[indeks_grupe_tonova][indeks_tona_iz_grupe];
                DUGME[i][j].innerHTML=B_GRIF[indeks_grupe_tonova][indeks_tona_iz_grupe];
            }
        }
    }
    else if (grif_izbor==="g")
    {
        for(let i=0;i<5;i++){
            let indeks_grupe_tonova=i%3;
            for(let j=0;j<DUGME[i].length;j++){
                let indeks_tona_iz_grupe=j%4;
                DUGME[i][j].value=G_GRIF[indeks_grupe_tonova][indeks_tona_iz_grupe];
                DUGME[i][j].innerHTML=G_GRIF[indeks_grupe_tonova][indeks_tona_iz_grupe];
            }
        }
    }
    else console.log("GRESKA!");
}

let grif_izbor=prompt("Unesite zeljeni model harmonike:");
grif_izbor=grif_izbor.toLowerCase();
if (!provjera_unosa_grif(grif_izbor))
{
    console.log("Doslo je do greske pri unosu modela harmonike");
}

ispis_naziva(grif_izbor);
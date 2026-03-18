sorTomb=[]
oszlopTomb=[]
function createTable(){
    sor=document.getElementById("sorSzam").value
    oszlop=document.getElementById("oszlopSzam").value
    sz=""
    for (let i = 0; i < sor; i++) {
        oszlopTomb=[]
        for (let j = 0; j < oszlop; j++) {
            oszlopTomb.push(j)
            sz+=`<button style="width:50px; height:50px; background-color:lightblue;" onclick="colorButton(this.id)" id="${i}-${j}">${i+1},${j+1}</button>`
        }
        sz+=`<br>`
        sorTomb.push(i)
    }
    document.getElementById("tabla").innerHTML=sz
}

function colorButton(id){
    idTomb=id.split('-')
    i=parseInt(idTomb[0])
    j=parseInt(idTomb[1])
    if(document.getElementById(id).style.backgroundColor=="lightblue") document.getElementById(id).style.backgroundColor="purple"
    else document.getElementById(id).style.backgroundColor="lightblue"
    if(i-1>=0){
        if(document.getElementById(`${i-1}-${j}`).style.backgroundColor=="lightblue") document.getElementById(`${i-1}-${j}`).style.backgroundColor="purple"
        else document.getElementById(`${i-1}-${j}`).style.backgroundColor="lightblue"
    }
    if(j-1>=0){
        if(document.getElementById(`${i}-${j-1}`).style.backgroundColor=="lightblue") document.getElementById(`${i}-${j-1}`).style.backgroundColor="purple"
        else document.getElementById(`${i}-${j-1}`).style.backgroundColor="lightblue"
    }
    if(j+1<oszlop){
        if(document.getElementById(`${i}-${j+1}`).style.backgroundColor=="lightblue") document.getElementById(`${i}-${j+1}`).style.backgroundColor="purple"
        else document.getElementById(`${i}-${j+1}`).style.backgroundColor="lightblue"
    }
    if(i+1<sor){
        if(document.getElementById(`${i+1}-${j}`).style.backgroundColor=="lightblue") document.getElementById(`${i+1}-${j}`).style.backgroundColor="purple"
        else document.getElementById(`${i+1}-${j}`).style.backgroundColor="lightblue"
    }
}
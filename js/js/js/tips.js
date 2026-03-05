function unlockTips(){

document.getElementById("adPopup").style.display="none";

loadTips();

}

function loadTips(){

db.collection("tips").get().then(snapshot=>{

const container=document.getElementById("tipsContainer");

snapshot.forEach(doc=>{

const tip=doc.data();

container.innerHTML+=`

<div class="card">

<h3>${tip.match}</h3>

<p>Tip: ${tip.prediction}</p>

<p>Confidence: ${tip.confidence}</p>

</div>

`

})

})

}

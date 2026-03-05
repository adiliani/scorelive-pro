function login(){

const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

auth.signInWithEmailAndPassword(email,password)

.then(()=>{

window.location="admin-dashboard.html";

});

}

function addTip(){

const match=document.getElementById("match").value;
const prediction=document.getElementById("prediction").value;
const confidence=document.getElementById("confidence").value;
const league=document.getElementById("league").value;
const date=document.getElementById("date").value;

db.collection("tips").add({

match,
prediction,
confidence,
league,
date,
createdAt:new Date()

})

alert("Tip Added");

loadAdminTips();

}

function loadAdminTips(){

db.collection("tips").get().then(snapshot=>{

const container=document.getElementById("allTips");

container.innerHTML="";

snapshot.forEach(doc=>{

const tip=doc.data();

container.innerHTML+=`

<div class="card">

<p>${tip.match}</p>

<button onclick="deleteTip('${doc.id}')">Delete</button>

</div>

`

})

})

}

function deleteTip(id){

db.collection("tips").doc(id).delete();

loadAdminTips();

}

loadAdminTips();

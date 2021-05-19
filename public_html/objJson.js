$(function () {
    $("#OK").click(ment);
    $("#rendez").click(rendez);
//    $("#TOROL").click(torles);
    
//    console.log(tarsasJson);
//    var tarsasTomb = JSON.parse(tarsasJson);
//    console.log(tarsasTomb);
//    
    $.ajax({
        url: "termekek.json", 
        success: function(result){
            console.log(result);
            tarsasTomb = result;
            kiir();

            }}
      );
    
    

});
function rendez(){
    tarsasTomb.sort(function(a, b){return Number(a.nev > b.nev)-0.5;});;
    kiir();
}

function kiir() {
//    console.log(tarsasTomb);
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>Termék neve: </th><th>Ár: </th><th> Fajta: </th><th> Törlés: </th></tr>");
    console.log(tarsasTomb.length);
    for (var i = 0; i < tarsasTomb.length; i++) {
        console.log(tarsasTomb);
        $("article table").append("<tr><td>" + tarsasTomb[i].tnev  + "</td><td>" + tarsasTomb[i].ar + "</td><td>" + tarsasTomb[i].tipus + "</td><td>"+"<input type='button' id='TOROL' name='TOROL' value='TÖRÖL'>"+"</td></tr>");

//        $("article table").append("<tr></tr>");
//        for (var item in tarsasTomb[i]) {
//            $("article table tr").eq(i+1).append("<td>"+tarsasTomb[i][item]+"</td>");
//        }
//        $("article table tr").eq(i).append("<td>"+tarsasTomb[0].tnev+"</td>");
//        $("article table tr").eq(i).append("<td>"+ tarsasTomb[0].ar+"</td>");
//        $("article table tr").eq(i).append("<td>" + tarsasTomb[0].tipus + "</td>");
//        $("article table td").eq(i).append("<td>" + "<input type='button' id='TOROL' name='TOROL' value='TÖRÖL'>" + "</td>");
    }
}
function ment() {
    var ujtermek= {};
    ujtermek.tnev = $("#nev").val();
    ujtermek.ar = $("#ar").val();
    if ($("input:radio[name=tipus]:checked").val() === "t") {
        ujtermek.tipus = "Társasjáték";
    } else {
        ujtermek.tipus = "Kártyajáték";
    }
    console.log(ujtermek);
    tarsasTomb.push(ujtermek);
    console.log(tarsasTomb);
    kiir();
}

var tarsasTomb = [];
//[
//    {
//    tnev:"Monopoly",
//    ar:7000,
//    tipus:"táblajáték"
//
//    },
//    {
//    tnev:"Uno",
//    ar:500,
//    tipus:"kártyajáték"
//    }
//];
var tarsasJson = '[{"tnev":"Monopoly","ar":7000,"tipus":"társasjáték"},{"nev":"Uno","ar":500,"tipus":"kártyajáték"}]';
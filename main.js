var palestrantes = 'palestrantes';
var programacao = 'programacao';
var ingressos = "ingressos";
var parceiros = "parceiros";

var sectionPalestrantes = document.getElementsById("palestrantes");
var sectionProgramacao = document.getElementById("programacao");
var sectionIngressos = document.getElementById("ingressos");


sectionPalestrantes.innerHTML = palestrantes.anchor('palestrantes');
sectionProgramacao.innerHTML = programacao.anchor('programacao');
sectionIngressos.innerHTML = ingressos.anchor('ingressos')


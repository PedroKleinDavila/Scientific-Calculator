var ant=0;
var suc=0;
var resp=0;
var op="nenhuma";
var jaFoiIgualPri=false;
var igualClicado=false;
var comeco=true;
var passouPorOp=false;
function igual(){
    if(jaFoiIgualPri){igualSecundario();}
    else{igualPrimario();}
    igualClicado=true;
}
function igualPrimario(){
    document.getElementById("numero").innerHTML=resp;
    ant=resp;
    jaFoiIgualPri=true;
}
function igualSecundario(){
    resultado1();
    document.getElementById("numero").innerHTML=resp;
    ant=resp;
}
function resultado1(){
    suc=parseFloat(suc);
    ant=parseFloat(ant);
    switch(op){
        case "soma":
            resp=suc+ant;
            break;
        case "subtracao":
            resp=ant-suc;
            break;
        case "multiplicacao":
            resp=suc*ant;
            break;
        case "divisao":
            if(suc==0){
                resp="Erro";
                break;
            }
            resp=ant/suc;
            break;
        default:
            break;
    }
}
function numGeral(num){
    if(document.getElementById("numero").innerHTML==0||passouPorOp){
        document.getElementById("numero").innerHTML=num;
        passouPorOp=false;
    }
    else{document.getElementById("numero").innerHTML+=num;}
}
function num1(){
    var num=1;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num2(){
    var num=2;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num3(){
    var num=3;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num4(){
    var num=4;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num5(){
    var num=5;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num6(){
    var num=6;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num7(){
    var num=7;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num8(){
    var num=8;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num9(){
    var num=9;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function num0(){
    var num=0;
    numGeral(num);
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function soma(){
    op="soma";
    preparaOp();
}
function subtracao(){
    op="subtracao";
    preparaOp();
}
function multiplicacao(){
    op="multiplicacao";
    preparaOp();
}
function divisao(){
    op="divisao";
    preparaOp();
}
function preparaOp(){
    jaFoiIgualPri=false;
    if(igualClicado||comeco){
        ant=document.getElementById("numero").innerHTML;
        document.getElementById("numero").innerHTML=0;
        igualClicado=false;
        comeco=false;
    }else{
        ant=resp;
        document.getElementById("numero").innerHTML=resp;
        passouPorOp=true;
    }
}
function ponto(){
    var x=document.getElementById("numero").innerHTML;
    var tam=x.length;
    var teste=false;
    for(i=0;i<tam;i++){
        if(x.charAt(i)=='.'){teste=true;}
    }
    if((document.getElementById("numero").innerHTML>0||document.getElementById("numero").innerHTML<0)&&!teste){document.getElementById("numero").innerHTML+=".";}
    else{document.getElementById("numero").innerHTML=".";}
}
function maisoumenos(){
    if(document.getElementById("numero").innerHTML==0||passouPorOp){
        document.getElementById("numero").innerHTML=0;
        passouPorOp=false;
    }
    else{document.getElementById("numero").innerHTML=-1*parseFloat(document.getElementById("numero").innerHTML);}
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function percent(){
    if(document.getElementById("numero").innerHTML==0||passouPorOp){
        document.getElementById("numero").innerHTML=0;
        passouPorOp=false;
    }
    else{document.getElementById("numero").innerHTML=0.01*parseFloat(document.getElementById("numero").innerHTML);}
    if(op!="nenhuma"){
        suc=document.getElementById("numero").innerHTML;
        resultado1();
    }
}
function AC(){
    document.getElementById("numero").innerHTML=0;
    ant=0;
    suc=0;
    resp=0;
    op="nenhuma";
    jaFoiIgualPri=false;
    igualClicado=false;
    comeco=true;
    passouPorOp=false;
}
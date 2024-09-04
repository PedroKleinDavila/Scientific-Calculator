const visor=document.getElementById("visor");
const visorDeOp=document.getElementById("visorDeOp");
let result=0;
let operacoes="";
let teveOp=true;
let teveIgual=false;
let lastOp="";
let memory=0;
let tevePar=false;
function trocaNormal(){
    window.location.href="Ipad.html";
}
function trocaSec(){
    window.location.href="IpadSecond.html";
}
function EE(){
    let aux;
    let aux1;
    let aux2;
    if(teveIgual){
        if(ondeTemP(operacoes)==-1){
            aux2=Number(operacoes);
            aux=aux2/(10**(operacoes.length-1));
            aux1=String(aux)+"×"+"10"+"^"+String(operacoes.length-1);
            visor.value=aux1;
            teveIgual=false;
        }else{
            aux2=Number(operacoes);
            let aux3=ondeTemP(operacoes);
            aux=aux2/(10**(aux3-1));
            aux1=String(aux)+"×"+"10"+"^"+String(aux3-1);
            visor.value=aux1;
            teveIgual=false;
        }
    }
}
function ondeTemP(a){
    let aux=-1;
    for (let index = 0; index < a.length; index++) {
        if(a.charAt(index)=="."){
            aux=index;
        }
    }
    return aux;
}
function mc(){
    memory=0;
}
function mMais(){
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            memory+=Number(array[array.length-1]);
        }
    }else{
        memory+=Number(operacoes);
    }
}
function mMenos(){
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            memory-=array[array.length-1];
        }
    }else{
        memory-=operacoes;
    }
}
function getBaseLog(x,y){
    return Math.log(y)/Math.log(x);
}
function log(i){
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            array[array.length-1]=getBaseLog(i,array[array.length-1]);
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
    }else{
        operacoes=getBaseLog(i,operacoes);
        visor.value=operacoes;
    }
}
function sctRec(a,b){
    switch(b){
        case -1:
            return Math.asin(a);
        case -2:
            return Math.acos(a);
        case -3:
            return Math.atan(a);
        case -4:
            return Math.asinh(a);
        case -5:
            return Math.acosh(a);
        case -6:
            return Math.atanh(a);
        case 1:
            return Math.sin(a);
        case 2:
            return Math.cos(a);
        case 3:
            return Math.tan(a);
        case 4:
            return Math.sinh(a);
        case 5:
            return Math.cosh(a);
        case 6:
            return Math.tanh(a);
        case 7:
            return a*(Math.PI/180);
        case 8:
            return Math.random();
        case 9:
            return memory;
    }
}
function senCosTgOutros(i){
    teveOp=false;
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            array[array.length-1]=sctRec(array[array.length-1],i);
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
    }else{
        operacoes=sctRec(operacoes,i);
        visor.value=operacoes;
    }
}
function fatRecursiva(x){
    if(x<0){return "Erro";}
    if(x==0||x==1){return 1;}
    return x*fatRecursiva(x-1);
}
function fatorial(){
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            array[array.length-1]=fatRecursiva(array[array.length-1]);
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
    }else{
        operacoes=fatRecursiva(operacoes);
        visor.value=operacoes;
    }
}
function constantes(l){
    teveOp=false;
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            array[array.length-1]=l;
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
        else{
            array[array.length]=l;
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
    }else{
        operacoes=l;
        visor.value=operacoes;
    }
}
function xElevado(l){
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            array[array.length-1]=l**array[array.length-1];
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
    }else{
        operacoes=l**operacoes;
        visor.value=operacoes;
    }
}
function elevado(l){
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            array[array.length-1]=array[array.length-1]**l;
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
    }else{
        operacoes=operacoes**l;
        visor.value=operacoes;
    }
}
function multiplicaValor(l){
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            array[array.length-1]*=l;
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
    }else{
        operacoes*=l;
        visor.value=operacoes;
    }
}
function abrePar(){
    op(6);
}
function fechaPar(){
    op(7);
}
function num(i){
    if(!teveOp){
        operacoes+=i;
        visor.value+=i;
    }
    else if(!teveIgual){
        operacoes+=i;
        visor.value=i;
        teveOp=false;
    }
    else{
        visorDeOp.value="";
        teveIgual=false;
        teveOp=false;
        operacoes=i;
        visor.value=i;
    }
    
}
function num0(){
    if(!teveOp&&visor.value!=0){
        operacoes+=0;
        visor.value+=0;
    }
    else if(!teveIgual){
        operacoes=0;
        visor.value=0;
        teveOp=false;
    }
    else{
        visorDeOp.value="";
        teveIgual=false;
        teveOp=false;
        operacoes="";
        visor.value=0;
    }
    
}
function ponto(){
    if(isNaN(operacoes)){
        let array=[...operacoes];
        if(!isNaN(array[array.length-1])){
            operacoes+=".";
            visor.value+=".";
        }
    }else{
        operacoes+=".";
        visor.value+=".";
    }
}
function maisoumenos(){
    multiplicaValor(-1);
}
function percent(){
    multiplicaValor(0.01);
}
function AC(){
    visor.value="";
    visorDeOp.value="";
    result=0;
    operacoes="";
    teveOp=true;
    teveIgual=false;
    lastOp="";
    tevePar=false;
}
function numNegativos(array){
    let arrayFinal;
    if(array[0]=='-'){
        array[0]=array[0]+array[1];
        arrayAntes=array.slice(0,1);
        arrayDepois=array.slice(2);
        array=arrayAntes.concat(arrayDepois);
    }
    for(i=1;i<array.length;i++){
        if(array[i]=='-'&&isNaN(array[i-1])){
            array[i]+=array[i+1];
            arrayAntes=array.slice(0,i+1);
            arrayDepois=array.slice(i+2);
            arrayFinal=arrayAntes.concat(arrayDepois);
            return numNegativos(arrayFinal);
        }
    }
    return array;
}
function resultado(){
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=unirNum(array);
        array=numNegativos(array);
        array=resolveParenteses(array);
        return array[0];
    }
    else{return operacoes;}
}
function verificaParenteses(array){
    let bol=false;
    for(i=0;i<array.length;i++){
        if(array[i]=="("){
            bol=true;
        }
    }
    return bol;
}
function resolveParenteses(array){
    if(verificaParenteses(array))
    {
        let vetdeIni=new Array();
        let x=0;
        let vetdeFim=new Array();
        let y=0;
        let arrayPar=new Array();
        for(i=0;i<array.length;i++){
            if(array[i]=="("){
                vetdeIni[x]=i;
                x++;
            }
            if(array[i]==")"){
                vetdeFim[y]=i;
                y++;
            }
        }
        arrayPar=array.slice(vetdeIni[x-1]+1,vetdeFim[0]);
        arrayPar=recursaoOp(arrayPar);
        array=[...array.slice(0,vetdeIni[x-1]),...arrayPar,...array.slice(vetdeFim[0]+1,array.length)];
        return resolveParenteses(array);
    }else{return recursaoOp(array);}
}
function recursaoOp(array){
    let arrayFinal;
    for(i=1;i<array.length;i++){
        if(array[i]=="^"){
            array[i-1]=resolveOp(array[i-1],array[i+1],array[i]);
            arrayAntes=array.slice(0,i);
            arrayDepois=array.slice(i+2);
            arrayFinal=arrayAntes.concat(arrayDepois);
            return recursaoOp(arrayFinal);
        }
    }
    for(i=1;i<array.length;i++){
        if(array[i]=="×"||array[i]=="÷"){
            array[i-1]=resolveOp(array[i-1],array[i+1],array[i]);
            arrayAntes=array.slice(0,i);
            arrayDepois=array.slice(i+2);
            arrayFinal=arrayAntes.concat(arrayDepois);
            return recursaoOp(arrayFinal);
        }
    }
    for(i=1;i<array.length;i++){
        if(array[i]=="+"||array[i]=="-"){
            array[i-1]=resolveOp(array[i-1],array[i+1],array[i]);
            arrayAntes=array.slice(0,i);
            arrayDepois=array.slice(i+2);
            arrayFinal=arrayAntes.concat(arrayDepois);
            return recursaoOp(arrayFinal);
        }
    }
    return array;
}
function resolveOp(ant,suc,op){
    let num=0;
    ant=Number(ant);
    suc=Number(suc);
    switch(op){
        case "+":
            num=ant+suc;
            break;
        case "-":
            num=ant-suc;
            break;
        case "×":
            num=ant*suc;
            break;
        case "÷":
            num=ant/suc;
            break;  
        case "^":
            num=ant**suc;
    }
    return num;
}
function unirNum(array){
    let arrayFinal;
    for(i=1;i<array.length;i++){
        if(!isNaN(array[i-1])&&!isNaN(array[i])){
            array[i-1]=array[i-1]+""+array[i];
            arrayAntes=array.slice(0,i);
            arrayDepois=array.slice(i+1);
            arrayFinal=arrayAntes.concat(arrayDepois);
            return unirNum(arrayFinal);
        }
        if(array[i]=='.'){
            array[i-1]+=array[i]+array[i+1];
            arrayAntes=array.slice(0,i);
            arrayDepois=array.slice(i+2);
            arrayFinal=arrayAntes.concat(arrayDepois);
            return unirNum(arrayFinal);
        }
    }
    return array;
}
function op(i){
    switch(i){
        case 0:
            if(!teveOp&&!tevePar){
                if(!teveIgual){
                    if(isNaN(operacoes)){
                        let array=[...operacoes];
                        array=unirNum(array);
                        array=numNegativos(array);
                        lastOp=array[array.length-2]+array[array.length-1];
                    }
                    visorDeOp.value=operacoes;
                    result=resultado();
                    visor.value=result;
                    operacoes=result;
                    teveIgual=true;
                }
                else{
                    teveIgual=true;
                    operacoes=result+lastOp;
                    visorDeOp.value=operacoes;
                    result=resultado();
                    visor.value=result;
                    operacoes=result;
                }
            }
            break;
        case 1:
            if(!tevePar){if(!teveOp||teveIgual){
                reduzirOp();
                operacoes+="+";
                visorDeOp.value=operacoes;
                teveOp=true;
            }}
            else{if(!teveOp||teveIgual){
                operacoes+="+";
                visorDeOp.value=operacoes;
                teveOp=true;
                teveIgual=false;
            }}
            break;
        case 2:
            if(!tevePar){if(!teveOp||teveIgual){
                reduzirOp();
                operacoes+="-";
                visorDeOp.value=operacoes;
                teveOp=true;
            }}
            else{if(!teveOp||teveIgual){
                operacoes+="-";
                visorDeOp.value=operacoes;
                teveOp=true;
                teveIgual=false;
            }}
            break;
        case 3:
            if(!tevePar){if(!teveOp||teveIgual){
                reduzirOp();
                operacoes+="×";
                visorDeOp.value=operacoes;
                teveOp=true;
            }}
            else{if(!teveOp||teveIgual){
                operacoes+="×";
                visorDeOp.value=operacoes;
                teveOp=true;
                teveIgual=false;
            }}
            break;
        case 4:
            if(!tevePar){if(!teveOp||teveIgual){
                reduzirOp();
                operacoes+="÷";
                visorDeOp.value=operacoes;
                teveOp=true;
            }}
            else{if(!teveOp||teveIgual){
                operacoes+="÷";
                visorDeOp.value=operacoes;
                teveOp=true;
                teveIgual=false;
            }}
            break;  
        case 5:
            if(!tevePar){if(!teveOp||teveIgual){
                reduzirOp();
                operacoes+="^";
                visorDeOp.value=operacoes;
                teveOp=true;
            }}else{if(!teveOp||teveIgual){
                operacoes+="^";
                visorDeOp.value=operacoes;
                teveOp=true;
                teveIgual=false;
            }}
            break;
        case 6:
            tevePar=true;
            teveIgual=false;
            operacoes+="(";
            visorDeOp.value=operacoes;
            break;
        case 7:
            tevePar=false;
            operacoes+=")";
            visorDeOp.value=operacoes;
            break;
        case 8:
            if(!tevePar){if(!teveOp||teveIgual){
                tevePar=true;
                reduzirOp();
                operacoes+="^(1÷";
                visorDeOp.value=operacoes;
                teveOp=true;
            }}else{if(!teveOp||teveIgual){
                operacoes+="^(1÷";
                visorDeOp.value=operacoes;
                teveOp=true;
                teveIgual=false;
            }}
            break;
    }
}
function reduzirOp(){
    teveIgual=false;
    result=resultado();
    visor.value=result;
}
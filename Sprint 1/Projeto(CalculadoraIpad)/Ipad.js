const visor=document.getElementById("visor");
const visorDeOp=document.getElementById("visorDeOp");
let result=0;
let operacoes="";
let teveOp=true;
let teveIgual=false;
let lastOp="";
let memory=0;
let tevePar=false;
//altera para funções básicas
function trocaNormal(){
    window.location.href="Ipad.html";
}
//altera para funções secundárias
function trocaSec(){
    window.location.href="IpadSecond.html";
}
//apresenta o número em notação científica
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
//verifica se a função tem pontos para a função EE() e a função ponto()
function ondeTemP(a){
    let aux=-1;
    for (let index = 0; index < a.length; index++) {
        if(a.charAt(index)=="."){
            aux=index;
        }
    }
    return aux;
}
//zera a memória
function mc(){
    memory=0;
}
//soma o número do visor na memória
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
//reduz o número do visor na memória
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
//faz as funções logarítmicas log(base i) do numero no visor;
function log(i){
    let aux="";
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])){
            array[array.length-1]=Math.log(array[array.length-1])/Math.log(i);
            for(i=0;i<array.length;i++){
                aux+=array[i];
            }
            operacoes=aux;
            visor.value=array[array.length-1];
        }
    }else{
        operacoes=Math.log(operacoes)/Math.log(i);
        visor.value=operacoes;
    }
}
//retorna funções trigonométricas, rad, número aleatório e número da memória
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
//mostra o resultado da função de sctRec()
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
//função fatorial recursiva
function fatRecursiva(x){
    if(x<0){return "Erro";}
    if(x==0||x==1){return 1;}
    return x*fatRecursiva(x-1);
}
//retorna fatorial de numero
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
//retorna constantes Pi e Euler
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
//resolve l^x
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
//resolve x^l
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
//resolve funções maisoumenos() e percent()
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
//aplica a função dos números na calculadora
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
//coloca um ponto no fim do numero do visor
function ponto(){
    if(isNaN(operacoes)){
        let array=[...operacoes];
        array=numNegativos(unirNum(array));
        if(!isNaN(array[array.length-1])&&ondeTemP(array[array.length-1])==-1){
            operacoes+=".";
            visor.value+=".";
        }
    }else{
        if(operacoes!=""&&ondeTemP(operacoes)==-1)
        {operacoes+=".";
        visor.value+=".";}
    }
}
//multiplica o numero do visor por -1
function maisoumenos(){
    multiplicaValor(-1);
}
//multiplica o numero do visor por 0.01
function percent(){
    multiplicaValor(0.01);
}
//reseta todas as informações do código
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
//une os numeros positivos com o sinal de negativo no vetor das operações
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
//retorna o resultado de operações
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
//verifica se algum parenteses é iniciado
function verificaParenteses(array){
    let bol=false;
    for(i=0;i<array.length;i++){
        if(array[i]=="("){
            bol=true;
        }
    }
    return bol;
}
//resolve as funções dentro do parenteses, se n tiver resolve o resto da operação
function resolveParenteses(array){
    if(verificaParenteses(array))
    {   
        let vetdeFim=new Array();
        let y=0;
        let j;
        let arrayPar=new Array();
        for(j=0;j<array.length;j++){
            if(array[j]==")"){
                vetdeFim[y]=j;
                y++;
            }
        }
        let aux;
        let i=vetdeFim[0];
        while(array[i]!="("){
            i--;
            aux=i;
        }
        arrayPar=array.slice(aux+1,vetdeFim[0]);
        arrayPar=recursaoOp(arrayPar);
        array=[...array.slice(0,aux),...arrayPar,...array.slice(vetdeFim[0]+1,array.length)];

        return resolveParenteses(array);
    }else{return recursaoOp(array);}
}
//resolve todas as operações em ordem de prioridade
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
//retorna a resolução de cada operação
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
            if(suc==0){num="Erro";}
            else{num=ant/suc;}
            break;  
        case "^":
            num=ant**suc;
    }
    return num;
}
//une os números depois de iterar a String operacoes
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
//um switch para adição de operações ao visorDeOp e para a resolução delas
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
//método para reduzir o numero de linhas em op()
function reduzirOp(){
    teveIgual=false;
    result=resultado();
    visor.value=result;
}
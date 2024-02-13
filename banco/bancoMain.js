//(verificar saldo, depositar, sacar, proibir compra caso saldo for negativo, etc...)

var saldo = 30

function verificarSaldo(){
    return `O seu saldo é de ${saldo.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`;
}

//console.log(verificarSaldo())





var valor = 0

function depositar(valor){
   
    if(valor>0){
    saldo+= valor
    return `O seu novo saldo é de ${saldo.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`; 
} if(valor<=0){
    return `É impossivel depositar um valor negativo ou igual a zero, a tentativa  de deposito foi com o valor ${valor}`
}
}
//console.log(depositar(30))




function sacar(valor){
   
    if(saldo>valor){
   saldo -= valor
   return `O seu novo saldo é de ${saldo.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})}`;
} if (saldo<valor){
    return `Não foi possivel realizar essa operação pois o valor:${valor.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} é maior do que o seu saldo:${saldo.toLocaleString('pt-BR',{style:'currency', currency:'BRL'})} `
}
}

//console.log(sacar(40))

/*
do{
       
   var continuar = prompt("Deseja continuar? (digite apenas Y ou N)")
    
   if(continuar==Y){
    continuar==true
   } if(continuar==N) {
    continuar==false
   } else {
    return "Erro";
   }

} while(continuar=false)
*/


 var escolha = 2

 switch (escolha){

    case 0:
        //sair
        break;

    case 1:
        //verif saldo
        console.log(verificarSaldo())
        break;
    
    case 2:
        //depositar
        console.log(depositar(-30))
        break;

    case 3: 
        //sacar
        console.log(sacar(40))
        break;          
 }




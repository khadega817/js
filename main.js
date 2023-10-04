
function find( a , b  , c , d , e , f ,  g , h , i , j){
return (( a + b + c + d + e + f + g + h + i + j ) / 10);
}
console.log( find(2,4,6,8,10,12,14,16,18.20,20));


function Calc(a , b){
    return (( 0.5 * a) * b)
}
console.log(Calc(10,3 ));



function Age (age){
return (age*365)
}
console.log(Age (19));


function find( a,b ){
return ( a + b);
}
console.log( find( 20 , 20 ));


function Name(){
 document.getElementById("h1_h1").innerHTML="Khadega Ibrahim Mohamed"
}
console.log(Name());


function Names() {
   var Names =[ "Khadega", "Ibrahim", "Mohameh", "Manar", "Mariam", "Salah", "Mona", "Fatma", "Sohila", "Rahaf" ]
    console.log("Khadega");
}
console.log(Names());


function Hours(hours){
return (hours * 3600)
}
console.log(Hours(1)) ;


function find( a , b , c , d ){
    if((a+b+c+d)>350){
        document.getElementById("h1_h1").innerHTML="true"
    }else{
        document.getElementById("h1").innerHTML="false"
    }
}
console.log(find( 30 , 30 , 30 , 30 ));


function find(a){
    if(a=0){
        return (true);
    }else{
        return (false);
    }
}
console.log(find(3));


function find( a , b ){
return ( a % b);
}
console.log(find( 20 , 9 ));



function find(a , b){

    if(a<b){
        return b;
    }else{
       return a; 
    }
    if ( a = b ){
        return ("Equals");
    }else{
       return ("Not Equals");
    }
} 
console.log(find(50 , 90));



var x=4;
function varibale (x){
if (typeof x=="number"){
console.log("is a number");
}else{
    console.log("is  a not number"); 
}
}
varibale (4);



function date(){
    return date= new Date();
}
console.log(date());
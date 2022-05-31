//Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.

function sum (x,y){
    

        if (typeof x !== "number" && typeof y !== "number") {
            return "Erreur : veuillez entrer deux nombres!";
        }
    
        return x + y;
    


}

function increment(x){
    return x+1;  // ++x 


}

function getsurface (base,hauteur){
    return base*hauteur/2


}
//Écrivez un programme JavaScript pour inverser une chaîne de caractères.
function reversestring(str){
    var splitString=str.split(""); //var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    var reverseArray=splitString.reverse(); //Var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    var joinArray=reverseArray.join("");


    return joinArray;
}//function strReverse(str) return str.split("").reverse().join("");
  


reversestring("TUNISIA");
//Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.

function getmax(a,b,c){
    if(a>b){
        max=a;
    }
    else {
        max=b;
    }

    if(c>max){
        max=c
    }
   
return max;
}


//Créez une fonction qui prend un tableau et renvoie le premier élément.
// Notez que le premier élément d’un tableau commence toujours par l’index 0.

function getfirst(tab){
    return tab[0];

}

//Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. 
//Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division. 
//Deux nombres sont transmis comme paramètres. 
//Le premier paramètre divisé par le deuxième paramètre.
function restdiv(a,b){
    return a%b;

}

function carré(x){
    return x*x;
}
//Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. 
//Sinon, retournez FALSE.
function sum(a,b){
    var x=a+b;
    if(x<100){
        return true;
    }
    else {
        return false;
    }
}
function check(a, b) {
  
    return a + b < 100;
}

function hts(h,s){
    return h*3600;
}
//Créez une fonction qui prend un nombre et renvoie TRUE 
//s’il est inférieur ou égal à zéro, sinon retournez FALSE.
function inf(x){
    if(x<=0){
        return true;
    }
    else{
        return false;
    }
}
function checkNbr(n) {
    return n <= 0;
  }
//Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.

function truefalse(a,b){
    if(a=b){
        return true;
    }
        else{
            return false;
        }
    }

    function isEqual(a,b){
        return a===b;
    }

    //Créez une fonction qui vérifier l’égalité de deux paramètres a et b.
    // La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. 
    //La fonction doit renvoyer TRUE si les paramètres sont égaux 
    //et FALSE s’ils sont différents.

    function isEqual(a,b){
        return a===b;

    }
    //Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.

    function isEmpty(str){
        return str.lenght==0;
    }
//Avec deux chaînes, str1 et str2, renvoyez une seule chaîne au format « str1 | str2 ».



    function concatStr(str1,str2){
        return str1.concat(str2);
    }

    function concatStr(str1, str2) {
        return `${str1} | ${str2}`;
      }
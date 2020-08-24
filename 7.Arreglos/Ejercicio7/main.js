var geekGirl=[
    {
        name:"Maria",
        years:29,
        profession:"Diseñadora"
    },
    {
        name:"Lucia",
        years:31,
        profession:"Ingeniera Quimica"
    },
    {
        name:"Susana",
        years:34,
        profession:"Periodista"
    },
    {
        name:"Rocio",
        years:25,
        profession:"Actriz"
    },
    {
        name:"Inmaculada",
        years:21,
        profession:"Diseñadora"
    }
];
var promedio;
var sumaEdad=0;
var adultAge=0;
var youngAge=0;
var countDesig=0;

function countGeekGirls(){
    var numeroGeekGirls=geekGirl.length;
    console.log("El numero de estudiantes es: "+numeroGeekGirls);
}

function averageAge(){

       for (let i = 0; i < geekGirl.length; i++) {
            sumaEdad = sumaEdad + geekGirl[i].years;
           
       } 
       promedio=sumaEdad/geekGirl.length;
       console.log("El promedio de edad es de: "+promedio+" Años.");
}

function theYoungest(){

    for (let i = 0; i < geekGirl.length; i++) {
        
        if(adultAge < geekGirl[i].years){
            adultAge=geekGirl[i].years;
        }else{
            youngAge=geekGirl[i].years;
        }
        
    }
    console.log(`La edad Mayor es:${adultAge}, y la edad menor es de:${youngAge} años`);

}

function countDesigners(){

    for (let i = 0; i < geekGirl.length; i++) {
        
        if(geekGirl[i].profession =="Diseñadora"){
            countDesig=countDesig+1;
        }
        
    }
    console.log("La cantidad de Diseñadoras es de: "+countDesig);
}



countGeekGirls();
averageAge();
theYoungest();
countDesigners();
 let greetings: string = 'hello world'

 console.log(greetings);
 


 function myHero(name:string = 'hello' , greetings?:string):string{

    return name +greetings
}

console.log(myHero(greetings));

 export{}
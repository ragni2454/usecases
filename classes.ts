class Dog
{
    name: String;
 constructor(name:String)
 {
     this.name=name;
 }  

 walk(distance: number)
 {
     console.log(" my dog  "  + this.name+" can walk "+ distance +"km");
 }
}

let d=new Dog("Bittu");
d.walk(3);


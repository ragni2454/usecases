export class sqrt
{
x: number;
//y:number;
constructor(x:number,public y:number=4)
{
    this.x=x;
}

squarert()
{
    return Math.sqrt(this.x*this.x+this.y*this.y);
//console.log("hello");
}
 

}
var sqr= new sqrt(10,7);
var a=sqr.squarert();
console.log(a);

//inheritance
class supersqr extends sqrt
{
    constructor(x:number, y:number,public z:number=4)
    {
 super(x,y);
    }
    sq()
    {
var d=super.squarert();
return Math.sqrt(d*d+this.z*this.z);
    }
    
}
let pn=new supersqr(10,3);
var b=pn.sq();
console.log(b);


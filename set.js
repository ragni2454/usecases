window.onload=() =>
{
    let set= new Set([1,2,3,3,3,3,1,6,2,1]);

    for(const ele of set)
    {
        console.log(ele);
    }

    let s = new Set();
     
    let r={l:'r'};
    let ram={name:"ram"};
    let abc={name :"abc"};
    s.add(r);
    s.add(ram);
    s.add(abc);
    console.log(s.size);
    console.log(s.delete(r));
    console.log(s.has(r));
}
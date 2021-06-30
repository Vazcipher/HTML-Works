class parent{
    m1(){
        console.log("Inside parent");
    }
}

class Chiled extends parent{
    m2(){
        console.log("inside chieled");
    }
}

class SubChiled extends Chiled{
    m3(){
        console.log("Inside subchiled");
    }
}

var sub=new SubChiled();
sub.m3();
sub.m2();
sub.m1();


//
var Child=new Chiled();
Child.m2();
// Child.m3(); 


var parent1=new parent();
// parent.m3()
parent.m1()
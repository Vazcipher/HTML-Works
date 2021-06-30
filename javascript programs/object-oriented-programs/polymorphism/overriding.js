//same method name

class rectangle{
    area(...args){
        console.log(args[0],args[1]);
    }
}

class Shape extends rectangle{
    area(...args){
        console.log(args[2]*args[2]);
        super.area(args[0],args[1])
    }
}

var shape=new Shape();
shape.area(10,20,30)
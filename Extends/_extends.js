/**
 * #1
 */ 
// Base Class
function Animal (name) {
    this.name = name || 'Animal';
    this.sleep = function(){
      console.log(this.name + '正在睡觉！');
    }
  }
// 原型方法
Animal.prototype.eat = function(food) {
console.log(this.name + '正在吃：' + food);
};

function Cat(){ 
    this.color = "black";
}
Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

//　Test Code
var cat = new Cat();
console.log(cat.name);
console.log(cat.eat('fish'));
console.log(cat.sleep());
console.log(cat instanceof Animal); //true 
console.log(cat instanceof Cat); //true

//==============case 2==================
function Cat(name){
    Animal.call(this);
    (function(){
        // 创建一个没有实例方法的类
        Super = function (){};
        Super.prototype = Animal.prototype;
        Cat.prototype = new Super();
        Cat.prototype.constructor = Cat;
    })();
    this.name = name || 'Tom';
  }
  
  // Test Code
  var cat = new Cat();
  console.log(cat.name); 
  console.log(cat.sleep());
  console.log(cat instanceof Animal); // false
  console.log(cat instanceof Cat); //false
  console.log(Cat.prototype); // Super {constructor: ƒ}
/**
 *  结论：构造其中使用prototype 是无效的
 * */   

 //========case 3========

 function Cat(name){
    Animal.call(this);
    this.name = name || 'Tom';
  }
  (function(){
    // 创建一个没有实例方法的类
    var Super = function(){};
    Super.prototype = Animal.prototype;
    //将实例作为子类的原型
    Cat.prototype = new Super();
    Cat.prototype.constructor = Cat;
  })();
  
  // Test Code
  var cat = new Cat();
  console.log(cat.name);
  console.log(cat.sleep());
  console.log(cat instanceof Animal); // true
  console.log(cat instanceof Cat); //true

//============case 4============
/**
 *  对象继承
 * */   
  var _super = function(Source, Target){
	Target.call(this);
	var Super = function(){};
	Super.prototype = Target.prototype;
	Source.prototype = new Super();
	Source.prototype.constructor = Source;
}
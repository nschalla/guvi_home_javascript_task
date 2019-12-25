    //warm programs

   //1.even or not

var num=prompt("enter the number:")
var a=isEven(num)
document.write(a)
function isEven(num)
{
 if(num%2==0)
 {
 return "even"
 }
 else{
 return "odd"
 }

}





//2.both areodd
var num=prompt("enter the number1:")
var snum=prompt("enter the number2:")

var a=arebothodd(num,snum)
document.write(a)
function arebothodd(num,snum)
{
 if(num%2!=0 && snum%2!=0)
 {
 return "true"
 }
 else{
 return "false"
 }

}


//3.getname
var num=prompt("enter the number1:")
var snum=prompt("enter the number2:")

var a=getname(num,snum)
document.write(a)
function getname(num,snum)
{
 return num+snum

}
//4.get length
var num=prompt("enter the word:")
var a=getlength(num)
document.write(a)
function getlength(num)
{
 return num.length
 }
 
 
 
 //5.issame length
 var num=prompt("enter the word1:")
var snum=prompt("enter the word2:")

var a=samelength(num,snum)
document.write(a)
function samelength(num,snum)
{
 if(num.length===snum.length)
 {
 	return true;
    }
    else
    {
    return false;
    }

}
//6.get nth element
var a=getNthEle([2,3,4],2)
document.write(a)
function getNthEle(num,snum)
{
 	return num[snum];
}



//7.get last element
var a=getLastEle([2,3,5])
document.write(a)
function getLastEle(num)
{
 	return num[num.length-1];
}



//8.getproperty
var a=getproperty()
document.write(a)
function getproperty(num)
{
 	return typeof(num);
}

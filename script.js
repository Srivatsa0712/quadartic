	
function showData() 
{
var a=document.formone.a.value;
var b=document.formone.b.value;
var c=document.formone.c.value;


var aa = new Number(a);
var bb = new Number(b);
var cc = new Number(c);

var root1=new Number;
var root2=new Number;
var discr;
discr=Math.pow(bb,2)-4*aa*cc;
document.write("<h3>A="+aa+" ,B="+bb+" ,C="+cc+", Discriminant="+discr);

if (discr>0)
{
root1=(-b+discr)/(2*aa);
root2=(-b-discr)/(2*aa);
document.write("<p>Roots of Quadratic Equation:</p>");
document.write("<br>Root1="+root1+"<br>Root2="+root2+"</h3>");
document.write("<hr>");
}
else
{

alert("Discriminant is less than zero. Complex, Conjugate roots");
}
}

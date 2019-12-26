a=prompt("enter the length of array")
n=[]
for(k=0;k<a;k++)
{
n.push(prompt("enter the value in to array"))
}
count = 0;
for(j = 0; j<n.length; j++){

for(i = 1; i<=n[j];i++){
if(n[j]%i == 0 && n[j]>1){
count +=1;
}
}
if(count == 2){
alert(n[j]+" is Prime");
count = 0;
}
else{
if(n[j]== 1)
{
alert(n[j]+" is Prime");
}
else{
alert(n[j]+" is not Prime");
}
count = 0;
}
}
module.exports = function getZerosCount(number) {
  // your implementation
  
  var a5=0;
  var i=5;
  for(i; i<number+1; i=i+5)
  {var n=i;
	if(n%5==0)
	{
		while(0<i)
		{
			if(n%5==0){
			n=n/5;
			a5++;}
			else
			break;
		}
	}
  }
  return a5;
}
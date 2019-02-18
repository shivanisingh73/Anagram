function anagram(string1,string2){

    var string1length =string1.length;
    var string2length= string2.length;
    
    var stringArray1 = [];
    var stringArray2 = [];
    
     
    for(var i=0; i<string1length; i++){
    stringArray1[i] =string1.charAt(i);
    stringArray2[i] =string2.charAt(i);
    }
    console.log(stringArray1);

    console.log(stringArray2);

    var tmp1;
    for(var i=0; i<string1length; i++)
    {
        for(var j=i+1; j< string1length; j++)
        {
            if(stringArray1[i] > stringArray1[j])
            {
                tmp1=stringArray1[i];
                stringArray1[i] =stringArray1[j];
                stringArray1[j]=tmp1;   
    
            }
        }
    }
    console.log(stringArray1);

    var tmp2;
    for(var i=0; i<string2length; i++)
    {
        for(var j=i+1; j<string2length; j++)
        {
            if(stringArray2[i]>stringArray2[j])
            {
                tmp2=stringArray2[i];
                stringArray2[i] =stringArray2[j];
                stringArray2[j]=tmp2;   
            }
        }
    }

    console.log(stringArray2);
    

for(var k=0; k<string1length;k++){
    if(stringArray1[k] == stringArray2[k]){
        console.log(true);
    }else{
        console.log(false);
    }
    }
}

    anagram("abc","cba");

function anagram(string1,string2){

    var string1length =string1.length;
    var string2length= string2.length;
    
    var stringArray1 = [];
    var stringArray2 = [];
    
    
    for(var i=0; i<string1length; i++){
    stringArray1[i] =string1.charAt(i);
    }
    
    for(var i=0; i<string2length; i++){
    stringArray2[i] =string2.charAt(i);
    }
    
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
    
    for(var i=0; i<string1length; i++){
            var text1 ="";
            text1 += stringArray1[i];
        }
    
    for(var i=0; i<string2length; i++){
        var text2 ="";
            text2 += stringArray2[i];
        }
    
    if(text1 == text2){
        console.log(true);
    }else{
        console.log(false);
    }
    }
    anagram("abc ","cba");
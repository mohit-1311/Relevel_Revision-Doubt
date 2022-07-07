var a = [];
a.unshift(1);
a.unshift(22);
a.shift();
a.unshift(3, [4, 5]);
console.log(a);
a.shift();
a.shift();
a.shift();
console.log(a);

// a[ [4,5], 3, 1]



getMoreAndLess(arr,n, x){
        //code here
        var smaller = 0;
        var larger = 0;
        
        var result = []
        
        for(let i=0; i<n; i++){
            if(arr[i] <= x) smaller++;
            if(arr[i] >= x) larger++;
        }
        
        result.push(smaller);
        result.push(larger);
        return result;
    }



findIndex(a,n,key){
       //code here
       let result = [];
       
       for(let i=0; i<n; i++){
           if(a[i] === key) result.push(i);
           // result = [5, 5]
       }
       
       if(result.length > 2)
        result = [result[0], result[result.length-1]];
    
       if(result.length === 1)
        result = [result[0], result[0]];
        
       if(result.length === 0)
        result = [-1, -1];
        
        return result;
    }

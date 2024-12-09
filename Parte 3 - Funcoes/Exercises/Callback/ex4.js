console.clear()

// Usando forEaCH
function processarArray(nums, callback){
    nums.forEach(callback);
}

processarArray([1, 2, 3, 4], function(num) {
    console.log(num * 2);
})
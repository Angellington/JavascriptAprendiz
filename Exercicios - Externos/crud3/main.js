function save(){
    var read = document.querySelector("#inputBookIsComplete");
    if (read.checked == true){
        bookList = JSON.parse(localStorage.getItem('listItem3')) ?? []
    } // Se a caixinha estiver ligada, recupera a lista do LocalStorage

    var id
    bookList.length != 0 ? bookList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('inputBookId').value){
        bookList.forEach(value => {
            if(document.getElementById('inputBookId').value == value.id){
                value.title         = document.getElementById('inputBookTitle').value, 
                value.author        = document.getElementById('inputBookAuthor').value, 
                value.year          = document.getElementById('inputBookYear').value, 
                value.isComplete    = 1
            }
        });
        document.getElementById('id').value = ''
    } else{
        var item = {
            id          : id + 1, 
            title       : document.getElementById('inputBookTitle').value, 
            author      : document.getElementById('inputBookAuthor').value, 
            year        : document.getElementById('inputBookYear').value, 
            isComplete  : 1,
        }
        bookList.push(item)
    }
    localStorage.setItem('listItem3', JSON.stringify(bookList))

    bookList2 = JSON.parse(localStorage.getItem('listItem4')) ?? []

    var id
    bookList2.length != 0 ? bookList.findLast((item) => id = item.id) : id = 0
    if(document.getElementById('inputBookId').value){
        bookList2.forEach(value => {
            if(document.getElementById('inputBookId').value == value.id){
                value.title         = document.getElementById('inputBookTitle').value, 
                value.author        = document.getElementById('inputBookAuthor').value, 
                value.year          = document.getElementById('inputBookYear').value, 
                value.isComplete    = 0
            }
        });
        document.getElementById('inputBookId').value = ''
    } else {
        var item = {
            id          : id + 1, 
            title       : document.getElementById('inputBookTitle').value, 
            author      : document.getElementById('inputBookAuthor').value, 
            year        : document.getElementById('inputBookYear').value, 
            isComplete  : 0,
        }
        bookList.push(item)
    }
    localStorage.setItem('listItem4', JSON.stringify(bookList2))
}


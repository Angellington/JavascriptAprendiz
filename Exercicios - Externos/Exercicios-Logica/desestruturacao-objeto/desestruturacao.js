console.clear()

const book = {
    title: '1984',
    author: 'George Orwell',
    year: 1949
};

function getBookInfo({title, author, year}){
    let array = [title, author, year]
    return array
}

getBookInfo(book);

let BookInfo = getBookInfo(book)
console.log(BookInfo[1])
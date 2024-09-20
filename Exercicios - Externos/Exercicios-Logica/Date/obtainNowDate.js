console.clear()
// Obter a data atual: DD/MM/YYYY HH:MM:SS
const data = new Date();

const ano = data.getFullYear();
const mes = String(data.getMonth() + 1).padStart(2, '0');
const day = String(data.getDate()).padStart(2, '0');

const hour = String(data.getHours()).padStart(2, '0');
const minute = String(data.getMinutes()).padStart(2, '0');
const second = String(data.getSeconds()).padStart(2, '0');

const now_date = `${day}/${mes}/${ano} ${hour}:${minute}:${second}`

console.log(now_date) // Output: 20/09/2024 14:28:54


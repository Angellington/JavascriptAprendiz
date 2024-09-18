console.clear()

// Verify Items on Shop

const itens = [
    'Microfone Profissional', 
    'Mesa Digitalizadora', 
    'Tablet', 
    'Album Howl',
    'Album Caracol', 
    'Minecraft', 
    'Minecraft Bedrock Edition', 
    'The Promissed Neverland v1', 
    'The Promissed Neverland v2', 
    'Slime Rancher 2'
]

//                             (true)            (false)           (false)   (true)
const shop_verify = (itens.length > 10 || itens.length == 0) ? 'Carrinho vazio' : 'Carrinho cheio'

console.log(shop_verify)
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globalThis.json'

async function visualizarInformacoesGlobais(params) {
    const res = await fetch(url)
    const dados = await res.json()
    console.log();
}

visualizarInformacoesGlobais()


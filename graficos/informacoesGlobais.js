const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globalThis.json'

async function visualizarInformacoesGlobais(params) {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createElement('p')
    paragrafo.classlist.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estão conectadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)

    const container = document.getElementById
}

visualizarInformacoesGlobais()


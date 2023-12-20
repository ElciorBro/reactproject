async function enviarScript(scriptText){

    const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    
    if(!textarea) throw new Error("Não há uma conversa aberta")
    
    for(const line of lines){
        console.log(line)
    
        textarea.focus();
        document.execCommand('insertText', false, line);
        textarea.dispatchEvent(new Event('change', {bubbles: true}));
    
        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);
        
        if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
    }
    
    return lines.length;
}

enviarScript(`
Wu blanachi leh ji
Fuhpapu seh lamani
Underwear
Lakareh lireywi gih leh bya
Ma kaleh
Underwear
Lah pahkreh lehgua li de lakeh
Lah peileh
Underwear
Lah cheh pee libeda ee legwa
Lah gwa reh
Le sho lee leh du
La keh rey dee zu
Le aho dee zu le ga soh reh nala
Underwear
Lah du, leh ah mo de underwear
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
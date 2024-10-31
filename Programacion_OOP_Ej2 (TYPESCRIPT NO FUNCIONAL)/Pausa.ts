import promptSync from 'prompt-sync';
const scc = promptSync();

export function pausa(): void{
    console.log("Presione una tecla para continuar...");
    scc('');
}


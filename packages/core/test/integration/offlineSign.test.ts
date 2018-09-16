//import { createPrepareTransfers } from "../../core/src";
//import { expect } from 'chai';
// import 'ts-node';
// import 'mocha';
import test from 'ava'
// describe("C'est mon premier test", () => {
//  test("Test de la fonction createPrepareTransfers", () => {
//    console.log("test avant execution");
//    createPrepareTransfers(null);
//    console.log("test exécuté");
//
//   //expect(createPrepareTransfers(null).toEqual(null));
//  });
// });
//
const result = true
console.log('test offlineSign avant execution')
test('offlineSign', t => {
    t.deepEqual(true, result, 'OK')
})

console.log('test offlineSign exécuté')

//Objectif : pouvoir créer un message (ou qrcode) offline depuis un paperwallet
// - ncessite la seed et une adresse et un message (convenu avec un tiers qui veut une preuve)
//Ce message devra ensuite être testé online avec l'adresse et le message
// - comme c'est le cas avec bitcoin (wallets electrum et signatures ECDSA) : le hashMessage
// sera une preuve cryptographique qu'il a été signé avec la seed...
// Mais comment coder cela ?

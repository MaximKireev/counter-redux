export const inc = () => ({type: 'INC'});
export const dec = () => ({type: 'DEC'})
export const rnd = () => {
    let randomValue = Math.floor(Math.random()*10);
return {type: 'RND', payload: randomValue}}
export const cln = () => ({type: 'CLN'})
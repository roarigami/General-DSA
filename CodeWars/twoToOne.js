/* 
Take 2 strings s1 and s2 including only letters from a - z. 
Return a new sorted string, the longest possible, containing 
distinct letters - each taken only once - coming from s1 or s2
*/

function longest(s1, s2) {
    let combined = s1.concat(s2);
    let combinedSet = new Set(combined);

    return Array.from(combinedSet).sort().join('');
}
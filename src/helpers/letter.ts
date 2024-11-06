export const generateLetter = (value: number): string=>{
    if(value === 4) return 'A'
    else if(value === 3) return 'B'
    else if(value === 2) return 'C'
    else if(value === 1) return 'D'
    else return 'F'
}
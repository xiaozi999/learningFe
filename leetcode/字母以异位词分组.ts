function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>()

  strs.forEach(str=>{
    const key=str.split('').sort().join('')
    if(map.has(key)){
      map.get(key)?.push(str)
    }else{
      map.set(key,[str])
    }
  })
  return Array.from(map.values())
};



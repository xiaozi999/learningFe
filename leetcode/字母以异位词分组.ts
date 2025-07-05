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

//1.核心思路就是利用 sort 将异位词转化成唯一标识符作为 key，付给 map。
//2.如果 map有key，将 key 相同的加入到对应的数组，如果map 没有key 就利用set在 map 新建。


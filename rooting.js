function judgeVegetable(vegetables, metric) {
  let winner = [];
  let win = vegetables[0];
  for(i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i][metric]);
    if(vegetables[i][metric] > win[metric]) {
      win = vegetables[i];
    }
  }
  return win.submitter;
}

vegetables = [
  {
    submitter: 'A',
    d: 5,
  },
  {
    submitter: 'B',
    d: 10,
  },
  {
    submitter: 'C',
    d: 25,
  }
]
metric = 'd'
result = judgeVegetable(vegetables, metric)

console.log(result);

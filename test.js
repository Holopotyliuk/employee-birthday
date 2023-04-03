const employees = new Map([
    [new Date("2001-01-18"), 'Андрій Голопотилюк'],
    [new Date("2001-01-10"), 'Александр Іванченко'],
    [new Date("2001-03-20"), 'Петро Кузик'],
    [new Date("2001-03-11"), 'Оксана Стиценко'],
    [new Date("2000-10-18"), 'Іван Коцюбинський']
  ]);
  
  const sortedEmployees = new Map([...employees].sort((a, b) => a[0] - b[0]));
  
  //console.log(sortedEmployees);
  console.log(...employees)
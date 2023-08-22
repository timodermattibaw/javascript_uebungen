function schaltjahr(j) {
  return (j % 4 == 0 && j % 100 != 0) || j % 400 == 0;
}

console.log(schaltjahr(1997));
console.log(schaltjahr(1996));
console.log(schaltjahr(1900));
console.log(schaltjahr(2000));

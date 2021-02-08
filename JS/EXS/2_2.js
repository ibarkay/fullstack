function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be a ${jobTitle} in ${location} and married to
  ${partnerName} with ${numberOfChildren} children`;
}

console.log(tellFortune('programmer', 'Tel Aviv', 'Sharon', 2));

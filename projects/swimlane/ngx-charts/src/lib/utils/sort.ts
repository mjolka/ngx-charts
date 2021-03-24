export function sortLinear(data, property) {
  return data.sort((a, b) => {
    return a[property] - b[property];
  });
}

export function sortByDomain(data, property, domain) {
  return data.sort((a, b) => {
    const aVal = a[property];
    const bVal = b[property];

    const aIdx = domain.indexOf(aVal);
    const bIdx = domain.indexOf(bVal);

    return aIdx - bIdx;
  });
}

export function sortByTime(data, property) {
  return data.sort((a, b) => {
    const aDate = a[property].getTime();
    const bDate = b[property].getTime();

    if (aDate > bDate) return 1;
    if (bDate > aDate) return -1;
    return 0;
  });
}

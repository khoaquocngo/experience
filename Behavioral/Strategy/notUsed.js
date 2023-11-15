function evaluatePriorityCFS(message, priority) {
  if (priority === 'Low') {
    return `[Low] ${message}`;
  }

  if (priority === 'Medium') {
    return `[Medium] ${message}`;
  }

  if (priority === 'High') {
    return `[High] ${message}`;
  }

  if (priority === 'Urgent') {
    return `[Urgent] ${message}`;
  }

  return `[N/A] ${message}`;
}

console.log(`calculation results:::-------> ${evaluatePriorityCFS('Send cfs to you', 'Lows')}`);
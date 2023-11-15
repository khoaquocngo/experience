function low(message) {
    return `[Low] ${message}`;
  }
  
  function medium(message) {
    return `[Medium] ${message}`;
  }
  
  function high(message) {
    return `[High] ${message}`;
  }
  
  function urgent(message) {
    return `[Urgent] ${message}`;
  }
  
  function exception(message) {
    return `[N/A] ${message}`;
  }
  
  const getPriorityCFS = {
    Low: low,
    Medium: medium,
    High: high,
    Urgent: urgent,
    exception,
  };
  
  function evaluatePriorityCFS(message, priority) {
    return (getPriorityCFS[priority] || getPriorityCFS.exception)(message);
  }
  
  console.log(`calculation results:::-------> ${evaluatePriorityCFS('Send cfs to you', 'Lo3')}`);
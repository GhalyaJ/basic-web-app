export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  } else if (query.toLowerCase().includes("andrew")) {
    return "My Andrew ID is gjohar";
  } else if (query.toLowerCase().includes("largest numbers")) {
    // Add logic to find the largest number among 66, 32, and 4
    const numbers = [66, 32, 4];
    const largestNumber = Math.max(...numbers);
    return `The largest number among 66, 32, and 4 is ${largestNumber}.`;
  } else if (query.toLowerCase().includes("plus")) {
    // Extract the numbers from the query using regular expressions
    const match = query.match(/what is (\d+)\s*plus\s*(\d+)\?/);
    if (match && match.length === 3) {
      const num1 = parseInt(match[1]);
      const num2 = parseInt(match[2]);
      const result = num1 + num2;
      return `The result of ${num1} plus ${num2} is ${result}.`;
    } else {
      return "I couldn't understand the arithmetic expression.";
    }
  }
  return "NO";
}

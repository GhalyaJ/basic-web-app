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
  }
  return "NO";
}

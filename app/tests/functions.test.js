// incrementNumber.test.js
import { increment_number } from '../lib/functions'; // Import the function to be tested

describe('increment_number', () => {
  it('should increment the number by 1', () => {
    const result = increment_number(5);  // Input number 5
    expect(result).toBe(6);  // Output should be 6 (5 + 1)
  });

  it('should increment negative numbers correctly', () => {
    const result = increment_number(-3);  // Input number -3
    expect(result).toBe(-2);  // Output should be -2 (-3 + 1)
  });

  it('should increment zero to 1', () => {
    const result = increment_number(0);  // Input number 0
    expect(result).toBe(1);  // Output should be 1 (0 + 1)
  });
});

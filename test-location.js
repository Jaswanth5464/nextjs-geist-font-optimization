// Simple test to add a sample location to test the tracking functionality
const token = "test-token-123";
const lat = 37.7749;
const lng = -122.4194;

console.log(`Testing with token: ${token}`);
console.log(`Location: ${lat}, ${lng} (San Francisco)`);
console.log(`Track URL: http://localhost:8000/track/${token}`);

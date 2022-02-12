export async function createUser(email, password) {
//   console.log(email);
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await response.json();
  console.log(data)

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

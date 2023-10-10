// github-api.js
async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    return null;
  }
}

export async function getUsers(names) {
  const userPromises = names.map(async (name) => {
    const userData = await fetchUserData(name);
    return userData;
  });

  const users = await Promise.all(userPromises);
  return users;
}

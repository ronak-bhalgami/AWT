// main file
import { getUsers } from "./github-api.js";

async function main() {
  const usernames = ["ronak-bhalgami", "006darsh", "ron-42"]; 

  try {
    const githubUsers = await getUsers(usernames);

    githubUsers.forEach((user, index) => {
      if (user === null) {
        console.log(`User ${usernames[index]} not found or request failed.`);
      } else {
        console.log(`User ${user.login}: ${user.name}`);
      }
    });
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
  }
}

main();

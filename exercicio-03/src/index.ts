interface GitHubUserResponse {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
  message?: "Not Found";
}

interface GitHubRepoResponse {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  created_at: string;
}

const users: GitHubUserResponse[] = [];

async function fetchUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user: GitHubUserResponse = await response.json();

  if (user.message) {
    console.log("Usuário não encontrado");
  } else {
    users.push(user);

    console.log(
      `O usurário ${user.login} foi salvo.\n` +
        `\n id: ${user.id}` +
        `\n login: ${user.login}` +
        `\n Nome: ${user.name}` +
        `\n Bio: ${user.bio}` +
        `\n Repos Públicos: ${user.public_repos}`
    );
  }
}

async function showUser(username: string) {
  const user = users.find((user) => user.login === username);

  if (typeof user === "undefined") {
    console.log("Usuário não encontrado.");
  } else {
    const response = await fetch(user.repos_url);
    const repos: GitHubRepoResponse[] = await response.json();

    let message =
      `\n id: ${user.id}` +
      `\n Nome: ${user.name}` +
      `\n Bio: ${user.bio}` +
      `\n Repo Públicos: ${user.public_repos}`;

    repos.forEach((repo) => {
      const date: Date = new Date(repo.created_at);
      const dia: string = ("0" + date.getDate()).slice(-2);
      const mes: string = ("0" + (date.getMonth() + 1)).slice(-2);
      const ano: string = date.getFullYear().toString().slice(-2);

      message +=
        `\n\n Nome: ${repo.name}` +
        `\n Descrição: ${repo.description}` +
        `\n Estrelas: ${repo.stargazers_count}` +
        `\n ${repo.fork ? "É um fork" : "Não é um fork"}` +
        `\n Criado em: ${dia}/${mes}/${ano}`;
    });

    console.log(message);
  }
}

function showAllUsers() {
  let message = "Usuários:\n";

  users.forEach((user) => {
    message += `\n - ${user.login}`;
  });

  console.log(message);
}

function showReposTotal() {
  const reposTotal = users.reduce((acc, user) => acc + user.public_repos, 0);

  console.log(
    `Os usuários informados possuem juntos um total de ${reposTotal} repositórios públicos.`
  );
}

function showTopFive() {
  const topFive = users
    .slice()
    .sort((a, b) => b.public_repos - a.public_repos)
    .slice(0, 4);

  let message = "Top 5 dos usuários com mais repos públicos:\n";

  topFive.forEach((user, index) => {
    message += `
      ${index + 1} - ${user.login}: ${user.public_repos} repositórios
    `;
  });

  console.log(message);
}

async function main() {
  await fetchUser("huannvictor");
  await fetchUser("isaacpontes");
  await fetchUser("jakeliny");
  await fetchUser("diego3g");
  await fetchUser("maykbrito");
  await fetchUser("julianaconde");
  await fetchUser("lorenalgm");
  await fetchUser("kubowania");
  await fetchUser("annelesinhovski");
  await fetchUser("gustavoguanabara");

  await showUser("huannvictor");
  await showUser("kubowania");

  showAllUsers();
  showReposTotal();
  showTopFive();
}

main();

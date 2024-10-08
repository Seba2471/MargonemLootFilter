export const DiscordWebHooks = {
  outOfTheWay: async () => {
    await postMessageToWebHook(webHookUrl, 'Zgubiłem drogę!');
  },
  notHaveKP: async () => {
    await postMessageToWebHook(webHookUrl, 'Nie mam teleportu na kwiaty');
  },
  seePlayer: async (playerNick: string) => {
    await postMessageToWebHook(webHookUrl, `Gracz: ${playerNick}`);
  },
};

const webHookUrl =
  'https://discord.com/api/webhooks/1250024796780232704/9dht5bXZou2aZxlb3YU0St3hb-iEa4yjuM9JwBueheyl8KWli9vKGrKiHr-VrC79sdKL';

const postMessageToWebHook = async (webHookUrl: string, message: string) => {
  const payload = {
    content: message,
  };

  const response = await fetch(webHookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting message to webhook: ${response.statusText}`);
  }
};

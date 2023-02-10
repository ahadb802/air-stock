const fetchData = async () => {
  try {
    const result = await fetch('https://api.coinstats.app/public/v1/coins');
    const coin = await result.json();
    const arr = coin.coins;
    return arr;
  } catch (error) {
    return error;
  }
};

export default fetchData;

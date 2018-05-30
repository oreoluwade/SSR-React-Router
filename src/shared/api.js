import fetch from 'isomorphic-fetch';

export const fetchPopularRepos = async (language = 'all') => {
  const encodedURI = encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
  try {
    const fetchResult = await fetch(encodedURI);
    const jsonData = await fetchResult.json();
    const repoItems = await jsonData.items;
    return repoItems;
  } catch (error) {
    console.warn(error);
    return null
  }
}

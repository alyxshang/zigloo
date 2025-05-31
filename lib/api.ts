/*
Zigloo by Alyx Shang.
Licensed under the FSL v1.
*/

// Importing the "marked"
// entity to compile Markdown.
import { marked } from 'markdown';

/**
 * An interface
 * to store info
 * on a Zig
 * package with
 * limited information.
 */
interface ZigPackage {

  /** The name of the package. */
  name: string,

  /** The number of stars. */
  stars: number,

  /** The number of forks. */
  forks: number,

  /** The author of the package. */
  owner: string,

  /** The profile picture of the owner. */
  ownerPic: string,

  /** The link to the repository. */
  publicUrl: string,

  /** The link to the documentation. */
  docPage: string,

  /** The description of the package. */
  description: string
}

/**
 * An interface
 * to store info
 * on a Zig
 * package with
 * extended information.
 */
interface ExtendedZigPackage {
  /** The name of the package. */
  name: string,

  /** The number of stars. */
  stars: number,

  /** The number of forks. */
  forks: number,

  /** The author of the package. */
  owner: string,

  /** The profile picture of the owner. */
  ownerPic: string,

  /** The link to the repository. */
  publicUrl: string,

  /** The link to the documentation. */
  docPage: string,

  /** The contents of the "README". */
  readme: string,

  /** The description of the package. */
  description: string,
}

/**
 * Attempts to fetch the code of a repository's
 * "README" and compile it to HTML.
 * @param {string} owner The author of the repository.
 * @param {string} repository The repository's name.
 * @returns {Promise<string>} Returns a promise for the HTML code.
 */
export async function getReadme(
  owner: string,
  repository: string,
): Promise<string> {
  const readmeUrl: string = 'https://api.github.com/repos/' + owner
    + '/' + repository + '/' + 'readme';
  let readmeCode: string = '';
  const readmeResp: Response = await fetch(
    readmeUrl,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  if (readmeResp.status == 200){
    const readmeObj: object = await readmeResp.json();
    const readmeDownloadUrl: string = readmeObj['download_url'];
    const readmeCodeResp: Response = await fetch(readmeDownloadUrl);
    if (readmeCodeResp.status == 200){
      const readmeText: string = await readmeCodeResp.text();
      const code: string = marked.parse(readmeText);
      return code;
    }
    else {
      const repo: string = owner + '/' + repository;
      const msg: string = 'Failed to fetch the "README" for the repository: ' + repo;
      throw new Error(msg);
    }
  }
  else {
    const repo: string = owner + '/' + repository;
    const msg: string = 'Failed to fetch the meta info for the "README" for the repository: ' + repo;
    throw new Error(msg);
  }
}

/**
 * Attempts to fetch an array of all
 * repositories with certain topics.
 * @returns {Promise<Array<Zigpackage>>} 
 * Returns a promise for an array of Zig packages.
 */
export async function fetchPackages(
): Promise<Array<ZigPackage>> {
  let result: Array<ZigPackage> = new Array();
  const url: string = 
    'https://api.github.com/search/repositories?q=topic:zig-library+topic:zig-package';
  const resp: Response = await fetch(
    url,
    {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  if (resp.status == 200){
    const obj: object = await resp.json();
    for (const currItem of obj['items']) {
      const repo: string = currItem['name'];
      const ownerPic: string = currItem['owner']['avatar_url'];
      const owner: string = currItem['owner']['login'];
      const repoUrl: string = currItem['html_url'];
      const stars: number = currItem['stargazers_count'];
      const forks: number = currItem['forks_count'];
      const homepage: string = currItem['homepage'];
      const description: string = currItem['description'];
      const item: ZigPackage = {
        name: repo,
        stars: stars,
        forks: forks,
        owner: owner,
        ownerPic: ownerPic,
        publicUrl: repoUrl,
        docPage: homepage,
        description: description
      };
      result.push(item);
    }
  }
  else {
    const msg: string = 'Could not fetch information on Zig packages.';
    throw new Error(msg);
  }
  return result;
}

/**
 * Attempts to fetch information on a repository
 * in a very detailed manner.
 * @param {string} owner The author of the repository.
 * @param {string} repository The repository's name.
 * @returns {Promise<string>} Returns a promise for an interface
 * containing detailed information on a repository.
 */
export async function fetchPackage(
  owner: string,
  repository: string,
): Promise<ExtendedZigPackage> {
  const repoUrl: string = 'https://api.github.com/repos/' + owner
    + '/' + repository;
  const repoResp: Response = await fetch(
    repoUrl,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  if (repoResp.status == 200){
    const obj: object = await repoResp.json();
    try{
      const readme: string = await getReadme(owner, repository);
      const pkg: ExtendedZigPackage = {
        name: obj['name'],
        stars: obj['stargazers_count'],
        forks: obj['forks_count'],
        owner: owner,
        ownerPic: obj['owner']['avatar_url'],
        publicUrl: obj['html_url'],
        docPage: obj['homepage'],
        readme: readme
      };
      return pkg;
    }
    catch(e){
      throw new Error(e.toString());
    }
  }
  else {
    const repo: string = owner + '/' + repository;
    const msg: string = 'Could not fetch information for repository: ' + repo;
    throw new Error(msg);
  }
}

// Exporting the interfaces.
export type { ZigPackage, ExtendedZigPackage };

// Exporting the functions.
export default { fetchPackages, fetchPackage, getReadme };

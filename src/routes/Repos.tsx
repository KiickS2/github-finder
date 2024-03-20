import { RepoProps } from "../types/repo";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import BackBtn from "../components/BackBtn";

import styles from "./Repos.module.css";

import Loader from "../components/Loader";

import Repo from "../components/Repo";

const Repos = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);

  const [isLoading, setIsLoading] = useState<Boolean>(false);

  useEffect(() => {
    const fetchRepos = async (username: string) => {
      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      setIsLoading(false);

      setRepos(data);
    };

    if (username) {
      fetchRepos(username);
    }
  }, []);

  if (!repos && isLoading) return <Loader />

  return (
    <div className={styles.repos}>
      <BackBtn />
      <h2>Explore os repositórios do usuário: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositório.</p>}
      {repos && repos.length > 0 && (
        <div className={styles.reposContainer}>
            {repos.map((repo: RepoProps) => (
                <Repo key={repo.name} {...repo} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Repos;

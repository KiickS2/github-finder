import { RepoProps } from "../types/repo";

import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineFork } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";

import styles from "./Repo.module.css";

const Repo = ({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) => {
  return (
    <div className={styles.repo}>
      <h3>{name}</h3>
      <p className={styles.language}>
        <BsCodeSlash />
        {language}
      </p>
      <div className={styles.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={styles.repoBtn}>
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;

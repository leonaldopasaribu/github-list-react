import React from "react";

import { FaCode } from "react-icons/fa";

import {
  RepoLink,
  RepoInfo,
  Titles,
  RepoName,
  RepoDescription,
  Details,
  LangInfo,
  NoLineBreak,
} from "./Styles";

export default function Repositories({ repo }) {
  return (
    <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <RepoInfo>
        <Titles>
          <div>
            <RepoName>{repo.name}</RepoName>
          </div>

          {repo.description && (
            <RepoDescription>{repo.description}</RepoDescription>
          )}
        </Titles>

        <Details>
          {repo.language && (
            <LangInfo>
              <FaCode className="icons" />
              <NoLineBreak>{repo.language}</NoLineBreak>
            </LangInfo>
          )}
        </Details>
      </RepoInfo>
    </RepoLink>
  );
}

import React, { Component } from "react";
import GithubProject from "../components/githubProject";
import GithubUser from "../components/githubUser";
import { getUser, getUserRepos } from "../services/githubService";

class Github extends Component {
  state = {
    githubUser: {},
    projects: [],
    isLoaded: false,
    error: null,
  };

  async componentDidMount() {
    const { data: githubUser } = await getUser("MatthewLaFalce");
    const { data: projects } = await getUserRepos(githubUser.login);
    this.setState({ githubUser, isLoaded: true, projects });
  }

  render() {
    const { error, isLoaded, githubUser, projects } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-tl-none p-6 shadow-xl my-8">
          <GithubUser user={githubUser} />
          <div className="divider text-base-content/60 m-0">
            Open Source Projects
          </div>
          <div className="columns-3">
            {projects.map((project) => (
              <GithubProject key={project.id} project={project} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default Github;

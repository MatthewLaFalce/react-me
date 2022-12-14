import React, { Component } from "react";
import Lottie from "react-lottie";
import GithubProject from "../components/github/project";
import GithubUser from "../components/github/user";
import { getUser, getUserRepos } from "../services/githubService";
import * as cubeLoader from "../lotties/cube_loader.json";

class Github extends Component {
  state = {
    githubUser: {},
    projects: [],
    isLoaded: false,
    error: null,
    defaultOptions1: {
      loop: true,
      autoplay: true,
      animationData: cubeLoader.default,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    },
  };

  async componentDidMount() {
    const { data: githubUser } = await getUser("MatthewLaFalce");
    const { data: projects } = await getUserRepos(githubUser.login);

    // Sort projects
    projects.sort((a, b) => b.pushed_at.localeCompare(a.pushed_at));

    this.setState({ githubUser, isLoaded: true, projects });
  }

  render() {
    const { error, isLoaded, githubUser, projects, defaultOptions1 } =
      this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Lottie options={defaultOptions1} height={300} width={300} />;
    } else {
      return (
        <div className="bg-base-100 grid w-full flex-grow gap-3 rounded-xl rounded-tl-none p-6 shadow-xl my-8">
          <GithubUser user={githubUser} />
          <div className="divider text-base-content/60 m-0">Awards</div>
          <a
            href="https://holopin.io/@mattlafalce"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="https://holopin.me/mattlafalce"
              alt="@mattlafalce's Holopin board"
              className="rounded-xl grayscale-50"
            />
          </a>
          <div className="divider text-base-content/60 m-0">
            Open Source Projects
          </div>
          <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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

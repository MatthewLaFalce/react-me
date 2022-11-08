import React, { Component } from "react";
import ExternalLink from "../common/externalLink";

class GithubUser extends Component {
  render() {
    const { avatar_url, name, html_url, login, bio, followers, following } =
      this.props.user;

    return (
      <div className="flex items-center space-x-2">
        <div className="online avatar mr-4">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar_url} alt="My GH profile" />
          </div>
        </div>
        <div>
          <p className="text-xl font-extrabold">{name}</p>
          <ExternalLink
            path={html_url}
            text={login}
            classes="text-base-content/70 text-lg"
          />
          <p className="text-sm">{bio}</p>
          <div className="grid grid-rows-1 grid-flow-col gap-4">
            <ExternalLink
              path={`${html_url}?tab=followers`}
              text={`${followers} Followers`}
              classes="text-base-content/70 text-sm"
            />
            <ExternalLink
              path={`${html_url}?tab=following`}
              text={`${following} Following`}
              classes="text-base-content/70 text-sm"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default GithubUser;

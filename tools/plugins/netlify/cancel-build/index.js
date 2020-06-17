function projectChanged(currentProject, fromHash, toHash) {
  const exec = require('child_process');

  const output = exec
    .execSync(
      `yarn --silent nx print-affected --base=${fromHash} --head=${toHash}`
    )
    .toString();

  const changedProjects = JSON.parse(output).projects;

  return !!changedProjects.find((project) => project === currentProject);
}

module.exports = {
  onPreBuild: ({ utils }) => {
    const app = process.env.APP_NAME;
    const lastDeployedCommit = process.env.CACHED_COMMIT_REF;
    const latestCommit = 'HEAD';

    const projectHasChanged = projectChanged(
      app,
      lastDeployedCommit,
      latestCommit
    );

    if (!projectHasChanged) {
      utils.build.cancelBuild(
        `Build was cancelled because ${app} was not affected by the latest changes`
      );
    }
  },
};

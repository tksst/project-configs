const { getVersionMessage } = require("@changesets/cli/commit").default;

exports.default = {
    // Disable auto-commit for "changeset add"
    // So do not define getAddMessage
    // Enable auto-commit for "changeset version"
    // So use the original getVersionMessage
    getVersionMessage,
};

// Put this file on .changeset and write the following to config.json
// "commit": "./commit.cjs",

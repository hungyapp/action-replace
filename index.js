const core = require('@actions/core');

try {

  const pattern = core.getInput('pattern');
  const string = core.getInput('string');
  const replaceWith = core.getInput('replace')
  const flags = core.getInput('flags')

  const regex = new RegExp(pattern, flags);

  core.setOutput('value', string);
  core.setOutput('result', string.replace(regex, replaceWith));
} catch (error) {
  core.setFailed(error.message);
}
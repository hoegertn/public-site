import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'infra',
  projenrcTs: true,

  deps: [], /* Runtime dependencies of this module. */

});
project.synth();

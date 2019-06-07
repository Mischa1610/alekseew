module.exports = {
  name: 'me',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/me',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

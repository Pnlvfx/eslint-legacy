import { updateLocalDeps } from '@goatjs/updater';

await updateLocalDeps({
  '@goatjs/rimraf': 'github:Pnlvfx/goatjs#workspace=@goatjs/rimraf',
  '@goatjs/ts-unused-exports': 'github:Pnlvfx/goatjs#workspace=@goatjs/ts-unused-exports',
  '@goatjs/typescript-config': 'github:Pnlvfx/typescript-config',
  '@goatjs/updater': 'github:Pnlvfx/goatjs#workspace=@goatjs/updater',
});

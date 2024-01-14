import { createTypeSpecLibrary } from "@typespec/compiler";

export const $lib = createTypeSpecLibrary({
  name: "typespec-markdown",
  diagnostics: {},
});

export const { reportDiagnostic, createDiagnostic } = $lib;

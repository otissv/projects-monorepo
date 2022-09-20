import {
  arrayOfItems,
  arrayType,
  strictObject,
  stringType,
  objectWithRequiredProps,
} from 'jest-json-schema-extended'

export const settingsSchema = {
  data: strictObject({
    content: arrayOfItems(
      objectWithRequiredProps({
        required: arrayType,
      }),
      objectWithRequiredProps({
        branch: stringType,
        ui: stringType,
        folders: arrayOfItems,
      })
    ),
    owner: stringType,
    repo: stringType,
    octokit: objectWithRequiredProps({
      repos: {},
      git: {},
    }),
  }),
}

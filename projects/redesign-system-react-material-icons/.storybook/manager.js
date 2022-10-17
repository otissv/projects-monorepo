// .storybook/manager.js

import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

import theme from './theme'

addons.setConfig({
  theme,
})

export const parameters = {
  docs: {
    theme: themes.dark,
  },
}

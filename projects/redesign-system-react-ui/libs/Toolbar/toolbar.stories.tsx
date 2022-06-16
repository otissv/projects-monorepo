/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { ContentCopyIcon } from '@redesign-system/react-material-icons/libs/ContentCopyIcon'
import { DeleteIcon } from '@redesign-system/react-material-icons/libs/DeleteIcon'
import { DownloadIcon } from '@redesign-system/react-material-icons/libs/DownloadIcon'
import { FileDocumentEditIcon } from '@redesign-system/react-material-icons/libs/FileDocumentEditIcon'
import { PlusIcon } from '@redesign-system/react-material-icons/libs/PlusIcon'

import { FormatAlignCenterIcon } from '@redesign-system/react-material-icons/libs/FormatAlignCenterIcon'
import { FormatAlignLeftIcon } from '@redesign-system/react-material-icons/libs/FormatAlignLeftIcon'
import { FormatAlignRightIcon } from '@redesign-system/react-material-icons/libs/FormatAlignRightIcon'

import { ThemeProvider } from '@redesign-system/react/libs'
import { Toolbar } from './Toolbar'
import { ButtonIcon } from '../ButtonIcon'
import { ButtonGroup, ButtonGroupButtonIcon } from '../ButtonGroup'

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
}

export const Default = () => (
  <ThemeProvider>
    <Toolbar>
      <ButtonIcon alt="add" icon={PlusIcon}>
        Add
      </ButtonIcon>
      <ButtonIcon alt="copy" appearance="TERTIARY" icon={ContentCopyIcon}>
        Copy
      </ButtonIcon>
      <ButtonIcon alt="edit" appearance="TERTIARY" icon={FileDocumentEditIcon}>
        Edit
      </ButtonIcon>
      <ButtonIcon alt="delete" appearance="TERTIARY" icon={DeleteIcon}>
        Delete
      </ButtonIcon>
      <ButtonIcon alt="download" appearance="TERTIARY" icon={DownloadIcon}>
        Download
      </ButtonIcon>
      <ButtonGroup>
        <ButtonGroupButtonIcon
          title="copy"
          alt="copy"
          icon={FormatAlignLeftIcon}
        />
        <ButtonGroupButtonIcon
          title="Home"
          alt="home"
          icon={FormatAlignCenterIcon}
        />
        <ButtonGroupButtonIcon
          title="delete"
          alt="delete"
          icon={FormatAlignRightIcon}
        />
      </ButtonGroup>
    </Toolbar>
  </ThemeProvider>
)

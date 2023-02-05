import React, { FC, Fragment } from 'react'
import { List, ListItem } from '@redesign-system/react-ui/libs/List'
import { Maybe } from '@redesign-system/react-ui/libs/Maybe'
import { ButtonIcon } from '@redesign-system/react-ui/libs/ButtonIcon'
import { ChevronDownIcon } from '@redesign-system/react-material-icons/libs/ChevronDownIcon'
import { ChevronRightIcon } from '@redesign-system/react-material-icons/libs/ChevronRightIcon'
import { useRouter } from 'next/router'
import { EventAction } from 'store-subscriptions'

import { getFileContent } from '../queries/getFileContent'
import { State } from '../store/initialState'

const ToggleChevron: FC<{ isOpen: boolean; onClick: any }> = ({
  isOpen,
  onClick,
}) =>
  isOpen ? (
    <ButtonIcon alt="collapse" icon={ChevronDownIcon} onClick={onClick} />
  ) : (
    <ButtonIcon alt="expand" icon={ChevronRightIcon} onClick={onClick} />
  )

const tableCss = {
  li: {
    borderBottom: '1px solid #352f2f',
  },
  'li:first-child': {
    borderTop: '1px solid #352f2f',
  },
  'li:hover': {
    background: '#eee',
  },
}

const FileList = ({ folders, folderName, onClick }) => (
  <List>
    {folders[folderName]?.files.map((file: string) => (
      <ListItem onClick={onClick(folderName, file)} key={file}>
        {file}
      </ListItem>
    ))}
  </List>
)

export const Listfolders: FC<{
  folders: State['folders']
  setStore: (...actions: readonly EventAction<State>[]) => void
}> = ({ folders, setStore }) => {
  const router = useRouter()

  const handleOnFolderClick = (folder: string, isOpen: boolean) => () => {
    setStore(
      () =>
        ({
          folders: {
            [folder]: {
              isOpen: !isOpen,
            },
          },
        } as any)
    )

    router.push(router.pathname, { query: { folder } })
  }

  const handleOnFileClick = (folder: string, file: string) => async (e) => {
    // const content = await getFileContent(`${folder}/${file}`)

    router.push(router.pathname, { query: { folder, content: file } })

    // setStore(
    //   () =>
    //     ({
    //       folder,
    //       fileName: file,
    //     } as any)
    // )
  }

  return (
    <div>
      <h1>git-cms</h1>
      <List css={tableCss}>
        {Object.keys(folders || {}).map((key) => (
          <Fragment key={key}>
            <ListItem onClick={handleOnFolderClick(key, folders[key].isOpen)}>
              <ToggleChevron
                isOpen={Boolean(folders[key].isOpen)}
                onClick={handleOnFolderClick(key, folders[key].isOpen)}
              />
              {key}
            </ListItem>

            <Maybe check={Boolean(folders[key].isOpen)}>
              <FileList
                folders={folders}
                folderName={key}
                onClick={handleOnFileClick}
              />
            </Maybe>
          </Fragment>
        ))}
      </List>
    </div>
  )
}

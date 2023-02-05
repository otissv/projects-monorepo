export type State = {
  folders: { [key: string]: { files: string[]; isOpen: boolean } }
  fileName: string
  folder: string
  content: {
    name: string
    path: string
    sha: string
    content: Record<string, any>[]
  }
}

export const initialState = {
  folders: {},
  fileName: '',
  folder: '',
  content: { name: '', path: '', sha: '', content: '' },
}

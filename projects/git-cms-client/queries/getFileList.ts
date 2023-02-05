export const getFileList = async () => {
  const owner = 'otissv'
  const repo = 'otissv-test-repo'
  const branch = 'main'
  const url = `http://localhost:5000/git-cms/getFileList?owner=${owner}&repo=${repo}&branch=${branch}`

  try {
    const result = await fetch(url).then((r) => r.json())

    return result?.data?.data.reduce((acc: any, current) => {
      const [folder, files] = current.path.split('/')
      return {
        ...acc,
        [folder]: {
          ...acc[folder],
          files: [...(acc[folder] ? acc[folder].files : []), files],
          isOpen: false,
        },
      }
    }, {})
  } catch (error) {
    console.log(error)
  }
}

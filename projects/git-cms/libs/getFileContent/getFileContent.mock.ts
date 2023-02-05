export const getFileContentMock = Promise.resolve({
  data: {
    name: 'otis.yml',
    path: 'data/conctact.yml',
    sha: 'a11dbdc96c285b2b8c2542dfd3efd9de0c9aa05f',
    content: [
      {
        saved: '2022-09-20T13:40:34.261Z',
        updated: '2022-09-20T13:40:34.261Z',
        savedBy: 'otis',
        updatedBy: 'otis',
      },
      [
        {
          seo: {
            title: 'Contact',
            description: 'description here.',
            author: 'Otis Virginie',
          },
        },
        {
          contact: {
            heading: 'Contact',
            lead: "Let's chat",
            content: '',
            location: ' my house',
          },
        },
        {
          form: {
            heading: 'Porozmawiajmy',
            fields: {
              email: {
                id: 'CONTACT_EMAIL',
                label: 'Email',
                value: '',
                placeholder: 'Email',
                error: '',
                type: 'email',
                required: true,
              },
              subject: {
                id: 'CONTACT_SUBJECT',
                label: 'subject',
                placeholder: 'Subject',
                value: '',
                error: '',
                required: true,
              },
              message: {
                id: 'CONTACT_MESSAGE',
                label: 'message',
                placeholder: 'Message',
                value: '',
                error: '',
                required: true,
              },
              honeypot: {
                id: 'CONTACT_NAME',
                label: 'Name',
                placeholder: 'Name',
              },
            },
            button: 'Send',
          },
        },
      ],
      [
        {
          seo: {
            heading: 'SEO',
            fields: [
              {
                id: 'title',
                label: 'Title',
                component: 'FormTextbox',
                required: true,
                error: '',
                value: '',
              },
              {
                id: 'description',
                label: 'Description',
                component: 'FormTextbox',
                required: true,
                error: '',
                value: '',
              },
              {
                id: 'author',
                label: 'Author',
                component: 'FormTextbox',
                required: true,
                error: '',
                value: '',
              },
            ],
          },
        },
      ],
    ],
  },
  success: 'ok',
})

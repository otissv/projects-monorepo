import React, { useReducer } from 'react'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import { FormTextbox } from '@redesign-system/react-ui/libs/FormTextbox'

import { State } from '../store/initialState'

type Action =
  | {
      key: string
      id: string
      type: string
      payload: Record<string, any>
    }
  | {
      type: string
      payload: Record<string, any>
    }

export const Content = ({
  fileName,
  content,
}: {
  fileName: State['fileName']
  content: State['content']
}) => {
  // // const [meta, content, schema] = store?.content?.data?.content || [{}, [], []]

  // const update = (fields, id: string, payload) => {
  //   let index = 1
  //   let item = fields

  //   console.log('update fields', fields)
  //   // const index = fields.findIndex((field) => field.id === id)

  //   // const item = {
  //   //   ...fields[index],
  //   //   ...payload,
  //   // }

  //   // switch (index) {
  //   //   case 0:
  //   //     return [item, ...fields]

  //   //   case fields.length - 1:
  //   //     return [...fields, item]
  //   //   default:
  //   //     return fields
  //   // }

  //   return fields
  // }

  // const reducer = (state, { key, id, type, payload }: Action) => {
  //   switch (type) {
  //     case 'REPLACE':
  //       return payload
  //     case 'UPDATE':
  //       return [
  //         ...state,
  //         // [key]: [...state, update(state[key], id, payload)],
  //       ]
  //     default:
  //       return state
  //   }
  // }
  // const [form, dispatch] = useReducer(reducer, schema || [])

  // console.log('form', form)
  // // console.log('schema', schema)

  // const buildFields = (handlers) => {
  //   return (form || []).reduce(
  //     (acc, current) => {
  //       const key = Object.keys(current)[0]

  //       const components = current[key].fields.map(
  //         ({ heading, component, ...field }) => {
  //           const lib = require('@redesign-system/react-ui/libs')
  //           const Component = lib['FormTextbox']

  //           return (
  //             <fieldset>
  //               <legend>Personalia:</legend>
  //               <Component
  //                 key={field.id}
  //                 {...field}
  //                 {...handlers}
  //                 id={`${key}-${field.id}`}
  //                 value={field.value || ''}
  //               />
  //             </fieldset>
  //           )
  //         }
  //       )

  //       return {
  //         ...acc,
  //         fields: {
  //           ...acc.fields,
  //           [key]: current[key].fields.map((fields) => ({
  //             ...fields,
  //             error: '',
  //             value: '',
  //           })),
  //         },
  //         components: [...acc.components, components],
  //         formState: {
  //           ...acc.formState,
  //         },
  //       }
  //     },
  //     { components: [], fields: {}, form: {} }
  //   )
  // }

  // const { components, fields } = buildFields({
  //   onChange: (e) => {
  //     const id = e.target.id
  //     const value = e.target.value

  //     dispatch({
  //       type: 'UPDATE',
  //       id: id.substr(id.indexOf('-') + 1, id.length),
  //       key: id.substr(0, id.indexOf('-')),
  //       payload: {
  //         value,
  //         error: '',
  //       },
  //     })
  //   },
  //   onBlur: () => {},
  //   onSubmit: () => {},
  // })

  // useEffect(() => {
  //   dispatch({
  //     type: 'REPLACE',
  //     payload: schema,
  //   })
  // }, [schema.length])

  // console.log('fields: ', fields)

  return (
    <>
      Components
      {/* <form>{components}</form>
      <ul>
        <li>Created: {meta.saved}</li>
        <li>Updated: {meta.updated}</li>
        <li>CreatedBy: {meta.savedBy}</li>
        <li>UpdatedBy: {meta.updatedBy}</li>
      </ul> */}
    </>
  )
}

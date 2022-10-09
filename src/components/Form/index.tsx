import { useForm, SubmitHandler } from 'react-hook-form'
import { nanoid } from "@reduxjs/toolkit";
import { addNode } from "../../features/nodesSlice";
import { useAppDispatch } from "../../hooks/useNode";
import { useEffect, useState } from "react";
import { AddBtn } from "../Buttons/add";

interface FormNewCategory {
  title: string
}

type Props = {
  closeModal?: () => void
}

const Form = ({ closeModal }: Props) => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<FormNewCategory>();
  const [newNode, setNewNode] = useState<Nodes>({
    data: {
      id: nanoid(),
      description: '',
      links: '',
      title: ''
    },
    branch: []
  })

  const addNewNode = () => dispatch(addNode(newNode))

  const onSubmit: SubmitHandler<FormNewCategory> = (data) => {
    setNewNode({

      data: {
        ...newNode.data,
        title: data.title
      }
    })
    addNewNode()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Title"
        {...register('title', { required: true })}
      />
      <AddBtn type="submit" onClick={closeModal} />
    </form>
  )
}

export default Form 
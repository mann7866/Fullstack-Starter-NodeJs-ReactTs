import { useState } from 'react'
import type { User } from '@/features/user/types/user'
import Button from '@/components/button/button'
import type { FieldErrors } from '@/types/form'
import { useNavigate } from 'react-router-dom'

type UserFields = 'name' | 'email'

interface Props {
  initial?: Partial<User>
  errors?: FieldErrors<UserFields>
  onSubmit: (data: Omit<User, 'id'>) => void
}


export default function UserForm({ initial, onSubmit, errors }: Props) {
  const [name, setName] = useState(initial?.name || '')
  const [email, setEmail] = useState(initial?.email || '')
  const navigate = useNavigate()
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        onSubmit({ name, email })
      }}
    >
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        {errors?.name && (
          <p style={{ color: 'red' }}>{errors.name}</p>
        )}
      </div>

      <div>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors?.email && (
          <p style={{ color: 'red' }}>{errors.email}</p>
        )}
      </div>

      <Button type="submit">Save</Button>
      <Button onClick={() => navigate('/users')}>Batal</Button>
    </form>
  )
}

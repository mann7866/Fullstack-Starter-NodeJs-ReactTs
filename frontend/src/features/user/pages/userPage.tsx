import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUserStore } from '@/features/user/store/user.store'
import Button from '@/components/button/button'
import ConfirmModal from '@/components/modal/ConfirmModal'

export default function UserListPage() {
  const { users, fetchUsers, deleteUser } = useUserStore()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleDeleteClick = (id: number) => {
    setSelectedId(id)
    setOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (selectedId) {
      await deleteUser(selectedId)
    }
    setOpen(false)
    setSelectedId(null)
  }

  return (
    <div>
      <h1>User List</h1>

      <Button onClick={() => navigate('/users/create')}>
        Create User
      </Button>

      <table>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteClick(u.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔥 MODAL DELETE */}
      <ConfirmModal
        open={open}
        title="Hapus User"
        message="Yakin ingin menghapus user ini?"
        onClose={() => setOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  )
}

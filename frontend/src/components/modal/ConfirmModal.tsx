import Button from '@/components/button/button'

interface ConfirmModalProps {
  open: boolean
  title?: string
  message: string
  onConfirm: () => void
  onClose: () => void
}

export default function ConfirmModal({
  open,
  title = 'Konfirmasi',
  message,
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  if (!open) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
      }}
    >
      <div
        style={{
          background: 'white',
          color: 'darkblue',
          padding: 20,
          borderRadius: 8,
          minWidth: 300,
        }}
      >
        <h3>{title}</h3>
        <p>{message}</p>

        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  )
}

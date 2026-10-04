interface EmptyContentMessageProps {
  message?: string;
}

export function EmptyContentMessage({ message = 'Content will be added soon.' }: EmptyContentMessageProps) {
  return (
    <p
      style={{
        fontSize: '14px',
        color: '#64748B',
        fontStyle: 'italic',
        fontFamily: 'Inter, sans-serif',
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: 'rgba(15, 23, 42, 0.4)',
        border: '1px dashed rgba(148, 163, 184, 0.2)',
        textAlign: 'center',
      }}
    >
      {message}
    </p>
  );
}

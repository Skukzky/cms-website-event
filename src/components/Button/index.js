import React from 'react';
import { Button } from 'react-bootstrap';

export default function ComponentButton({ children, onClick, variant, size, loading, disabled, className }) {
  return (
    <Button className={className} onClick={onClick} variant={variant} disabled={disabled} size={size}>
      {loading ? 'Loading...' : children}
    </Button>
  );
}

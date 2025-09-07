import { useState } from 'react';

export function useFormStatus() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<null | string>(null);

  async function submitForm<T>(request: () => Promise<T>, onSuccess?: (result: T) => void) {
    setStatus('pending');
    setError(null);

    try {
      const result = await request();
      setStatus('success');
      onSuccess?.(result);
    } catch (err: any) {
      setStatus('error');
      setError(err?.message || 'Something went wrong');
    }
  }

  return { status, error, submitForm };
}

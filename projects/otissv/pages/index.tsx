import { Button } from 'ui';
import { argNames } from 'c-ufunc/argNames';

export default function Web() {
  return (
    <div>
      <h1>{argNames((a: number, b: number) => a + b)}</h1>
      <Button />
    </div>
  );
}

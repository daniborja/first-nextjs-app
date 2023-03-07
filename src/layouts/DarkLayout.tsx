import { ReactNode } from 'react';

interface DarkLayoutProps {
  // children: JSX.Element | JSX.Element[];
  children: ReactNode;
}

const DarkLayout = ({ children }: DarkLayoutProps) => {
  // const DarkLayout: FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <h2>DARK</h2>
      <div>{children}</div>
    </div>
  );
};

export default DarkLayout;

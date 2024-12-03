import { RecoilRoot } from 'recoil';
import Recoilize from 'recoilize';

function Providers({ children }) {
  return (
    <RecoilRoot>
      {process.env.NODE_ENV === 'development' && <Recoilize />}
      {children}
    </RecoilRoot>
  );
} 
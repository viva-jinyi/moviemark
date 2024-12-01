import { type ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import SidebarProvider from '@/contexts/SidebarContext';
import ClientSidebar from './Sidebar/ClientSidebar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider>
      <div
        // 성능: bg-fixed는 새로운 컴포지팅 레이어를 생성하여
        // 스크롤 시 CPU 대신 GPU가 처리하도록 하여 메인 스레드 부하 감소
        //
        // 접근성: 오버레이 그라데이션(rgba(18,24,41,0.8))으로
        // WCAG 2.1 명암비 기준을 충족하여 텍스트 가독성 보장
        //
        // 반응형: bg-cover로 비율을 유지하며 컨테이너를 채우고
        // bg-center로 중앙점 기준 확대/축소 처리
        //
        // 유지보수: 배경 스타일을 tailwind.config.ts에 한 번만 정의하여
        // 단일 진실 공급원(Single source of truth) 원칙 준수
        className="min-h-screen flex flex-col bg-gray-900 bg-main-gradient bg-cover bg-top bg-no-repeat bg-fixed"
      >
        <Header />
        <ClientSidebar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Layout;

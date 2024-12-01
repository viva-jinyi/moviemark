interface MainProps {
  children?: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="main-content">
      <div className="container">
        {children}
      </div>
    </main>
  );
};

export default Main;

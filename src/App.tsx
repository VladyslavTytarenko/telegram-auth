import { LoginButton } from '@telegram-auth/react';
import './App.css';

function App() {
  return (
    <>
      <div className="middle-center">
        <h2>Sign In & Sign Up</h2>
        <LoginButton
          botUsername="FlipWorldBot"
          authCallbackUrl="/user/account"
          onAuthCallback={() => console.log('')}
          buttonSize="large"
          cornerRadius={5}
          showAvatar={true}
          lang="en"
        />
      </div>
    </>
  );
}

export default App;

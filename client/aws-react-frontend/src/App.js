import React from 'react';
import './App.css';
// import {Amplify} from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { withAuthenticator} from '@aws-amplify/ui-react';
// import { Authenticator } from '@aws-amplify/ui-react';
// import '@aws-amplify/ui-react/styles.css';
import Landing from './pages/Landing';

// Amplify.configure(awsconfig)

function App() {

  return (
    <div className="App">
         {/* <Authenticator>
            {({ signOut, user }) => (
              <main>
                <div className="App">
                  <header className="App-header">
                  <button onClick={signOut}>Sign out</button> */}
                  <Landing/>
                  {/* </header>
                </div>
              </main>
            )}
          </Authenticator> */} */}
  
    </div>
  );
}

// export default withAuthenticator(App);
export default App;


import './App.css'
import NavBarContainer from './NavBar/NavBarContainer'
import HomeScreen from './Screens/Home'

function App() {
  return (
    <div className="flex flex-row justify-start w-full h-screen">
      <div className="bg-red-800 w-36">
        <NavBarContainer />
      </div>
      <div className="bg-blue-800 w-full flex flex-col border-l-4 border-indigo-900">
        {/* 7/8 main section */}
        <div className="text-center bg-gray-300 text-3xl py-4 border-b-4 border-indigo-900">
          {/* This will be based on the current url path */}
          {/* 1/6 top tab */}
          Home Tab
        </div>
        <div className="bg-green-700">
          {/* 5/6 main section */}
          <HomeScreen />
        </div>
      </div>
    </div>
  )
}

export default App

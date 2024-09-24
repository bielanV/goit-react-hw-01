import Profile from "./components/Profile/Profile.jsx"
import FriendLists from "./components/FriendsList/FriendsList.jsx"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx"

import profilesData from "./components/Profile/userData.json"
import friends from "./components/FriendsList/friendsList.json"
import transactions from "./components/TransactionHistory/transactions.json"



const App = () => {
  return (
    <div>
      <Profile
        key={profilesData.email}
        avatar={profilesData.avatar}
        username={profilesData.username}
        tag={profilesData.tag}
        location={profilesData.location}
        followers={profilesData.stats.followers}
        views={profilesData.stats.views}
        likes={profilesData.stats.likes}
      />

      <FriendLists friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App
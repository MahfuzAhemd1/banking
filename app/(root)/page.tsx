import React from 'react'
  import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = { firstName:'Sornir', lastName: 'Ahmed', email:'sornir@gmail.com'}
  return (
    <section className="home">
       <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions easily"

          />

          <TotalBalanceBox 
          
          accounts={[]}
            totalBanks={1}
            totalCurrentBalance={125.25}
          />
        </header>

      RECENT TRANSACTION
       </div>

       <RightSidebar  user={loggedIn}
       transactions={[]}
       banks={[{currentBalance:123.50},{currentBalance:500.50}]}
       />
      
    </section>
  )
}

export default Home
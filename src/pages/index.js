import React from "react"

import Layout from '../components/Layout'
import Message from '../components/Message'
import Cta from '../components/Cta'

const Home = () => {
  return (
    <Layout>
      <h1>
        Gatsby Boilerplate
      </h1>
      <p>
        Carlos 'Charlie' Caro.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h2>
        This is just an H2
      </h2>
      <p>
        Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.
      </p>
      <h3>
        Hey there H3 here
      </h3>
      <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
        <Message
          messageStyle="bg-message-success-light text-message-success-dark" 
        >
          success
        </Message>
        <Message
          messageStyle="bg-message-warning-light text-message-warning-dark" 
        >
          warning
        </Message>
        <Message
          messageStyle="bg-message-danger-light text-message-danger-dark" 
        >
          danger
        </Message>
        <Cta>
          call to action 1
        </Cta>
        <Cta>
          call to action 1
        </Cta>
        <Cta>
          call to action 1
        </Cta>
        <div>
          <button>
            button 1
          </button>
        </div>
        <div>
          <button>
            button 2
          </button>
        </div>
        <div>
          <button>
            button 3
          </button>
        </div>
      </div>
    </Layout>
  )
}

export default Home
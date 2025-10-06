import { createContext, useContext, useState } from "react"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {

  const [selectedUser, setSelectedUser] = useState(null)

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Alice",
      status: "online",
      lastSeen: "",
      messages: [
        {
          id: 1,
          text: "Hello!",
          time: "10:00 AM"
        },
        {
          id: 2,
          text: "How are you?",
          time: "10:05 AM"
        }
      ]
    },
    {
      id: 2,
      name: "Marita",
      status: "offline",
      lastSeen: "3 hours ago",
      messages: [
        {
          id: 1,
          text: "Hi!",
          time: "9:00 AM"
        },
        {
          id: 2,
          text: "Are you there?",
          time: "9:15 AM"
        }
      ]
    }
  ])

  return (
    <ChatContext.Provider value={{ users, setSelectedUser, selectedUser }} >
      {children}
    </ChatContext.Provider>
  )
}

const useChat = () => useContext(ChatContext)

export { ChatProvider, useChat }
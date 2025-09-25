import { useState } from "react"

export default function Sidebar() {
  const users = [
    {
      id: 1,
      name: "Juan Perez",
      status: "offline",
      lastSeen: "7 mins ago",
    },
    {
      id: 1,
      name: "Aiden Chavez",
      status: "offline",
      lastSeen: "14 mins ago",
    },
    {
      id: 1,
      name: "Mike Thomas",
      status: "online",
      lastSeen: "",
    },
    {
      id: 1,
      name: "Christian Kelly",
      status: "online",
      lastSeen: "",
    },
    {
      id: 1,
      name: "Monica Ward",
      status: "offline",
      lastSeen: "1 hour ago",
    },
  ]

  const [usersToRender, setUsersToRender] = useState(users)

  const handleChange = (event) => {
    const result = users.filter((user) => user.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setUsersToRender(result)
  }

  return (
    <div className="sidebar">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={handleChange}
      />
      {
        usersToRender.length === 0 && <p className="search-result">No search found...</p>
      }
      <ul className="user-list">
        {
          usersToRender.map(user => <li className="user">
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s" alt="" />
            <div></div>
            <div className="user-info">
              <strong>
                <span style={{ color: user.status === "online" ? "green" : "red", marginRight: "3px" }}>•</span>{user.name}
              </strong>
              <small>{user.status === "offline" ? user.lastSeen : "online"}</small>
            </div>
          </li>)
        }
      </ul>
    </div>
  )
}

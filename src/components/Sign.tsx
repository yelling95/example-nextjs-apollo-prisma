import { useMutation } from "@apollo/react-hooks" 
import { useState } from "react"
import { gql } from "@apollo/client"

const M_SIGNUP = gql`
  mutation signup($id: String!, $email: String!, $name: String) {
    signup(id: $id, email: $email, name: $name) {
      id
      email
      name
    }
  }
`

function Sign () {
  const [id, setId] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [signup] = useMutation(M_SIGNUP)

  const handleSign = async () => {
    await signup({
      variables: {
        id: id,
        email: email,
        name: name
      }
    })
  }

  return (
    <div>
      <div>
        ID: 
        <input
          value={id}
          onChange={e => setId(e.target.value)}
        />
      </div>
      <div>
        EMAIL: 
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        NAME: 
        <input
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <button onClick={handleSign}>등록</button>
    </div>
  )
}

export default Sign
export const getUserToken = async (email: string, password: string) : Promise<string> => {
  const response = await fetch('/api/signin', {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      email,
      password
    })
  })

  if(response){
      const tokenObject = await response.json()
      if(tokenObject && tokenObject.token){
        return tokenObject.token
      } 
      throw new Error('invalid response')
  } 
  throw new Error('invalid response')
}
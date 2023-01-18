 const DynamicPage = async ({params: {
    todoId
 }}) => {
    const test = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
    
    if (!test.ok) {
      throw Error('Failed to fetch the todo' + todoId)
    }
    const testJson = await test.json()
    console.log(testJson)
    return <>The id of the TODO is: {todoId}<br/> <pre>{JSON.stringify(testJson, null, 4)}</pre></>
}

export default DynamicPage
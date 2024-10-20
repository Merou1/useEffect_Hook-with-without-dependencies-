useEffect(() => {
//Runs after every component re-render
})

useEffect(() => {
//Runs only when the component is mounted (rendered for the first time)
},[])

useEffect(() => {
//Runs when the component is mounted (rendered for the first time) or if the dependencies values change
},[values])

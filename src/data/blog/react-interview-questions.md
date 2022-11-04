# React Interview Questions

What would be the output of the following code?

```js
const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
  })

  return <div>{count}</div>
}
```
